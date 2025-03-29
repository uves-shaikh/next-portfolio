import { Navbar } from "@/components";
import { About, Footer, Header, Skills, Testimonial, Work } from "@/modules";
import "./App.scss";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
