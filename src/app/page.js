import Hero from "@/components/Hero";
import FeaturedMovies from "@/components/FeaturedMovies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedMovies />
      {/* Additional sections will go here */}
    </div>
  );
}
