import CarouselHome from "./components/Home/CarouselHome";
import FeaturesHome from "./components/Home/FeaturesHome";
import HomeAbout from "./components/Home/HomeAbout";
import TaxHome from "./components/Home/TaxHome";
import TestimonialHome from "./components/Home/TestimonialHome";

export default function Home() {
  return (
    <main className="w-full min-h-[78vh] bg-white text-black">
      <CarouselHome />
      <HomeAbout />
      <TaxHome />
      <FeaturesHome />
      <TestimonialHome />
    </main>
  );
}
