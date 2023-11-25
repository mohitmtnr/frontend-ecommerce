import Navbar from "./components/Navbar";
import { TopAnnouncement } from "./components/TopAnnouncement";

export default function Home() {
  return (
    <main>
      <TopAnnouncement />
      <Navbar />
    </main>
  );
}
