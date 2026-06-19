import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useCountUp } from "@/hooks/use-reveal";

const Stat = ({ value, suffix, label }: { value: number; suffix?: string; label: string }) => {
  const ref = useCountUp(value);
  return (
    <div className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl text-gradient-primary">
        <span ref={ref}>0</span>{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
};

export const Stats = () => {
  const { lang } = useLang();
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={50} suffix="+" label={T.stats.projects[lang]} />
          <Stat value={5} suffix="+" label={T.stats.years[lang]} />
          <Stat value={40} suffix="+" label={T.stats.clients[lang]} />
          <Stat value={85} suffix="%" label={T.stats.nps[lang]} />
        </div>
      </div>
    </section>
  );
};