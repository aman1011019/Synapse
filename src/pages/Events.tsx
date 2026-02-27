import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Trophy, Mic, Zap, MessageSquare, Calendar } from "lucide-react";

const events = [
  {
    icon: Globe,
    title: "Website Building",
    description: "Compete in building stunning, functional websites in a limited time. Test your frontend skills!",
    badge: "Competition",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    status: "Upcoming",
  },
  {
    icon: Trophy,
    title: "Quiz Competition",
    description: "Battle it out in technical quizzes covering AI, ML, algorithms, and current tech trends.",
    badge: "Quiz",
    color: "from-yellow-500/20 to-yellow-500/5",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-400",
    status: "Open",
  },
  {
    icon: Mic,
    title: "Guest Sessions",
    description: "Learn directly from industry leaders, researchers, and successful AI practitioners.",
    badge: "Speaker",
    color: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    status: "Monthly",
  },
  {
    icon: Zap,
    title: "Hackathons",
    description: "48-hour intensive hackathons to build innovative AI solutions. Compete for prizes!",
    badge: "Hackathon",
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
    status: "Quarterly",
  },
  {
    icon: MessageSquare,
    title: "Technical Talks",
    description: "Deep-dive technical presentations on cutting-edge AI/ML research and industry applications.",
    badge: "Talk",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    status: "Weekly",
  },
  {
    icon: Calendar,
    title: "Workshop Series",
    description: "Structured 4-week workshops on Python, ML, DL, and generative AI with certificate.",
    badge: "Workshop",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
    status: "Ongoing",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="tech-tag mb-4 inline-block">What We Do</span>
            <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4">Events</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From hackathons to guest sessions — we run exciting events to keep you engaged and growing.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={event.title}
                className={`glass-card rounded-2xl p-6 border ${event.borderColor} bg-gradient-to-br ${event.color} hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl glass-card`}>
                    <event.icon className={`w-6 h-6 ${event.iconColor}`} />
                  </div>
                  <div className="flex gap-2">
                    <span className="tech-tag text-xs">{event.badge}</span>
                    <span className={`text-xs px-2 py-1 rounded font-mono ${
                      event.status === "Open" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-xl mb-3 group-hover:gradient-text transition-all">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                <button className={`text-sm font-semibold ${event.iconColor} hover:underline flex items-center gap-1`}>
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 glass-card rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold gradient-text mb-4">Never Miss an Event</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join our WhatsApp channel to get instant updates on all upcoming events, workshops, and opportunities.
            </p>
            <a
              href="https://whatsapp.com/channel/0029VbC4bmJ0gcfDg4hGsD0l"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full text-background font-bold"
            >
              📲 Join WhatsApp Channel
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
