import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Highlight from "./components/Highlight";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <Highlight />
        <Testimonials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
