// Serverless proxy: receives an email from the site popup and creates a
// subscriber in Beehiiv. The API key never touches the browser — it's read
// from Netlify environment variables (set BEEHIIV_API_KEY and
// BEEHIIV_PUBLICATION_ID in Netlify → Site settings → Environment variables).

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let email;
  try {
    ({ email } = JSON.parse(event.body || "{}"));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Bad request" }) };
  }

  const valid = typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid email" }) };
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  // Defaults to Jonathan's existing publication; override via env var if needed.
  const pubId =
    process.env.BEEHIIV_PUBLICATION_ID || "pub_45394cf1-13c1-4b4c-b64b-5c66d3ff4038";
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "BEEHIIV_API_KEY not set" }) };
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "telosmedia.co",
          utm_medium: "website_popup",
        }),
      },
    );

    if (!res.ok) {
      const detail = await res.text();
      return { statusCode: 502, body: JSON.stringify({ error: "Beehiiv error", detail }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch {
    return { statusCode: 502, body: JSON.stringify({ error: "Network error" }) };
  }
};
