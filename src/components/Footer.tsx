const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 bg-surface">
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-2.5 text-foreground no-underline font-bold text-lg">
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-primary to-[hsl(var(--gradient-end))] rounded-[7px] flex items-center justify-center text-sm font-bold text-primary-foreground">
              T
            </div>
            Telos Media
          </a>
          <div className="text-[13px] text-text-muted">Copyright © 2023. Telos Media. All rights reserved.</div>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="mailto:jonathan@telosmedia.co" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact us via Email
          </a>
          <a href="https://calendly.com/jonathan-telosmedia/discovery-call" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Book a Call
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
