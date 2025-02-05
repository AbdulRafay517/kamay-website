import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import QuestionSection from "../components/QuestionSection";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section>
          <ScrollAnimation delay={0.2}>
            {/* Home Section with Animated Gradient */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 bg-[length:200%_auto] opacity-50" />
          <div className="absolute inset-0 -z-20 bg-noise" />
          <HomeSection />
        </section>
            </ScrollAnimation>
          </section>

          <section>
      <ScrollAnimation delay={0.2}>
        {/* Intro Section with Grid Background */}
        <section className="relative bg-grid py-24">
          <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-sm" />
          <IntroSection />
        </section>
      </ScrollAnimation>
    </section>

    <section>
      <ScrollAnimation delay={0.2}>
        {/* Services Section with Floating Blobs */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute -left-48 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
          <div className="absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-primary/20 to-secondary/20 blur-3xl" />
          <ServicesSection />
        </section>
      </ScrollAnimation>
    </section>

    <section>
      <ScrollAnimation delay={0.2}>
        {/* Projects Section with Dot Pattern */}
        <section className="relative bg-dot-pattern py-24">
          <div className="absolute inset-0 -z-10 bg-background/90" />
          <ProjectsSection />
        </section>
      </ScrollAnimation>
    </section>

    <section>
      <ScrollAnimation delay={0.2}>
        {/* Question Section with Animated Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 py-24">
          <div className="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-r from-primary/10 via-background/10 to-primary/10 bg-[length:200%_auto]" />
          <QuestionSection />
        </section>
      </ScrollAnimation>
    </section>
      </main>

      <section>
      <ScrollAnimation delay={0.2}>
      <Footer />
      </ScrollAnimation>
    </section>
    </div>
  );
}