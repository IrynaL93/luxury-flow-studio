import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const items = T.testimonials.items[lang];
  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div className="reveal max-w-3xl mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-4">{T.testimonials.tag[lang]}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">{T.testimonials.title[lang]}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <blockquote key={i} className="reveal glass-strong rounded-3xl p-8 flex flex-col">
              <Quote className="text-primary-glow mb-4" size={32} />
              <p className="text-foreground/90 text-lg leading-relaxed flex-1">"{item.q}"</p>
              <footer className="mt-6 pt-6 border-t border-border/60 text-sm text-muted-foreground">— {item.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};