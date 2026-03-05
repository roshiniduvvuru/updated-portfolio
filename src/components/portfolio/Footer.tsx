import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold">Roshini Duvvuru</h3>
            <p className="text-sm opacity-70 mt-1">SAP ABAP Consultant · Enterprise Solutions</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 mt-8 pt-6 text-center">
          <p className="text-xs opacity-50">© 2026 Roshini Duvvuru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
