import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PopularExams from "../components/PopularExams";
import AIChatPreview from "../components/AIChatPreview";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <PopularExams />
      <AIChatPreview />
      <Features />
      <Statistics />
      <Testimonials />
      <Footer />
    </>
  );
}
