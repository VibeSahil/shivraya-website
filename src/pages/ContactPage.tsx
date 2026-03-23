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
    if (form.name.length > 100) {
      toast.error("Name must be under 100 characters.");
      return;
    }
    if (form.phone.length > 20) {
      toast.error("Phone number must be under 20 characters.");
      return;
    }
    if (form.email && form.email.length > 255) {
      toast.error("Email must be under 255 characters.");
      return;
    }
    if (form.message.length > 2000) {
      toast.error("Message must be under 2000 characters.");
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
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-emerald text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <SectionHeading title="Get in Touch" centered={false} />
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl h-12"
                  maxLength={100}
                />
                <Input
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl h-12"
                  maxLength={20}
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl h-12"
                  maxLength={255}
                />
                <Textarea
                  placeholder="Your Message *"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-xl"
                  maxLength={2000}
                />
                <Button type="submit" disabled={loading} className="rounded-full px-8 font-display font-semibold">
                  <Send className="h-4 w-4 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4">Our Location</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Pauni, District Bhandara, Maharashtra, India</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 text-primary shrink-0" />
                      <span>+91 87668 37945</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5 text-primary shrink-0" />
                      <span>shivrayagroupofcompanies@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-card border border-border/50">
                  <iframe
                    title="Shivraya Group Location - Pauni, Bhandara"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29696.89!2d79.63!3d20.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d9c4e5b2f3d5%3A0x1234567890abcdef!2sPauni%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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
