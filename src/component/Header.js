import React from "react";

export default function Header() {
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To AlphaCodeLearning!</div>
            <div className="intro-heading text-uppercase">
              This Is Where Your Path Start
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
            >
              Tell Me More
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
