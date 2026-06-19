import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";

export const Process = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const steps = T.process.steps[lang];
  return (
    <section id="process" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-5xl">
        <div className="reveal max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-4">{T.process.tag[lang]}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">{T.process.title[lang]}</h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary-glow to-transparent" aria-hidden />
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={step.t} className="reveal relative flex gap-5 md:gap-8 glass rounded-2xl p-6 md:p-8">
                <div className="shrink-0 relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground shadow-glow">0{i + 1}</div>
                <div className="pt-1 md:pt-2">
                  <h3 className="font-display font-semibold text-xl md:text-2xl mb-1">{step.t}</h3>
                  <p className="text-muted-foreground">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};