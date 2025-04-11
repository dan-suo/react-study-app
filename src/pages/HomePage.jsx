import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import HeroSection from "../components/home/HeroSection";
import MobileLayout from "../components/home/MobileLayout";
import DesktopLayout from "../components/home/DesktopLayout";

export default function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="text-center">
      <div className="flex justify-center mt-16">
        <HeroSection />
      </div>
      <div>{isMobile ? <MobileLayout /> : <DesktopLayout />}</div>
    </div>
  );
}
