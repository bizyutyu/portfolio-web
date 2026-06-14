import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
