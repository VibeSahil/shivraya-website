import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name.trim().slice(0, 100),
        phone: form.phone.trim().slice(0, 20),
        email: form.email?.trim().slice(0, 255) || null,
        message: form.message.trim().slice(0, 2000),
      });

      if (error) throw error;

      toast.success("Message sent successfully!");
      setForm({ name: "", phone: "", email: "", message: "" });

    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20">

      {/* Header */}
      <section className="py-20 bg-gradient-emerald text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-white/70">We'd love to hear from you</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Form */}
            <AnimatedSection>
              <SectionHeading title="Get in Touch" centered={false} />

              <form onSubmit={handleSubmit} className="space-y-4">

                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl h-12"
                />

                <Input
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl h-12"
                />

                <Input
                  placeholder="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl h-12"
                />

                <Textarea
                  placeholder="Your Message *"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-xl"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-full px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>

              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">

                <div>
                  <h3 className="text-lg font-semibold mb-4">Our Contact Information</h3>

                  <div className="space-y-4">

                    {/* 📍 Clickable Location */}
                    <a
                      href="https://maps.google.com/?q=Shivraya+Group+Of+Companies+Pauni+Bhandara+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition group"
                    >
                      <MapPin className="h-5 w-5 text-emerald-600 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:underline">
                        Shivraya Group Of Companies, Pauni, District Bhandara, Maharashtra, India
                      </span>
                    </a>

                    {/* 📞 Clickable Phone Numbers */}
                    <div className="flex flex-col gap-4">
                      <a
                        href="tel:+918766837945"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition group"
                      >
                        <Phone className="h-5 w-5 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline">+91 87668 37945</span>
                      </a>
                      <a
                        href="tel:+917559204328"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition group"
                      >
                        <Phone className="h-5 w-5 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline">+91 75592 04328</span>
                      </a>
                    </div>

                    {/* 📧 Clickable Email */}
                    <a
                      href="mailto:shivrayagroupofcompanies@gmail.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition group"
                    >
                      <Mail className="h-5 w-5 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:underline">shivrayagroupofcompanies@gmail.com</span>
                    </a>

                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
                  <iframe
                    title="Shivraya Group Location"
                    src="https://www.google.com/maps?q=Pauni,Bhandara,Maharashtra&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;