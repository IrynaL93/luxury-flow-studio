import { useLang } from "@/contexts/LangContext";
import { translations as T } from "@/i18n/translations";
import { useReveal } from "@/hooks/use-reveal";
import mcast from "@/assets/case-mcast.jpg";
import unek from "@/assets/case-unek.jpg";
import imperial from "@/assets/case-imperial.jpg";
import ugc from "@/assets/case-ugc.jpg";
import sofia from "@/assets/case-sofia.jpg";
import powerhub from "@/assets/case-powerhub.jpg";
import { ArrowUpRight } from "lucide-react";

const images = [mcast, unek, imperial, ugc, sofia, powerhub];
const techs = [
  ["WordPress", "Elementor", "PHP"],
  ["WordPress", "WPBakery", "Forms API"],
  ["WordPress", "Nicepage", "Custom CSS"],
  ["Framer", "Motion", "CMS"],
  ["HTML/CSS", "JS", "Custom"],
  ["WordPress", "WooCommerce", "Booking"],
];

export const Work = () => {
  const { lang } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const items = T.work.items[lang];
  return (
    <section id="work" className="py-24 md:py-32" ref={ref}>
      <div className="container">
        <div className="reveal max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-glow mb-4">{T.work.tag[lang]}</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">{T.work.title[lang]}</h2>
          <p className="text-lg text-muted-foreground">{T.work.subtitle[lang]}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <article key={item.name} className={`reveal group relative glass-strong rounded-3xl overflow-hidden hover:shadow-glow transition-all hover:-translate-y-1 ${i === 0 ? "md:col-span-2" : ""}`}>
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                <img src={images[i]} alt={`${item.name} case study screenshot`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full glass-strong opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-7">
                <div className="text-xs text-primary-glow font-medium uppercase tracking-wider mb-2">{item.cat}</div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {techs[i].map((tg) => (
                    <span key={tg} className="px-3 py-1 rounded-full bg-muted/60 text-xs text-foreground/80 border border-border/60">{tg}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};