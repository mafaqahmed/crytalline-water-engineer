import CarouselHome from "./components/Home/CarouselHome";
import HomeAbout from "./components/Home/HomeAbout";

export default function Home() {
  return (
    <main className="w-full min-h-[78vh] bg-white text-black">
      <CarouselHome />
      <HomeAbout />
    </main>
  );
}
