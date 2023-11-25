import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SlideShow from "./components/SlideShow";
import { TopAnnouncement } from "./components/TopAnnouncement";

export default function Home() {
  return (
    <main>
      <TopAnnouncement />
      <Navbar />
      <Banner />
    </main>
  );
}
