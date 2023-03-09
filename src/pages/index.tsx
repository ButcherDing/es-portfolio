import { type NextPage } from "next";
import About from "../features/portfolio-sections/about.component";
import Contact from "../features/portfolio-sections/contact.component";
import Courses from "../features/portfolio-sections/courses.component";
import Footer from "../features/portfolio-sections/footer.component";
import Header from "../features/portfolio-sections/header.component";
import Hero from "../features/portfolio-sections/hero.component";
import Offer from "../features/portfolio-sections/offer.component";
import Projects from "../features/portfolio-sections/projects.component";
import Tech from "../features/portfolio-sections/tech.component";

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
