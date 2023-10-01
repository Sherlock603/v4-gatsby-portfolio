import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <div id="SEO" />
      <div id="layout_landing-page">
        <div id="container_landing-page">
          <h1>Hank Holmes</h1>
        </div>
        <p>
          IT professional with 5+ years of Quality Assurance and Sales
          experience. Agile and Scrum devotee. Avid traveler, amateur
          history buff, and craft beer aficionado.
        </p>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
