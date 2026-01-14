import Hero from "@/components/Hero";
import FeaturedMovies from "@/components/FeaturedMovies";
import MovieSpotlight from "@/components/MovieSpotlight";
import BestActors from "@/components/BestActors";
import WhyFilmic from "@/components/WhyFilmic";
import CinemaQuotes from "@/components/CinemaQuotes";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedMovies />
      <MovieSpotlight />
      <BestActors />
      <WhyFilmic />
      <CinemaQuotes />
      {/* Additional sections will go here */}
    </div>
  );
}
