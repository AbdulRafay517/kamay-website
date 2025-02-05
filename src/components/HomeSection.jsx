import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <motion.section id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full pt-20 md:pt-24 lg:pt-32 min-h-[80vh] flex items-center"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/80" />
      </motion.div>

      {/* Content */}
      <div className="container px-4 md:px-6">
        <motion.div 
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="relative inline-block">
                <span className="relative bg-gradient-to-r from-primary via-secondary/80 to-primary bg-clip-text text-transparent">
                  Welcome to KAMAY
                </span>
              </span>
            </h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.2
                }
              }
            }}
            className="max-w-[700px] text-lg text-foreground/90 md:text-xl mt-6 font-medium"
          >
            Where vision meets innovation
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { delay: 0.8 }
            }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
              className="w-6 h-10 rounded-full border-2 border-primary flex items-center justify-center"
            >
              <motion.div
                className="w-1 h-2 bg-primary rounded-full"
                animate={{ y: [-5, 5] }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}