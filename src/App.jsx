/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Kakuru Conrad Akankwasa",
  title: "Software Engineer & Data Scientist",
  email: "kakurucon1234@gmail.com",
  gitHub: "https://github.com/ConradKash",
  instagram: "https://www.instagram.com/thee.mukiga",
  linkedIn: "https://ug.linkedin.com/in/kakuru-conrad-akankwasa-89289b1a4",
  medium: "https://medium.com/@conradkash",
  twitter: "https://twitter.com/ConradKakuru",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
