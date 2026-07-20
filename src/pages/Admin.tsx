import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CRED_KEY = "telos_admin_cred"; // kept in sessionStorage so a refresh stays signed in

type Totals = {
  views: number;
  signups: number;
  bookClicks: number;
  booked: number;
  optInRate: number | null;
  bookedRate: number | null;
};
type DayRow = { date: string } & Record<string, number | string>;
type OptIn = { email: string; status: string; date: string | null };
type Channel = {
  channel: string;
  views: number;
  signups: number;
  booked: number;
  optInRate: number | null;
};
type Data = {
  totals: Totals;
  daily: DayRow[];
  byChannel: Channel[];
  optIns: OptIn[];
  beehiivCount: number;
};

const pct = (r: number | null) =>
  r == null ? "—" : `${(r * 100).toFixed(1)}%`;

const fmtDate = (value: string | null) => {
  if (!value) return "—";
  // Date-only keys ("YYYY-MM-DD") must be read as a local calendar day, or a
  // browser behind UTC renders them one day early. Full ISO timestamps are fine.
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  const d = dateOnly
    ? new Date(+dateOnly[1], +dateOnly[2] - 1, +dateOnly[3])
    : new Date(value);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
};

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = async (cred: { email: string; password: string }) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/.netlify/functions/admin-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cred),
      });
      if (res.status === 401) {
        setError("Wrong email or password.");
        sessionStorage.removeItem(CRED_KEY);
        setData(null);
        return;
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error || `Error ${res.status}`);
        return;
      }
      const body: Data = await res.json();
      setData(body);
      sessionStorage.setItem(CRED_KEY, JSON.stringify(cred));
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  };

  // Keep this page out of search indexes; restore auth from the session.
  useEffect(() => {
    document.title = "Telos — Admin";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    const saved = sessionStorage.getItem(CRED_KEY);
    if (saved) {
      try {
        load(JSON.parse(saved));
      } catch {
        sessionStorage.removeItem(CRED_KEY);
      }
    }
    return () => {
      document.head.removeChild(meta);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    sessionStorage.removeItem(CRED_KEY);
    setData(null);
    setEmail("");
    setPassword("");
  };

  // --- Login screen ---
  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            load({ email, password });
          }}
          className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-xl"
        >
          <h1 className="text-lg font-semibold text-slate-900">Telos Admin</h1>
          <p className="mt-1 text-sm text-slate-500">
            Private dashboard. Sign in to continue.
          </p>
          <input
            type="email"
            autoComplete="username"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[16px] outline-none focus:border-slate-900"
          />
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-3 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-[16px] outline-none focus:border-slate-900"
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Checking…" : "Sign in"}
          </button>
        </form>
      </div>
    );
  }

  const { totals, daily, optIns, byChannel } = data;
  const chartData = daily.map((d) => ({
    date: fmtDate(d.date as string),
    Views: Number(d["Popup Shown"] || 0),
    Signups: Number(d["Popup Signup"] || 0),
  }));

  const cards = [
    { label: "Opt-in rate", value: pct(totals.optInRate), accent: true },
    { label: "Popup views", value: totals.views.toLocaleString() },
    { label: "Signups", value: totals.signups.toLocaleString() },
    { label: "Book-a-call clicks", value: totals.bookClicks.toLocaleString() },
    { label: "Calls booked", value: totals.booked.toLocaleString() },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Popup Analytics
            </h1>
            <p className="text-sm text-slate-500">
              Opt-in performance for the site email capture.
            </p>
          </div>
          <button
            onClick={logout}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Sign out
          </button>
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
          {cards.map((c) => (
            <div
              key={c.label}
              className={`rounded-xl border p-4 ${
                c.accent
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                className={`text-[11px] font-medium uppercase tracking-wide ${
                  c.accent ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {c.label}
              </div>
              <div className="mt-1.5 text-2xl font-semibold">{c.value}</div>
            </div>
          ))}
        </div>

        {/* Trend chart */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Views vs. signups
          </h2>
          {chartData.length === 0 ? (
            <p className="py-16 text-center text-sm text-slate-400">
              No data yet. Numbers appear as visitors trigger the popup.
            </p>
          ) : (
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0f172a" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="s" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12, fill: "#64748b" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fontSize: 12, fill: "#64748b" }}
                    axisLine={false}
                    tickLine={false}
                    width={28}
                  />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Views"
                    stroke="#0f172a"
                    strokeWidth={2}
                    fill="url(#v)"
                    isAnimationActive={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="Signups"
                    stroke="#2563eb"
                    strokeWidth={2}
                    fill="url(#s)"
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* By traffic source */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            By traffic source
          </h2>
          <p className="mt-0.5 text-xs text-slate-400">
            First-touch attribution. Opt-in rate is what converts, not just what
            sends traffic.
          </p>
          {!byChannel || byChannel.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400">
              No attributed traffic yet.
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-left text-[11px] uppercase tracking-wide text-slate-400">
                    <th className="pb-2 font-medium">Source</th>
                    <th className="pb-2 text-right font-medium">Views</th>
                    <th className="pb-2 text-right font-medium">Signups</th>
                    <th className="pb-2 text-right font-medium">Opt-in</th>
                    <th className="pb-2 text-right font-medium">Booked</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {byChannel.map((c) => (
                    <tr key={c.channel}>
                      <td className="py-2.5 font-medium text-slate-800">
                        {c.channel}
                      </td>
                      <td className="py-2.5 text-right tabular-nums text-slate-600">
                        {c.views.toLocaleString()}
                      </td>
                      <td className="py-2.5 text-right tabular-nums text-slate-600">
                        {c.signups.toLocaleString()}
                      </td>
                      <td className="py-2.5 text-right tabular-nums font-semibold text-slate-900">
                        {pct(c.optInRate)}
                      </td>
                      <td className="py-2.5 text-right tabular-nums text-slate-600">
                        {c.booked.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent opt-ins */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">
              Recent opt-ins
            </h2>
            <span className="text-xs text-slate-400">
              {data.beehiivCount} from Beehiiv
            </span>
          </div>
          {optIns.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400">
              No popup opt-ins captured yet.
            </p>
          ) : (
            <div className="mt-3 divide-y divide-slate-100">
              {optIns.map((o) => (
                <div
                  key={o.email}
                  className="flex items-center justify-between py-2.5 text-sm"
                >
                  <span className="text-slate-800">{o.email}</span>
                  <span className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        o.status === "active"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {o.status}
                    </span>
                    <span className="w-12 text-right text-slate-400">
                      {fmtDate(o.date)}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
