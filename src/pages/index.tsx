import { type NextPage } from "next";
import About from "../sections/about.component";
import Contact from "../sections/contact.component";
import Courses from "../sections/courses.component";
import Footer from "../sections/footer.component";
import Header from "../sections/header.component";
import Hero from "../sections/hero.component";
import Offer from "../sections/offer.component";
import Projects from "../sections/projects.component";
import Tech from "../sections/tech.component";

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      {/* <div className="hero-gradient"> */}
      <Hero />
      {/* </div> */}
      <About />
      <Offer />
      <Tech />
      <Projects />
      {/* <Courses /> */}
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
