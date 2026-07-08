import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, Instagram, ExternalLink, ArrowRight } from "lucide-react";

export const Contact = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-5xl">
        <div className="reveal relative overflow-hidden rounded-[2rem] glass-strong p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" aria-hidden />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px]" aria-hidden />
          <div className="relative">
            <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-5">{T.contact.tag[lang]}</div>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-5 text-gradient">{T.contact.title[lang]}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">{T.contact.subtitle[lang]}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:agencysmm2019@gmail.com" className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                <Mail size={18} />
                {T.contact.email[lang]}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://www.instagram.com/lbnflow" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass text-foreground font-semibold hover:bg-muted/60 transition-colors">
                <Instagram size={18} />
                @lbnflow
              </a>
              <a href="https://freelancehunt.com/freelancer/Irish93.html#portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass text-foreground font-semibold hover:bg-muted/60 transition-colors">
                <ExternalLink size={18} />
                {T.contact.fh[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
