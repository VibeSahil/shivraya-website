import { Droplets, Truck, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const waterServices = [
  { icon: Droplets, title: "Packaged Drinking Water", desc: "Premium purified water in convenient sizes" },
  { icon: Truck, title: "Bulk Supply", desc: "Wholesale and bulk water supply for events and businesses" },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous testing at every stage of production" },
];

const ServicesPage = () => (
  <main className="pt-20">
    <section className="py-20 bg-gradient-emerald text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 text-lg">Comprehensive water solutions for every need</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="Be New Water Services" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {waterServices.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                <div className="w-12 h-12 rounded-full bg-aqua/30 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default ServicesPage;
