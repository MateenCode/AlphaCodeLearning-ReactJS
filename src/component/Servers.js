import React from "react";

export default function Servers() {
  return (
    <React.Fragment>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                What You Will Be Learning
              </h2>
              <h3 className="section-subheading text-muted">
                Alphacode is a 1v1 private tutoring service for those who need
                just more then classroom experience.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fas fa-circle fa-stack-2x"
                  style={{ color: "Red" }}
                />
                <i className="fab fa-html5 fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">HTML5</h4>
              <p className="text-muted">
                Hypertext Markup Language, a standardized system for tagging
                text files to achieve font, color, graphic, and hyperlink.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-info" />
                <i className="fab fa-css3-alt fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">CSS3</h4>
              <p className="text-muted">
                Cascading Style Sheets. CSS describes how HTML elements are to
                be displayed on screen, paper, or in other media.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fas fa-circle fa-stack-2x"
                  style={{ color: "DarkOrange" }}
                />
                <i className="fab fa-js fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">JavaScipt</h4>
              <p className="text-muted">
                An object-oriented computer programming language.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fas fa-circle fa-stack-2x"
                  style={{ color: "DarkGreen" }}
                />
                <i className="fab fa-node-js fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">NodeJS</h4>
              <p className="text-muted">
                Open-source, cross-platform JavaScript run-time environment that
                executes JavaScript code outside of a browser.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fas fa-circle fa-stack-2x"
                  style={{ color: "DimGray" }}
                />
                <i className="fas fa-database fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">BootStrap4</h4>
              <p className="text-muted">
                Most popular CSS Framework for developing responsive and
                mobile-first websites.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i
                  className="fas fa-circle fa-stack-2x"
                  style={{ color: "violet" }}
                />
                <i className="fab fa-react fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">ReactJS</h4>
              <p className="text-muted">
                JavaScript library for building user interfaces, development of
                single-page or mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
