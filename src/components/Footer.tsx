import { Linkedin, Mail, Youtube, MessageCircle, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/synapse-aimlclub-svit/",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    label: "Gmail",
    href: "mailto:synapse.aiml.svit@gmail.com",
    color: "hover:text-red-400",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCvmzZeUlcS15Gl4g1LY-kBA",
    color: "hover:text-red-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/Fwi51srmYFEAA6bKugHlKI",
    color: "hover:text-green-400",
  },
];

const footerLinks = [
  { label: "AI Roadmap", href: "/ai-roadmap" },
  { label: "ML Roadmap", href: "/ml-roadmap" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Links", href: "/links" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-30 h-20 text-background" />
              <span className="font-bold text-xl gradient-text">Synapse Club</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where Ideas Meet Intelligence. An AI/ML community fostering innovation,
              learning, and collaboration.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-2.5 rounded-lg text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://whatsapp.com/channel/0029VbC4bmJ0gcfDg4hGsD0l"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp Channel
              </a>
              <a
                href="https://chat.whatsapp.com/Fwi51srmYFEAA6bKugHlKI"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                WhatsApp Community
              </a>
              <a
                href="https://www.instagram.com/synapse.aiml?igsh=NmVtbXBqaThpdTY0"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground"
              >
                <span className="text-pink-400">📸</span>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Synapse AIML Club • All Rights Reserved
          </p>
          <p className="text-muted-foreground text-xs font-mono-tech">
            CONNECT | LEARN | INNOVATE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
