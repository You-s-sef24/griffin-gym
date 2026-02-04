import Coaches from "./Components/Coaches";
import Facilities from "./Components/Facilities";
import HeroSection from "./Components/HeroSection";
import MembershipOffers from "./Components/MembershipOffers";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <MembershipOffers />
      <Facilities />
      <Coaches />
    </div>
  );
}
