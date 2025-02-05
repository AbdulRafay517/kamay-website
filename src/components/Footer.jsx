import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Contact Strip */}
      <div className="bg-primary/10 py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.a 
            href="mailto:contact.kamaysolutions@gmail.com"
            className="flex items-center gap-3 hover:text-primary transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors"
            />
            <span className="text-lg font-medium">contact.kamaysolutions@gmail.com</span>
          </motion.a>
          
          <motion.a 
            href="https://wa.me/message/5ANCCFINFNNDF1"
            className="flex items-center gap-3 hover:text-secondary transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon 
              icon={faPhone}
              className="w-6 h-6 text-gray-300 group-hover:text-secondary transition-colors"
            />
            <span className="text-lg font-medium">+92 316 5002345</span>
          </motion.a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-8 text-center"
          >
            <h3 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Connect
            </h3>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: faFacebookF, href: "https://www.facebook.com/profile.php?id=61563332233106" },
                { icon: faTwitter, href: "https://x.com/KamaySolutions" },
                { icon: faLinkedinIn, href: "https://www.linkedin.com/company/kamay-solutions" },
                { icon: faInstagram, href: "https://www.instagram.com/kamaysolutions/" },
                { icon: faTiktok, href: "https://www.tiktok.com/@kamay_solutions" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 hover:bg-primary/20 transition-all backdrop-blur-sm border border-white/10 hover:border-primary/30 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon 
                    icon={social.icon}
                    className="text-2xl text-gray-300 group-hover:text-white transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="mt-12 border-t border-white/10 pt-8 w-full">
              <p className="text-gray-400">
                © {new Date().getFullYear()} KAMAY Solutions. All rights reserved.
              </p>
              <p className="text-gray-400 mt-2">
                Proudly building the future
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
    </footer>
  );
}