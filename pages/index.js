import Image from "next/image";

import { Geist, Geist_Mono } from "next/font/google";
import UpperHeader from "@/components/common/upperheader";
import LowerHeader from "@/components/common/lowerHeader";
import MainSection from "@/components/mainSection";
import CenterMode from "@/components/imagesSlider";
import CardContainer from "@/components/cardContainer";
import VideoContainer from "@/components/videoContainer";
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
  <div>
    <UpperHeader/>
    <LowerHeader/>
    <MainSection/>
    <CenterMode/>
    <CardContainer/>
    <VideoContainer/>
  </div>
  );
}
