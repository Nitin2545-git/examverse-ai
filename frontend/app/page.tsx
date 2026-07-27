import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PopularExams from "../components/PopularExams";
import AIChatPreview from "../components/AIChatPreview";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <PopularExams />
      <AIChatPreview />
      <Features />
    </>
  );
}
