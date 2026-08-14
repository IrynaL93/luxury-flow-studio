import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";
import iryna from "@/assets/iryna-portrait.png";

export const About = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-4xl">
        <div className="reveal text-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-4">{T.about.tag[lang]}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gradient">{T.about.title[lang]}</h2>
          <div className="text-primary-glow mt-2 font-medium">{T.about.role[lang]}</div>
        </div>
        <div className="reveal glass-strong rounded-3xl p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[160px_1fr] md:items-center">
            <div className="relative aspect-[4/5] w-36 overflow-hidden rounded-2xl glass-strong shadow-card sm:w-40 mx-auto md:mx-0">
              <img src={iryna} alt="Iryna Liubynetska, founder of LBN Flow" className="h-full w-full object-cover" width={1023} height={1537} loading="lazy" />
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{T.about.p1[lang]}</p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{T.about.p2[lang]}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {T.about.tags[lang].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full glass text-sm text-foreground/90">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
