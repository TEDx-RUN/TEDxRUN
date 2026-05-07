import About from "@/sections/About";
import AboutRun from "@/sections/AboutRun";
import Cta from "@/sections/Cta";
import DateTicker from "@/sections/DateTicker";
import Event from "@/sections/Event";
import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Quote from "@/sections/Quote";
import Speakers from "@/sections/Speakers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DateTicker />
      <About />
      <AboutRun />
      <Event />
      <Quote />
      <Speakers />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
