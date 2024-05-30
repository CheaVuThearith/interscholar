import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/16/solid";
import { Suspense } from "react";
import Card from "./_components/FeatureCard";
import LoadingRecentlyAddedSection from "./_components/LoadingRecentlyAddedSection";
import ContactSection from "./_components/Sections/ContactSection";
import RecentlyAddedSection from "./_components/Sections/RecentlyAddedSection";
import TeamSection from "./_components/Sections/TeamSection";
import FeaturesSection from "./_components/Sections/FeaturesSection";
import HeroSection from "./_components/Sections/HeroSection";


export default function Home() {
  return (
    <>
      {/* Hero */}
     <HeroSection/>
      {/* features  */}
      <FeaturesSection />
      <TeamSection />
      <Suspense fallback={<LoadingRecentlyAddedSection />}>
        <RecentlyAddedSection />
      </Suspense>
      <ContactSection />
    </>
  );
}
