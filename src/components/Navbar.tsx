import telosLogo from "@/assets/telos-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3.5 flex items-center justify-between bg-card/90 backdrop-blur-xl border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <a href="#" className="flex items-center">
        <img src={telosLogo} alt="Telos Media" className="h-8" />
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Services</a>
        <a href="#results" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Results</a>
        <a href="#process" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Process</a>
        <a href="#meaning" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About</a>
        <a
          href="https://calendly.com/jonathan-telosmedia/discovery-call"
          className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-md text-[13px] hover:brightness-110 hover:-translate-y-px transition-all shadow-[0_2px_12px_hsl(205_55%_50%/0.3)]"
        >
          BOOK NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
