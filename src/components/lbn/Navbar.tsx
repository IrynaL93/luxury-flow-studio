import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "work", key: "work" as const },
  { id: "process", key: "process" as const },
  { id: "stack", key: "stack" as const },
  { id: "contact", key: "contact" as const },
];

export const Navbar = () => {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container">
        <nav className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass-strong shadow-card" : "glass"}`}>
          <a href="#top" className="flex items-center gap-2.5 group">
            <img src={logo} alt="LBN Flow logo" className="h-8 w-8 group-hover:scale-110 transition-transform" />
            <span className="font-display font-bold text-lg tracking-tight">LBN Flow</span>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg">
                  {T.nav[l.key][lang]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-xs font-medium glass rounded-full p-0.5">
              {(["ua", "en"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 rounded-full transition-all ${lang === code ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label={`Switch to ${code.toUpperCase()}`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:scale-105 transition-transform">
              {T.nav.cta[lang]}
            </a>
            <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition">
                    {T.nav[l.key][lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};