import { useState } from "react";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import img1 from "@/assets/benew-besafe.png";
import img2 from "@/assets/benew-model.png";
import img3 from "@/assets/benew-waterfall.png";
import img4 from "@/assets/benew-festival.png";
import img5 from "@/assets/benew-nature.png";

const images = [
  { src: img1, alt: "BeNew - Be Safe BeNew", category: "Brand" },
  { src: img2, alt: "BeNew - Be Safe BeNew", category: "Brand" },
  { src: img3, alt: "BeNew - Pure Water From Nature", category: "Brand" },
  { src: img4, alt: "BeNew - Be Safe BeNew at Festival", category: "Lifestyle" },
  { src: img5, alt: "BeNew - Pure Nature Pure Hydration", category: "Lifestyle" },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-emerald text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Gallery</h1>
          <p className="text-primary-foreground/70 text-lg">Our products, events, and brand imagery</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="Brand Gallery" />
          </AnimatedSection>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="mb-6 break-inside-avoid cursor-pointer group"
                  onClick={() => setLightbox(img.src)}
                >
                  <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-border/50">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="p-3 bg-card">
                      <span className="text-xs font-semibold text-primary bg-emerald-light px-2 py-1 rounded-full">{img.category}</span>
                      <p className="text-sm text-muted-foreground mt-2">{img.alt}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-aqua transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
