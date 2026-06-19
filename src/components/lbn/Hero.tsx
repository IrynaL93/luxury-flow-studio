import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import iryna from "@/assets/iryna-portrait.png.asset.json";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const { lang } = useLang();
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-[120px] pointer-events-none" aria-hidden />
      <div className="container relative">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary-glow mb-8">
              <Sparkles size={14} />
              {T.hero.eyebrow[lang]}
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {T.hero.title1[lang]} <span className="text-gradient-primary">{T.hero.titleAccent[lang]}</span>
              <br />
              {T.hero.title2[lang]} <span className="text-gradient-primary">{T.hero.titleAccent2[lang]}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">{T.hero.subtitle[lang]}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                {T.hero.ctaPrimary[lang]}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground font-semibold hover:bg-muted/60 transition-colors">
                {T.hero.ctaSecondary[lang]}
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] blur-2xl opacity-40" aria-hidden />
              <div className="relative h-full rounded-[2rem] overflow-hidden glass-strong shadow-elegant">
                <img src={iryna.url} alt="Iryna Liubynetska, founder of LBN Flow" className="w-full h-full object-cover" width={1536} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-strong rounded-2xl p-4">
                    <div className="text-xs text-primary-glow font-medium mb-1">{lang === "ua" ? "Засновниця" : "Founder"}</div>
                    <div className="font-display font-semibold text-lg">Iryna Liubynetska</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-strong rounded-2xl px-4 py-3 animate-float">
                <div className="text-xs text-muted-foreground">{lang === "ua" ? "Досвід" : "Experience"}</div>
                <div className="font-display font-bold text-2xl text-gradient-primary">5+ {lang === "ua" ? "років" : "yrs"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};