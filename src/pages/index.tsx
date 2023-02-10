import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../sections/contact.component";
import Courses from "../sections/courses.component";
import Footer from "../sections/footer.component";
import Header from "../sections/header.component";
import Hero from "../sections/hero.component";
import Offer from "../sections/offer.component";
import Projects from "../sections/projects.component";

import hero from "../images/bg2.jpg";

const Home: NextPage = () => {
  return (
    <div className="space-y-12">
      <Header />

      {/* <div className=" bg-[url('../images/bg2.jpg')] bg-cover text-2xl"> */}
      <div className="hero-gradient">
        <Hero />
      </div>
      {/* </div> */}

      <Offer />

      <Projects />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
