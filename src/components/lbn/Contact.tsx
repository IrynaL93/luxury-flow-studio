import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Mail, Send } from "lucide-react";

export const Contact = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-5xl">
        <div className="reveal relative overflow-hidden rounded-[2rem] glass-strong p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" aria-hidden />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px]" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-5">{T.contact.tag[lang]}</div>
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-5 text-gradient">{T.contact.title[lang]}</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">{T.contact.subtitle[lang]}</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:agencysmm2019@gmail.com" className="inline-flex items-center gap-2 text-foreground/90 hover:text-primary-glow transition-colors">
                  <Mail size={18} />
                  agencysmm2019@gmail.com
                </a>
                <a href="https://t.me/lbn_flow" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/90 hover:text-primary-glow transition-colors">
                  <Send size={18} />
                  {T.contact.telegram[lang]}
                </a>
              </div>
            </div>
            <form action="mailto:agencysmm2019@gmail.com" method="post" encType="text/plain" className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-foreground/90">
                {T.contact.form.name[lang]}
                <input name="name" type="text" required autoComplete="name" className="min-h-12 rounded-2xl glass px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/70 focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/90">
                {T.contact.form.email[lang]}
                <input name="email" type="email" required autoComplete="email" className="min-h-12 rounded-2xl glass px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/70 focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-foreground/90">
                {T.contact.form.message[lang]}
                <textarea name="message" required rows={5} className="min-h-32 resize-y rounded-2xl glass px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/70 focus:ring-2 focus:ring-primary/20" />
              </label>
              <button type="submit" className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
                {T.contact.form.submit[lang]}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
