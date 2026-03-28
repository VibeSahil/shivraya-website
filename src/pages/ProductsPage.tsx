import { Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import bottle500 from "@/assets/benew-bottle-500ml.png";
import bottle1L from "@/assets/benew-bottle-1l.png";

const products = [
  {
    name: "BeNew Premium Packaged Drinking Water",
    size: "1 Litre",
    category: "BeNew Water",
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
    category: "BeNew Water",
    image: bottle500,
    features: [
      "Portable bottle",
      "Ideal for travel",
      "Fresh and safe hydration",
      "Easy to carry anywhere",
    ],
  },
];

const ProductsPage = () => (
  <main className="pt-20">
    {/* Hero Section */}
    <section className="py-20 bg-gradient-emerald text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
          Our Products
        </h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Explore BeNew premium packaged drinking water products designed for
          purity, freshness, and safe hydration.
        </p>
      </div>
    </section>

    {/* Products Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            title="BeNew Water Range"
            subtitle="Premium packaged drinking water for every need"
          />
        </AnimatedSection>

        {/* Featured Product Display */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 p-8 text-center group">
                  
                  {/* Product Image */}
                  <div className="bg-gradient-aqua rounded-2xl p-6 mb-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-80 object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Category */}
                  <span className="inline-block text-xs font-semibold text-primary bg-emerald-light px-3 py-1 rounded-full mb-4">
                    {p.category}
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
                  <ul className="space-y-2 text-left">
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
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default ProductsPage;