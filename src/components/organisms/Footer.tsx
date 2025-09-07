import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Star,
  Shield,
  Award,
  Clock,
  CreditCard,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/Logo";

const Footer = () => {
  const quickLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/destinations" },
    { name: "About Us", href: "/about" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/termsconditions" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cancellation Policy", href: "/cancellation" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#facebook" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "YouTube", icon: Youtube, href: "#youtube" },
  ];

  return (
    <footer className="bg-linear-to-br from-background to-muted border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-2">
              <Logo />
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner in creating unforgettable travel experiences.
              We specialize in crafting personalized adventures that connect you
              with the world&apos;s most amazing destinations.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-ocean shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Fourth Floor, Plot no-5, Westend Marg, Saidulajab, <br />
                  Saiyad Ul Ajaib Village, Saket, New Delhi, Delhi 110030
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ocean shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +91-9821071644
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ocean shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@postcardtrip.in
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-ocean shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Mon-Fri: 9AM-6PM EST
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-nature/10 text-nature border-nature/20"
              >
                <Award className="w-3 h-3 mr-1" />
                Award Winning
              </Badge>
              <Badge
                variant="secondary"
                className="bg-ocean/10 text-ocean border-ocean/20"
              >
                <Shield className="w-3 h-3 mr-1" />
                Secure Booking
              </Badge>
              <Badge
                variant="secondary"
                className="bg-adventure/10 text-adventure border-adventure/20"
              >
                <Star className="w-3 h-3 mr-1" />
                5-Star Rated
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-ocean transition-colors duration-200 story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-ocean transition-colors duration-200 story-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-ocean transition-colors duration-200 story-link text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted hover:bg-ocean hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover-scale"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Postcardtrip. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>5,000+ Happy Travelers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
