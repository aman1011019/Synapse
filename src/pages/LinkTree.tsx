import { useRef, useState } from "react";
import { Volume2, VolumeX, Brain, Linkedin, MessageCircle, Globe, Youtube } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const links = [
  {
    icon: Globe,
    label: "🌐 Synapse Website",
    href: "/",
    description: "Our main website",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    border: "border-primary/30",
  },
  {
    icon: MessageCircle,
    label: "💬 WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029VbC4bmJ0gcfDg4hGsD0l",
    description: "Get latest updates",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-400",
    border: "border-green-500/30",
  },
  {
    icon: () => <span className="text-xl">📸</span>,
    label: "📸 Instagram Page",
    href: "https://www.instagram.com/synapse.aiml?igsh=NmVtbXBqaThpdTY0",
    description: "Follow us on Instagram",
    color: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400",
    border: "border-pink-500/30",
  },
  {
    icon: Linkedin,
    label: "💼 LinkedIn Page",
    href: "https://www.linkedin.com/in/synapse-aimlclub-svit/",
    description: "Connect professionally",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    border: "border-blue-500/30",
  },
  {
    icon: Youtube,
    label: "▶️ YouTube Channel",
    href: "https://www.youtube.com/channel/UCvmzZeUlcS15Gl4g1LY-kBA",
    description: "Watch our content",
    color: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-400",
    border: "border-red-500/30",
  },
  {
    icon: MessageCircle,
    label: "👥 WhatsApp Community",
    href: "https://chat.whatsapp.com/Fwi51srmYFEAA6bKugHlKI",
    description: "Join our community",
    color: "from-green-600/20 to-green-600/5",
    iconColor: "text-green-500",
    border: "border-green-600/30",
  },
];

const LinkTree = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = !soundOn;
      await video.play();
      setSoundOn(!soundOn);
    } catch {
      alert("Tap once more to enable sound");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster={heroBg}
      >
        <source src="/synapse-video.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-0"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 z-10 animated-bg opacity-80" />
      <div className="absolute inset-0 z-10 bg-background/60 backdrop-blur-sm" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-[120px] z-10 opacity-20"
        style={{ background: "hsl(185 100% 55%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] z-10 opacity-15"
        style={{ background: "hsl(265 70% 55%)" }} />

      {/* Content */}
      <div className="relative z-20 w-full max-w-md mx-auto px-4 py-20">
        {/* Logo & Name */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-2xl btn-glow flex items-center justify-center mx-auto mb-4 animate-float">
            <Brain className="w-10 h-10 text-background" />
          </div>
          <h1 className="text-4xl font-black gradient-text mb-2">AIML Club</h1>
          <p className="text-muted-foreground font-mono-tech text-sm tracking-widest">
            Connect • Learn • Innovate
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`linktree-btn bg-gradient-to-r ${link.color} border ${link.border}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`flex-shrink-0 ${link.iconColor}`}>
                  <IconComponent className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold text-sm">{link.label}</div>
                  <div className="text-xs text-muted-foreground">{link.description}</div>
                </div>
              </a>
            );
          })}
        </div>

        <footer className="text-center mt-10 text-muted-foreground text-xs">
          © 2026 AIML Club • All Rights Reserved
        </footer>
      </div>

    </div>
  );
};

export default LinkTree;
