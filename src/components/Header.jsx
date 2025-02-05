import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import logo from "../assets/images/logo_v2.png";

export default function Header() {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={logo}
            alt="KAMAY Solutions"
            className="h-9 w-auto transition-all duration-300 hover:rotate-[5deg]"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            KAMAY
          </span>
        </motion.div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['home', 'services', 'projects', 'about'].map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavigation(item)}
              className="text-sm font-medium text-foreground/90 hover:text-primary capitalize"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground/90 hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            <a href="tel:+923165002345">+92 316 5002345</a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="gap-2 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-lg hover:shadow-primary/30"
              onClick={() => window.open('https://wa.me/message/5ANCCFINFNNDF1', '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat Now</span>
              <motion.div 
                className="absolute -right-2 -top-2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <div className="w-3 h-3 bg-primary rounded-full blur-sm" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}