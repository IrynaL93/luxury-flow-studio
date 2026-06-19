import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";
import { Globe, Database, Workflow, LifeBuoy, Check } from "lucide-react";

const icons = [Globe, Database, Workflow, LifeBuoy];

export const Services = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const items = T.services.items[lang];
  return (
    <section id="services" className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div className="reveal max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-4">{T.services.tag[lang]}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">{T.services.title[lang]}</h2>
          <p className="text-lg text-muted-foreground">{T.services.subtitle[lang]}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.t} className="reveal group relative glass-strong rounded-3xl p-8 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground mb-6 shadow-glow">
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground mb-6">{s.d}</p>
                <ul className="space-y-2">
                  {s.f.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-primary-glow shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};