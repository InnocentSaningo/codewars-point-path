import HeroSection from "@/components/HeroSection";
import PointsSystem from "@/components/PointsSystem";
import ProgressTracker from "@/components/ProgressTracker";
import ResourceLinks from "@/components/ResourceLinks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PointsSystem />
      <ProgressTracker />
      <ResourceLinks />
    </div>
  );
};

export default Index;
