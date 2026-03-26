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

      {/* 🖼️ Background Image */}
      <motion.img
        src="/benew-hero.jpg"
        alt="BeNew - Pure Water"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* 💧 Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{
              y: "100%",
              x: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* 🔤 Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="max-w-2xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="text-aqua font-semibold text-lg mb-2"
          >
            Packaged Drinking Water
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
            className="font-extrabold text-5xl md:text-7xl text-white mb-4 drop-shadow-xl"
          >
            BeNew
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="text-white/80 text-2xl italic mb-2"
          >
            Be Safe. BeNew.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="text-white/70 text-lg mb-8"
          >
            Pure Water From Nature. Premium packaged drinking water you can trust.
          </motion.p>

          {/* 🚀 PREMIUM BUTTONS */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex gap-4"
          >
            <motion.div whileHover={{ scale: 1.08 }}>
              <Button
                asChild
                size="lg"
                className="bg-emerald-600/20 border border-emerald-400 text-white backdrop-blur-md px-8 rounded-full hover:bg-emerald-600/30 hover:shadow-emerald-500/40 hover:shadow-xl transition-all"
              >
                <Link to="/be-new">Explore BeNew</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.08 }}>
              <Button
                asChild
                size="lg"
                className="bg-emerald-600/20 border border-emerald-400 text-white backdrop-blur-md px-8 rounded-full hover:bg-emerald-600/30 hover:shadow-emerald-500/40 hover:shadow-xl transition-all"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 💧 Ripple */}
      <div className="absolute bottom-10 right-10 hidden md:block z-20">
        <div className="w-4 h-4 rounded-full bg-aqua/40 animate-ping" />
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
            { icon: Droplets, title: "Pure Hydration", desc: "Multi-stage purification" },
            { icon: ShieldCheck, title: "Safe & Certified", desc: "Quality standards ensured" },
            { icon: Package, title: "Hygienic Packaging", desc: "Tamper-proof bottles" },
            { icon: Sparkles, title: "Modern Technology", desc: "Advanced purification" },
          ].map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-6 transition"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-emerald text-white text-center">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Stay Hydrated with BeNew
          </h2>
          <p className="text-white/70 mb-8">
            Experience pure, safe drinking water — from Shivraya Group.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black rounded-full px-8 hover:bg-gray-200"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default HomePage;