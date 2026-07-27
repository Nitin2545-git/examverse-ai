import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PopularExams from "../components/PopularExams";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <PopularExams />
    </>
  );
}
