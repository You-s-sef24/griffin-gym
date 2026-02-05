import Contact from "./Components/Contact";
import Facilities from "./Components/Facilities";
import HeroSection from "./Components/HeroSection";
import MembershipOffers from "./Components/MembershipOffers";
import Rules from "./Components/Rules";
import Staff from "./Components/Staff";
import WorkingHours from "./Components/WorkingHours";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <MembershipOffers />
      <Facilities />
      <Staff />
      <WorkingHours />
      <Rules />
      <Contact />
    </div>
  );
}
