import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";

export const About = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-5xl">
        <div className="reveal text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-4">{T.about.tag[lang]}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gradient">{T.about.title[lang]}</h2>
          <div className="text-primary-glow mt-2 font-medium">{T.about.role[lang]}</div>
        </div>
        <div className="reveal glass-strong rounded-3xl p-8 md:p-12 space-y-6">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">{T.about.p1[lang]}</p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">{T.about.p2[lang]}</p>
          <div className="flex flex-wrap gap-2 pt-4">
            {T.about.tags[lang].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full glass text-sm text-foreground/90">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};