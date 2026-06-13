import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <About />
      </main>
      <Footer />
    </>
  );
}
