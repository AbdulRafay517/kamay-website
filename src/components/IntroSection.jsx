import { Users, Shield, Code, MessageCircle, Rocket, Lightbulb } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="relative py-24 overflow-hidden isolate">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-15 bg-gradient-to-b from-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-full max-w-4xl h-96 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-3xl" />

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 text-sm font-medium rounded-full bg-accent/30 text-accent-foreground backdrop-blur-sm border">
              <Lightbulb className="w-5 h-5" />
              Innovating Since 2024
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Transforming Vision Into
              <span className="block mt-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At KAMAY Solutions, we bridge the gap between technological innovation 
              and practical implementation. Our multidisciplinary approach combines 
              technical expertise with creative problem-solving to deliver solutions 
              that drive real-world impact.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4">
              {[
                { icon: Rocket, value: '15+', label: 'Projects' },
                { icon: Users, value: '20+', label: 'Experts' },
                { icon: Shield, value: '98%', label: 'Satisfaction' },
                { icon: Code, value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-background/50 border backdrop-blur-sm hover:bg-accent/20 transition-all"
                >
                  <stat.icon className="w-8 h-8 mb-3 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative h-[500px] rounded-3xl border bg-background/30 backdrop-blur-md p-8">
            {/* Floating Elements */}
            <div className="absolute top-16 -left-8 w-32 h-32 bg-primary/10 rounded-2xl backdrop-blur-sm border p-5 animate-float">
              <Code className="w-full h-full text-primary" />
            </div>

            <div className="absolute top-1/2 -right-10 w-24 h-24 bg-secondary/10 rounded-xl backdrop-blur-sm border p-4 animate-float-delayed">
              <Shield className="w-full h-full text-secondary" />
            </div>

            <div className="absolute bottom-20 left-0 w-28 h-28 bg-primary/10 rounded-2xl backdrop-blur-sm border p-5 animate-float">
              <Users className="w-full h-full text-primary" />
            </div>

            {/* Central Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-background/80 backdrop-blur-lg rounded-2xl border shadow-lg p-6">
              <div className="flex flex-col items-center h-full justify-center text-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
                  <div className="relative w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Collaborative Approach</h3>
                <p className="text-sm text-muted-foreground">
                  We work hand-in-hand with clients to ensure perfect alignment 
                  between vision and execution
                </p>
              </div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-20 bg-grid" />
          </div>
        </div>
      </div>
    </section>
  );
}