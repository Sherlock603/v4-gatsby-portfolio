import * as React from "react";

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

const IndexPage = () => {
  return (
    <>
      <div id="SEO" />
      <div id="layout_landing-page">
        <div id="container_landing-page">
          <h1>{greeting()}</h1>
          <h2>About me</h2>
          <p>
            IT professional with 5+ years of experience in SaaS Quality
            Assurance and Sales.
          </p>
          <p>
            Record of successfully working in collaborative cross-functional
            teams, and engaging with internal and external stakeholders, to
            deliver software solutions on schedule and within budget.
          </p>
          <p>
            Agile devotee who enjoys utilizing framework to continuously improve
            how I collaborate with colleagues, manage project workloads, and
            design effective test plans.
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
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
