import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Domains", href: "/#domains" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Join", href: "/#join" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const id = href.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl max-w-5xl w-[calc(100%-2rem)] ${isScrolled ? "shadow-[0_0_30px_hsla(185,100%,55%,0.08)]" : ""
        }`}
      style={{
        background: "hsla(220, 40%, 7%, 0.7)",
        border: "1px solid hsla(185, 100%, 55%, 0.1)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Synapse Logo"
            className="w-30 h-20 block"
          />
          <span className="-ml-6 font-bold text-xl gradient-text font-poppins tracking-wide">
            Synapse
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
          <Link
            to="/links"
            className="btn-glow px-5 py-2 rounded-full text-sm font-semibold text-background"
          >
            LinkTree
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden navbar-glass border-t border-border/30 px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/links"
            onClick={() => setMenuOpen(false)}
            className="btn-glow px-5 py-2 rounded-full text-sm font-semibold text-background text-center"
          >
            LinkTree
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;