import Carousel from "@/components/Carousel/Carousel";
import ClientComments from "@/components/clients-comment-section/ClientComments";
import FAQSection from "@/components/frequently asked question/FAQSection";
import HeroSection from "@/components/hero-section/HeroSection";
import PackageCard from "@/components/package-card/PackageCard";


export default function Home() {
  return (
    <>
      <div className="lms-container">
        <Carousel />
        <HeroSection />
        <div className="our-packge-section">
          <h1>Our Package</h1>
          <PackageCard />
        </div>
        <div className="clients-comment-section">
          <h1>Happy Clients says</h1>
          <ClientComments />
        </div>
        <div className="clients-comment-section">
          <h1>Frequently Asked Questions</h1>
          <FAQSection />
        </div>
      </div>
    </>
  )
}
