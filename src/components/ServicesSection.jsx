import { motion } from "framer-motion";
import { Code, Shield, Layout, Smartphone, PenTool, Zap, Settings, Sun } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation"; // Reuse your scroll animation component

const services = [
  { icon: <Settings className="w-8 h-8" />, title: "Engineering Projects", description: "Tailored solutions for complex technical challenges" },
  { icon: <Code className="w-8 h-8" />, title: "Software Development", description: "Full-stack solutions from concept to deployment" },
  { icon: <Layout className="w-8 h-8" />, title: "Circuit Design", description: "Precision PCB and embedded systems design" },
  { icon: <PenTool className="w-8 h-8" />, title: "Graphic Design", description: "Visual storytelling that captures brand essence" },
  { icon: <Smartphone className="w-8 h-8" />, title: "Digital Marketing", description: "Data-driven strategies for maximum impact" },
  { icon: <Shield className="w-8 h-8" />, title: "Cyber Security", description: "Enterprise-grade protection solutions" },
  { icon: <Zap className="w-8 h-8" />, title: "Tech Consulting", description: "Strategic guidance for digital transformation" },
  { icon: <Sun className="w-8 h-8" />, title: "Solar Solutions", description: "Sustainable energy systems design & implementation" },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-48 left-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse hidden md:block" />
      <div className="absolute -bottom-48 right-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-primary/20 to-secondary/20 blur-3xl animate-pulse hidden md:block" />
      
      <div className="container px-4 md:px-6">
        <ScrollAnimation delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Expert
            </span>
            <span className="block mt-2">Services</span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={0.1 * index}>
              <motion.div 
                className="group p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-accent/20 transition-all h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-4 text-primary group-hover:text-secondary transition-colors">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-lg w-fit"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                
                <motion.div 
                  className="w-0 h-[2px] bg-primary mt-4"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Floating Icons - Responsive Positioning */}
        <motion.div 
          className="z-[-10] md:block absolute top-[20%] left-[5%] w-24 h-24 bg-primary/10 rounded-2xl backdrop-blur-sm border p-4 animate-float"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <Code className="w-full h-full text-primary" />
        </motion.div>

        <motion.div 
          className="z-[-10] md:block absolute bottom-[30%] right-[5%] w-20 h-20 bg-secondary/10 rounded-xl backdrop-blur-sm border p-3 animate-float-delayed"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.7 }}
        >
          <Shield className="w-full h-full text-secondary" />
        </motion.div>
      </div>
    </section>
  );
}