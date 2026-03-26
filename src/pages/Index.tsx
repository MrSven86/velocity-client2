import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResidentialSection from "@/components/ResidentialSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <TopBar />
      <Navbar />
      <HeroSection />
      <ResidentialSection />
      <ServicesSection />
      <ReviewsSection />
      <GallerySection />
      <AboutSection />
      <ServiceAreasSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
