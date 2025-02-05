import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              We are a team of passionate professionals dedicated to delivering innovative solutions.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}