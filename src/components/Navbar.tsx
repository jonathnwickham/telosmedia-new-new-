const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3.5 flex items-center justify-between bg-background/85 backdrop-blur-xl border-b border-border">
      <a href="#" className="flex items-center gap-2.5 text-foreground no-underline font-bold text-lg tracking-tight">
        <div className="w-[30px] h-[30px] bg-gradient-to-br from-primary to-[hsl(var(--gradient-end))] rounded-[7px] flex items-center justify-center text-sm font-bold text-primary-foreground">
          T
        </div>
        Telos Media
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Services</a>
        <a href="#process" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Process</a>
        <a href="#meaning" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About</a>
        <a
          href="https://calendly.com/jonathan-telosmedia/discovery-call"
          className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-md text-[13px] hover:brightness-110 hover:-translate-y-px transition-all shadow-[0_4px_20px_hsl(var(--primary)/0.12)]"
        >
          BOOK NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
