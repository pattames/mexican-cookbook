// Navbar (Andrea)
//Hero section (Andrea()
//Bowse by category (Andrea)
//Browse by Recipe (Patricio)
//Subscription (Ibrahim)
//Footer (Ibrahim)
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import Subscriptions from "./Subscriptions";
import BrowseByCard from "./BrowseByCard";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BrowseByCard />
      <Subscriptions />
    </>
  );
}
