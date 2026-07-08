import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import logo from "@/assets/logo.png";
import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
  const { lang } = useLang();
  return (
    <footer className="border-t border-border/60 py-12 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LBN Flow" className="h-8 w-8" />
            <div>
              <div className="font-display font-bold">LBN Flow</div>
              <div className="text-xs text-muted-foreground">{T.footer.tagline[lang]}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
  href="https://t.me/your_username"  target="_blank"  rel="noopener noreferrer"  aria-label="Telegram"  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition">
  <FaTelegramPlane size={16} />
</a>
            <a href="mailto:agencysmm2019@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition">
              <Mail size={16} />
            </a>
            <a href="https://www.instagram.com/lbnflow" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition">
              <Instagram size={16} />
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LBN Flow. {T.footer.rights[lang]}
          </div>
        </div>
      </div>
    </footer>
  );
};
