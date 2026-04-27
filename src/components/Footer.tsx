import telosLogo from "@/assets/telos-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-white px-6 py-14">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <a href="#" className="flex items-center text-foreground no-underline">
            <img src={telosLogo} alt="Telos Media" className="h-8 w-auto object-contain" />
          </a>
          <div className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} Telos Media. All rights reserved.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[14px] sm:justify-end">
          <a href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#results" className="text-muted-foreground transition-colors hover:text-foreground">
            Results
          </a>
          <a href="#process" className="text-muted-foreground transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </a>
          <a
            href="mailto:jonathan@telosmedia.co"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            jonathan@telosmedia.co
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
