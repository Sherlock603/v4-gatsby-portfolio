import * as React from "react";
import { Link } from "gatsby";

var greeting = () => {
  let today = new Date();
  let hoursNow = today.getHours();

  if (hoursNow >= 18 && hoursNow < 21) {
    return "good evening";
  } else if (hoursNow >= 12 && hoursNow < 18) {
    return "good afternoon";
  } else if (hoursNow >= 6 && hoursNow < 12) {
    return "good morning";
  } else {
    return "good night";
  }
};

const AboutPage = () => {
  return (
    <>
      <div id="SEO" />
      <div id="layout_about-page">
        <div id="container_about-page">
          <h1>About me</h1>
          <p>
            {greeting()} IT professional with 5+ years of experience in SaaS
            Quality Assurance and Sales. Agile/Scrum devotee. Craft beer
            aficionado working towards earning First-Level Cicerone
            Certification.
          </p>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
