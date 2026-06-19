import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";

const stack = [
  "WordPress", "Framer", "Nicepage", "Elementor", "React",
  "KeyCRM", "AmoCRM", "HubSpot", "Pipedrive",
  "Make", "Zapier", "n8n", "Telegram API", "Stripe", "Google Workspace", "Meta Ads", "GA4",
];

export const Stack = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="stack" className="py-24 md:py-32" ref={ref}>
      <div className="container max-w-6xl">
        <div className="reveal text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-4">{T.stack.tag[lang]}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">{T.stack.title[lang]}</h2>
        </div>
        <div className="reveal flex flex-wrap justify-center gap-3">
          {stack.map((s) => (
            <span key={s} className="px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground/90 hover:bg-primary/10 hover:border-primary/40 transition-colors">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};