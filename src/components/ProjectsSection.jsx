import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import image1 from "../assets/images/home-mapper.jpeg";
import image2 from "../assets/images/magzak.jpg";
import image3 from '../assets/images/Project_1.jpeg';
import image4 from "../assets/images/object-detection.jpg";
import image5 from "../assets/images/lfr.jpg";
import image6 from "../assets/images/sumo.jpg";

const projects = [
  {
    title: "HomeMapper: AI Floor Map Generator",
    description: "An innovative project that leverages the power of artificial intelligence (AI) and computer-aided design (CAD) to generate 3D floor plans from user descriptions",
    tech: ["Python", "Streamlit", "AI"],
    image: image1
  },
  {
    title: "MAGZAK Turbine (Vertical Axis Wind Turbine (VAWT))",
    description: "A Vertical Axis Wind Turbine (VAWT) named MAGZAK. The primary goal is to create an efficient, cost-effective, and environmentally friendly wind energy solution that can be deployed in urban and rural settings, particularly in hilly areas and along highways",
    tech: ["IoT", "Power", "Energy"],
    image: image2
  },
  {
    title: "IoT Based Security System using Smart Tiles",
    description: "IoT-based security system using the ESP32 microcontroller",
    tech: ["IoT", "Security", "AI"],
    image: image3
  },
  {
    title: "Real-Time Object Detection and Tracking with YOLOv8",
    description: "A real-time object detection and tracking system using YOLOv8 and background subtraction",
    tech: ["AI", "YOLOv8", "Python"],
    image: image4
  },
  {
    title: "Line Following Robot (LFR)",
    description: "An autonomous robotic system designed to navigate a predefined path marked by a line, typically a black line on a white surface",
    tech: ["Arduino", "Robotics", "Automotive"],
    image: image5
  },
  {
    title: "Sumo Robot",
    description: "A competitive, autonomous robot designed to engage in sumo-style battles with other robots in a confined ring",
    tech: ["Arduino", "Robotics", "Automotive"],
    image: image6
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <ScrollAnimation delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured
            </span>
            <span className="block mt-2">Projects</span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index} delay={0.1 * index}>
              <motion.div 
                className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-lg h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  

                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-accent/50 text-accent-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* View More Button */}
        <ScrollAnimation delay={0.3}>
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-background border hover:border-primary transition-all shadow-sm hover:shadow-md"
              onClick={() => window.location.href = 'https://www.linkedin.com/company/kamay-solutions/posts'}
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                View All Projects
              </span>
            </motion.button>
          </div>
        </ScrollAnimation>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}