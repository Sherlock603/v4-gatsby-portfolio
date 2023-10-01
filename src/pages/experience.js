import * as React from "react";
import { Link } from "gatsby";

var greeting = () => {
  let today = new Date();
  let hoursNow = today.getHours();

  if (hoursNow >= 18 && hoursNow < 21) {
    return "Good evening";
  } else if (hoursNow >= 12 && hoursNow < 18) {
    return "Good afternoon";
  } else if (hoursNow >= 6 && hoursNow < 12) {
    return "Good morning";
  } else {
    return "Thanks for visiting my portfolio";
  }
};

const ExperiencePage = () => {
  return (
    <>
      <div id="SEO" />
      <div id="layout_about-page">
        <div id="container_about-page">
          <h1>About me</h1>
          <p>
            {greeting()}, friend! I'm an IT professional with 5+ years of experience in SaaS
            Quality Assurance and Sales. Currently, I work as
          </p>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default ExperiencePage;

export const Head = () => <title>About Page</title>;
