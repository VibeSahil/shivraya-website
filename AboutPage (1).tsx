import { Shield, Award, Users, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Shield, title: "Trust", desc: "We build lasting relationships through honesty and dependability." },
  { icon: Award, title: "Quality", desc: "Every product and service meets the highest quality benchmarks." },
  { icon: Users, title: "Customer Satisfaction", desc: "Our customers are at the heart of everything we do." },
  { icon: Sparkles, title: "Innovation", desc: "We embrace modern technology to deliver better outcomes." },
];

const AboutPage = () => (
  <main className="pt-20">
    <section className="py-20 bg-gradient-emerald text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">About BeNew</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl">
          Premium packaged drinking water — pure, safe, and refreshing.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <div className="prose prose-lg max-w-none">
             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
               <strong className="text-foreground">BeNew</strong> is a premium packaged drinking water brand by Shivraya Group, based in <strong className="text-foreground">Pauni, District Bhandara, Maharashtra</strong>.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
               We produce safe and refreshing drinking water using modern multi-stage purification systems, ensuring every bottle meets the highest quality and hygiene standards.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               Our mission is simple — deliver pure, trustworthy water to every customer. <strong className="text-foreground">Be Safe. BeNew.</strong>
             </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="Our Values" />
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-6 shadow-card text-center border border-border/50">
                <div className="w-14 h-14 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
