import Hero from "@/components/Hero";
import FeaturedMovies from "@/components/FeaturedMovies";
import WhyFilmic from "@/components/WhyFilmic";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedMovies />
      <WhyFilmic />
      {/* Additional sections will go here */}
    </div>
  );
}
