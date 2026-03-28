import { Droplets, ShieldCheck, Sparkles, Package } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import bottleHero from "@/assets/benew-hero.png";
import bottleFestival from "@/assets/benew-festival.png";
import bottleNature from "@/assets/benew-nature.png";
import bottle500 from "@/assets/benew-bottle-500ml.png";
import bottle1L from "@/assets/benew-bottle-1l.png";

const products = [
  {
    name: "BeNew Premium Packaged Drinking Water",
    size: "1 Litre",
    image: bottle1L,
    features: [
      "Safe drinking water",
      "Modern purification",
      "Hygienic packaging",
      "Perfect for daily use",
    ],
  },
  {
    name: "BeNew Packaged Drinking Water",
    size: "500 ml",
    image: bottle500,
    features: [
      "Portable bottle",
      "Ideal for travel",
      "Fresh and safe hydration",
      "Easy to carry anywhere",
    ],
  },
];

const BeNewPage = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bottleNature}
          alt="BeNew pure water from nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <p className="text-aqua font-display font-semibold text-lg mb-2">
            Packaged Drinking Water
          </p>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-primary-foreground mb-3">
            BeNew
          </h1>

          <p className="text-primary-foreground/80 text-2xl font-display italic mb-6">
            Be Safe. BeNew.
          </p>

          <p className="text-primary-foreground/70 text-lg max-w-lg">
            Safe and refreshing packaged drinking water produced using modern
            purification systems.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="Why BeNew?"
            subtitle="Pure water you can trust"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Droplets,
              title: "Pure Hydration",
              desc: "Multi-stage purification for crystal-clear water",
            },
            {
              icon: ShieldCheck,
              title: "Safe & Certified",
              desc: "Meets all safety and quality standards",
            },
            {
              icon: Package,
              title: "Hygienic Packaging",
              desc: "Sealed in clean, tamper-proof bottles",
            },
          ].map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-muted border border-border/50 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-aqua/30 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-display font-semibold mb-2">
                  {f.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {f.desc}
                </p>
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
          <SectionHeading
            title="Our Products"
            subtitle="Choose the right BeNew bottle for your needs"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {products.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.15}>
              <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/50 p-8 hover:shadow-card-hover transition-all duration-300 group">
                
                {/* Product Image */}
                <div className="bg-gradient-aqua rounded-2xl p-6 mb-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-80 object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Badge */}
                <span className="inline-block text-xs font-semibold text-primary bg-emerald-light px-3 py-1 rounded-full mb-4">
                  BeNew Water
                </span>

                {/* Name */}
                <h3 className="font-display font-bold text-2xl mb-2">
                  {p.name}
                </h3>

                {/* Size */}
                <p className="text-primary font-semibold text-lg mb-4">
                  {p.size}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                      {f}
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
          <SectionHeading
            title="BeNew Everywhere"
            subtitle="From outdoor adventures to festival vibes"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
              <img
                src={bottleFestival}
                alt="BeNew at festivals"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
              <img
                src={bottleHero}
                alt="BeNew pure water"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </main>
);

export default BeNewPage;