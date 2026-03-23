import { Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import benewBottles from "@/assets/benew-bottles.png";

const products = [
  {
    name: "BeNew Premium Packaged Drinking Water",
    size: "1 Litre",
    category: "BeNew Water",
    features: ["Safe drinking water", "Modern purification", "Hygienic packaging"],
  },
  {
    name: "BeNew Packaged Drinking Water",
    size: "500 ml",
    category: "BeNew Water",
    features: ["Portable bottle", "Ideal for travel", "Fresh and safe hydration"],
  },
];

const ProductsPage = () => (
  <main className="pt-20">
    <section className="py-20 bg-gradient-emerald text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Our Products</h1>
        <p className="text-primary-foreground/70 text-lg">Quality products from Shivraya Group</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="BeNew Water Range" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-12">
            <img src={benewBottles} alt="Be New Packaged Drinking Water - 500ml and 1 Litre bottles" className="w-full rounded-2xl shadow-card" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.1}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border/50 p-6">
                <span className="text-xs font-semibold text-primary bg-emerald-light px-2 py-1 rounded-full">{p.category}</span>
                <h3 className="font-display font-bold mt-3 mb-1">{p.name}</h3>
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
  </main>
);

export default ProductsPage;
