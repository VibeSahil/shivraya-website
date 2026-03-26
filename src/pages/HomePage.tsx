import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Package, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const HomePage = () => (
  <main>
    {/* 🔥 UPDATED HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 🎥 Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/water.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-aqua font-display font-semibold text-lg mb-2">
            Packaged Drinking Water
          </p>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-primary-foreground mb-4 leading-tight">
            BeNew
          </h1>

          <p className="text-primary-foreground/80 text-2xl md:text-3xl font-display italic mb-2">
            Be Safe. BeNew.
          </p>

          <p className="text-primary-foreground/70 text-lg md:text-xl mb-8 font-body">
            Pure Water From Nature. Premium packaged drinking water you can trust.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary text-primary-foreground rounded-full px-8">
              <Link to="/be-new">Explore BeNew</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 bg-primary/80">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 💧 Water Drop Animation */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-3 h-3 bg-aqua rounded-full animate-drop"></div>
      </div>

      {/* Ripple Effect */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="w-4 h-4 rounded-full bg-aqua/40 animate-ripple" />
      </div>
    </section>

    {/* Why BeNew */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="Why BeNew?" subtitle="Pure water you can trust" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Droplets, title: "Pure Hydration", desc: "Multi-stage purification for crystal-clear water" },
            { icon: ShieldCheck, title: "Safe & Certified", desc: "Meets all safety and quality standards" },
            { icon: Package, title: "Hygienic Packaging", desc: "Sealed in clean, tamper-proof bottles" },
            { icon: Sparkles, title: "Modern Technology", desc: "Advanced purification for better outcomes" },
          ].map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-emerald text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Stay Hydrated with BeNew
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Experience pure, safe drinking water — from Shivraya Group, Pauni.
          </p>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 rounded-full px-8">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default HomePage;