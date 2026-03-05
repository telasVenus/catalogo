import "./App.css";
import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import ReviewsAndMap from "./components/ReviewsAndMap";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <CTASection />
      <ReviewsAndMap />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
