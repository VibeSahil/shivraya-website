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

      <motion.img
        src="/benew-hero.jpg"
        alt="BeNew packaged drinking water in Pauni"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="max-w-2xl"
        >

          <p className="text-aqua font-semibold text-lg mb-2">
            Packaged Drinking Water in Pauni
          </p>

          {/* ✅ CLEAN H1 */}
          <h1 className="font-extrabold text-5xl md:text-7xl text-white mb-4 leading-tight">
            BeNew
          </h1>

          <p className="text-white/80 text-2xl italic mb-2">
            Be Safe. BeNew.
          </p>

          {/* ✅ SPELLING FIXED */}
          <p className="text-white/70 text-lg mb-8">
            BeNew is a premium packaged drinking water brand by Shivraya Group in Pauni, Maharashtra.
            We provide safe, purified and hygienic drinking water for homes, offices and events.
          </p>

          <div className="flex flex-wrap gap-4">

            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/be-new">Explore BeNew</Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/products">View Products</Link>
            </Button>

          </div>
        </motion.div>
      </div>
    </section>

    {/* LOCATION */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">
          Drinking Water Supplier in Pauni
        </h2>
        <p className="text-muted-foreground">
          Shivraya Group is a trusted supplier of BeNew packaged drinking water in Pauni, District Bhandara, Maharashtra.
          We deliver high-quality drinking water for homes, businesses and bulk supply.
        </p>
      </div>
    </section>

    {/* Why BeNew */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Why BeNew?" 
          subtitle="Pure, safe and hygienic drinking water" 
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Droplets, title: "Pure Hydration", desc: "Multi-stage purification ensures clean water" },
            { icon: ShieldCheck, title: "Safe & Certified", desc: "Meets all safety standards" },
            { icon: Package, title: "Hygienic Packaging", desc: "Sealed and safe bottles" },
            { icon: Sparkles, title: "Modern Technology", desc: "Advanced purification process" },
          ].map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          FAQs About BeNew
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">What is BeNew?</h3>
            <p className="text-muted-foreground">
              BeNew is a premium packaged drinking water brand by Shivraya Group in Pauni.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Is BeNew water safe?</h3>
            <p className="text-muted-foreground">
              Yes, BeNew water is purified and safe for daily use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Where can I buy BeNew?</h3>
            <p className="text-muted-foreground">
              You can buy BeNew in Pauni directly from Shivraya Group.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-emerald text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Get BeNew Today
        </h2>
        <p className="mb-6">
          Contact Shivraya Group for safe and purified drinking water in Pauni.
        </p>

        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>

  </main>
);

export default HomePage;