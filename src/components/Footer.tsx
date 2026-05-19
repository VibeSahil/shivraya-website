import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import sgLogo from "@/assets/sg-logo.jpeg";

const Footer = () => (
  <footer className="bg-gradient-emerald text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={sgLogo} alt="Shivraya Group Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display font-bold text-lg">Shivraya Group</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Trusted business group based in Pauni, delivering premium packaged drinking water across Maharashtra.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "BeNew Water", "Products", "Gallery", "Contact"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase().replace(/ /g, "-").replace("benew-water", "be-new")}`}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Our Brand</h4>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-sm">BeNew Water</p>
              <p className="text-xs text-primary-foreground/60">Premium Packaged Drinking Water</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <a
              href="https://maps.google.com/?q=Shivraya+Group+Of+Companies+Pauni+Bhandara+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-white transition-colors group"
            >
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Shivraya Group Of Companies, Pauni, District Bhandara, Maharashtra, India</span>
            </a>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+918766837945"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 87668 37945</span>
              </a>
              <a
                href="tel:+917559204328"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 75592 04328</span>
              </a>
            </div>
            <a
              href="mailto:shivrayagroupofcompanies@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Mail className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
              <span>shivrayagroupofcompanies@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Shivraya Group. All rights reserved.
        </p>
        <Link to="/privacy" className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
