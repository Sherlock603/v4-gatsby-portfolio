import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <div id="SEO" />
      <div id="layout_landing-page">
        <div id="container_landing-page">
          <h1>Hank Holmes</h1>
          <h2>About me</h2>
          <p>
            IT professional with 5+ years of experience in SaaS Quality
            Assurance and Sales. Agile/Scrum devotee. Craft beer aficionado
            working towards earning First-Level Cicerone Certification.
          </p>
          <h2>Additional Information</h2>
          <li>Originally from the great State of New Hampshire</li>
          <li>Currently live in North Carolina's Queen City</li>
          <li>
            Interests include exploring Charlotte's fantastic craft beer scene;
            hiking the White Mountains; cheering on the Boston Celtics; and
            honing my amateur cooking skills
          </li>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
