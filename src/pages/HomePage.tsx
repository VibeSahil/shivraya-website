import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Package, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const HomePage = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* 🖼️ Background Image with Zoom Animation */}
      <motion.img
        src="/benew-hero.jpg"
        alt="BeNew - Pure Water"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔤 Text Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="max-w-2xl"
        >
          <p className="text-aqua font-display font-semibold text-lg mb-2">
            Packaged Drinking Water
          </p>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white mb-4 leading-tight drop-shadow-lg">
            BeNew
          </h1>

          <p className="text-white/80 text-2xl md:text-3xl font-display italic mb-2">
            Be Safe. BeNew.
          </p>

          <p className="text-white/70 text-lg md:text-xl mb-8 font-body">
            Pure Water From Nature. Premium packaged drinking water you can trust.
          </p>

          {/* ✅ UPDATED BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <Button
              asChild
              size="lg"
              className="bg-emerald-600/20 border border-emerald-400 text-white hover:bg-emerald-600/30 font-semibold rounded-full px-8 backdrop-blur-md hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <Link to="/be-new">Explore BeNew</Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-emerald-600/20 border border-emerald-400 text-white hover:bg-emerald-600/30 font-semibold rounded-full px-8 backdrop-blur-md hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <Link to="/products">View Products</Link>
            </Button>

          </div>
        </motion.div>
      </div>

      {/* 💧 Ripple Dot */}
      <div className="absolute bottom-10 right-10 hidden md:block z-10">
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
          <Button
            asChild
            size="lg"
            className="bg-background text-primary hover:bg-background/90 font-display font-semibold rounded-full px-8"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default HomePage;