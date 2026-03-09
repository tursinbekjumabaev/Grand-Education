import AppLayout from "@/widgets/layout/AppLayout";
import HeroSection from "@/widgets/home/HeroSection";
import FeaturesSection from "@/widgets/home/FeaturesSection";
import StatsSection from "@/widgets/home/StatsSection";
import CtaSection from "@/widgets/home/CtaSection";

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
    </AppLayout>
  );
}