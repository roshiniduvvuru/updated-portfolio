import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#case-studies" },
  { label: "Projects", href: "#projects" },
  { label: "Performance", href: "#performance" },
  { label: "Education", href: "#education" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="section-container flex items-center justify-between h-14">
        <a href="#" className="font-display text-lg font-semibold text-primary">RD</a>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block nav-link py-1">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
