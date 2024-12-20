import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Episodes from "./components/Episodes";
import Company from "./components/Company";
import YourStory from "./components/YourStory";

export default function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <YourStory />
      <Episodes />
      <Company />
    </div>
  );
}
