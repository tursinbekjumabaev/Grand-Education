import AppLayout from "@/widgets/layout/AppLayout";
import AboutIntroSection from "@/widgets/about/AboutIntroSection";
import AboutBenefitsSection from "@/widgets/about/AboutBenefitsSection";
import ContactSection from "@/widgets/about/ContactSection";
import LocationMapSection from "@/widgets/about/LocationMapSection";

export default function AboutPage() {
  return (
    <AppLayout>
      <AboutIntroSection />
      <AboutBenefitsSection />
      <ContactSection />
      <LocationMapSection />
    </AppLayout>
  );
}