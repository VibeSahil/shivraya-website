import { Droplets, ShieldCheck, Sparkles, Package } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import bottleHero from "@/assets/benew-hero.png";
import bottleFestival from "@/assets/benew-festival.png";
import bottleNature from "@/assets/benew-nature.png";
import bottleReal from "@/assets/benew-bottle-real.jpg";

const products = [
  {
    name: "BeNew Premium Packaged Drinking Water",
    size: "1 Liter",
    features: ["Safe drinking water", "Modern purification", "Hygienic packaging"],
  },
  {
    name: "BeNew Packaged Drinking Water",
    size: "500 ml",
    features: ["Portable bottle", "Ideal for travel", "Fresh and safe hydration"],
  },
];

const BeNewPage = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={bottleNature} alt="BeNew pure water from nature" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <p className="text-aqua font-display font-semibold text-lg mb-2">Packaged Drinking Water</p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-primary-foreground mb-3">BeNew</h1>
          <p className="text-primary-foreground/80 text-2xl font-display italic mb-6">Be Safe. BeNew.</p>
          <p className="text-primary-foreground/70 text-lg max-w-lg">
            Safe and refreshing packaged drinking water produced using modern purification systems.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="Why BeNew?" subtitle="Pure water you can trust" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Droplets, title: "Pure Hydration", desc: "Multi-stage purification for crystal-clear water" },
            { icon: ShieldCheck, title: "Safe & Certified", desc: "Meets all safety and quality standards" },
            { icon: Package, title: "Hygienic Packaging", desc: "Sealed in clean, tamper-proof bottles" },
          ].map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-muted border border-border/50">
                <div className="w-12 h-12 rounded-full bg-aqua/30 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="Our Products" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <img src={bottleReal} alt="BeNew Packaged Drinking Water - 500ml and 1 Litre bottles" className="w-full rounded-2xl shadow-card" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.15}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 p-6 hover:shadow-card-hover transition-all">
                <span className="text-xs font-semibold text-primary bg-emerald-light px-2 py-1 rounded-full">BeNew Water</span>
                <h3 className="font-display font-bold text-lg mt-3 mb-1">{p.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{p.size}</p>
                <ul className="space-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="h-3 w-3 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Lifestyle */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="BeNew Everywhere" subtitle="From outdoor adventures to festival vibes" />
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={bottleFestival} alt="BeNew at festivals" className="w-full h-80 object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={bottleHero} alt="BeNew pure water" className="w-full h-80 object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </main>
);

export default BeNewPage;
