import React from "react";
import Header from "./component/Static/Header";
import Nav from "./component/Static/Navbar";
import About from "./component/Pages/About";
import Experience from "./component/Pages/Experience";
import Services from "./component/Pages/Service";
import Portfolio from "./component/Pages/Portfolio";
import Testimonials from "./component/Pages/Testimonials";
import Contact from "./component/Pages/Contact";
import Footer from "./component/Static/Footer";
import './App.css'
import './component/style.css'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
