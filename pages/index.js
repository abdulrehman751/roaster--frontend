import { Geist, Geist_Mono } from "next/font/google";
import CardContainer from "@/components/cardContainer";
import VideoContainer from "@/components/videoContainer";
import ProductContainer from "@/components/productContainer";
import DesignContainer from "@/components/designContainer";
import ReviewsContainer from "@/components/reviewsContainer";
import FooterComponent from "@/components/common/footer";
import MadeInUSAContainer from "@/components/MadeInUSAContainer";
import SliderSection from "@/components/imagesSlider";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import TopSection from "@/components/topSection";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full">
      <TopNavBar />
      <Header />
      
      <TopSection />
      <SliderSection />
      <CardContainer />
      <VideoContainer />
      <ProductContainer />
      <DesignContainer />
      <ReviewsContainer />
      <MadeInUSAContainer />
      <FooterComponent />
    </div>
  );
}
