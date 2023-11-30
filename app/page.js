"use client";
import image1 from "@/public/brands/Bitfins_logo_1f1299f3-eb5c-43bc-a76b-7b08dc7b454f_375x_crop_center 1all.png";
import image2 from "@/public/brands/cryptoraggies-logo-profilepic-trans-2000px_375x_crop_center 1all.png";
import image3 from "@/public/brands/Logo_375x_crop_center 1all.png";
import image4 from "@/public/brands/meSG3lth_400x400_1_375x_crop_center 1all.png";
import image5 from "@/public/brands/pendulum-brava-logo_375x_crop_center 1all.png";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SlideShow from "./components/SlideShow";
import { TopAnnouncement } from "./components/TopAnnouncement";

export default function Home() {
  const brands = [
    { image: image1, brandName: "@hosky", linkToBrand: "/" },
    { image: image1, brandName: "bitfins", linkToBrand: "/" },
    { image: image2, brandName: "cardano stonerz club", linkToBrand: "/" },
    { image: image3, brandName: "cryptoraggies", linkToBrand: "/" },
    { image: image4, brandName: "danketsu", linkToBrand: "/" },
    { image: image5, brandName: "future fest", linkToBrand: "/" },
    { image: image5, brandName: "pendulum", linkToBrand: "/" },
    { image: image5, brandName: "vudu brigada", linkToBrand: "/" },
  ];

  return (
    <main className="w-full">
      <TopAnnouncement />
      <Navbar brands={brands} />
      <Banner />
      <SlideShow brands={brands} />
    </main>
  );
}
