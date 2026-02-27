import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, ChevronDown, Linkedin } from "lucide-react";
import { useState } from "react";

/* ================= TOP MEMBERS ================= */

const topMembers = [
  {
    name: "Likith Talla",
    role: "Founder Lead",
    year: "3rd Year",
    emoji: "🚀",
    gradient: "from-primary/20 to-secondary/10",
    border: "border-primary/20",
    linkedin: "https://www.linkedin.com/in/likith1502",
  },
  {
    name: "A J Abhishek",
    role: "Co-Founder Lead",
    year: "3rd Year",
    emoji: "💡",
    gradient: "from-secondary/20 to-primary/10",
    border: "border-secondary/20",
    linkedin: "https://www.linkedin.com/in/ajabhishek28",
  },
  {
    name: "Pabbathi Varshene",
    role: "President",
    year: "3rd Year",
    emoji: "🎓",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/30",
    linkedin: "https://www.linkedin.com/in/pabbathivarshene0306",
  },
  {
    name: "Pappu Ananya",
    role: "Vice President",
    year: "3rd Year",
    emoji: "⚡",
    gradient: "from-secondary/20 to-secondary/5",
    border: "border-secondary/30",
    linkedin: "https://www.linkedin.com/in/ananyapappu2327",
  },
];

/* ================= LEAD MEMBERS ================= */

const leadMembers = [
  {
    name: "Aman Kumar Sharma",
    role: "Tech Lead",
    year: "3rd Year",
    emoji: "⚙️",
    gradient: "from-blue-500/15 to-blue-500/5",
    border: "border-blue-500/30",
    linkedin: "https://www.linkedin.com/in/aman-kumar-sharma-aks113114",
    subMember: {
      name: "Sumit Rawal",
      year: "2nd Year",
      emoji: "💻",
      linkedin: "https://www.linkedin.com/in/sumit-rawal-a45b38383",
    },
  },
  {
    name: "Ayush Verma",
    role: "Co-Tech Lead",
    year: "3rd Year",
    emoji: "🔧",
    gradient: "from-green-500/15 to-green-500/5",
    border: "border-green-500/30",
    linkedin: "https://www.linkedin.com/in/ayush-verma-103029300",
    subMember: {
      name: "Angishetty Sneha Gupta",
      year: "2nd Year",
      emoji: "🖥️",
      linkedin: "https://www.linkedin.com/in/sneha-gupta-18a1b93b2",
    },
  },
  {
    name: "K. Santosh Yadav",
    role: "Media Lead",
    year: "3rd Year",
    emoji: "📸",
    gradient: "from-pink-500/15 to-pink-500/5",
    border: "border-pink-500/30",
    linkedin: "#",
    subMember: {
      name: "Nikhil Sai Malliboyena",
      year: "2nd Year",
      emoji: "🎨",
      linkedin:
        "https://www.linkedin.com/in/nikhil-sai-malliboyena-a0b1ba3b1",
    },
  },
  {
    name: "Gorla Mamatha Latha",
    role: "Community Lead",
    year: "3rd Year",
    emoji: "🤝",
    gradient: "from-orange-500/15 to-orange-500/5",
    border: "border-orange-500/30",
    linkedin: "https://www.linkedin.com/in/mamatha-gorla",
    subMember: {
      name: "Vineet Dillikar",
      year: "2nd Year",
      emoji: "🌟",
      linkedin: "https://www.linkedin.com/in/vineet-dillikar-a271153b2",
    },
  },
  {
    name: "Vaishnavi Sanga",
    role: "Student Coordinator",
    year: "2nd Year",
    emoji: "🧑‍🎓",
    gradient: "from-purple-500/15 to-purple-500/5",
    border: "border-purple-500/30",
    linkedin:
      "https://www.linkedin.com/in/vaishnavi-sanga-62892a383",
    subMember: {
      name: "—",
      year: "",
      emoji: "✨",
      linkedin: "#",
    },
  },
];

/* ================= MEMBER CARD ================= */

const MemberCard = ({ member, index }: any) => (
  <div
    className={`glass-card border ${member.border} bg-gradient-to-br ${member.gradient}
    rounded-2xl p-6 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative mx-auto mb-4 w-20 h-20">
      <div className="w-20 h-20 rounded-full glass-card border flex items-center justify-center text-3xl">
        {member.emoji}
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
        <User className="w-3 h-3 text-background" />
      </div>
    </div>

    <h3 className="font-bold text-lg">{member.name}</h3>
    <div className="text-primary text-sm font-semibold">{member.role}</div>
    <div className="text-muted-foreground text-xs mb-3">{member.year}</div>

    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
      <Linkedin className="mx-auto w-4 h-4 text-muted-foreground hover:text-primary" />
    </a>
  </div>
);

/* ================= LEAD CARD (FIXED ALIGNMENT) ================= */

const LeadCard = ({ member }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-card border ${member.border} bg-gradient-to-br ${member.gradient}
      rounded-2xl p-6 flex flex-col text-center`}
    >
      {/* Avatar */}
      <div className="relative mx-auto mb-4 w-20 h-20">
        <div className="w-20 h-20 rounded-full glass-card border flex items-center justify-center text-3xl">
          {member.emoji}
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <User className="w-3 h-3 text-background" />
        </div>
      </div>

      {/* NAME (flexible height) */}
      <div className="min-h-[48px] flex items-center justify-center">
        <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
      </div>

      {/* ROLE (fixed) */}
      <div className="h-6 text-primary text-sm font-semibold flex items-center justify-center">
        {member.role}
      </div>

      {/* YEAR (fixed) */}
      <div className="h-5 text-muted-foreground text-xs flex items-center justify-center">
        {member.year}
      </div>

      {/* LINKEDIN (fixed) */}
      <div className="h-8 flex items-center justify-center">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
        </a>
      </div>

      {/* DROPDOWN (fixed baseline) */}
      <div className="mt-auto">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 mx-auto text-xs text-primary"
        >
          Team Member
          <ChevronDown
            className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""
              }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-32 mt-3" : "max-h-0"
            }`}
        >
          <div className="pt-3 border-t">
            <div className="text-2xl">{member.subMember.emoji}</div>
            <div className="font-semibold text-sm">{member.subMember.name}</div>
            <div className="text-xs text-muted-foreground">
              {member.subMember.year}
            </div>
            {/* Sub-member LinkedIn */}
            {member.subMember.linkedin &&
              member.subMember.linkedin !== "#" && (
                <div className="flex justify-center mt-1">
                  <a
                    href={member.subMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
/* ================= PAGE ================= */

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-20 px-4 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black gradient-text mb-4">Our Team</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The passionate minds behind Synapse Club.
          </p>
        </div>

        {/* Top Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {topMembers.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>

        {/* Lead Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {leadMembers.map((m, i) => (
            <LeadCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;