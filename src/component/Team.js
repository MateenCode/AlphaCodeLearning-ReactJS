import React from "react";

export default function Team() {
  return (
    <div className="bg-light" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              Our Amazing Instructors
            </h2>
            <h3 className="section-subheading text-muted">
              @ AlphaCodeLearning
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={"../img/team/1.jpg"}
                alt=""
              />
              <h4>Kay Garland</h4>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={"../img/team/2.jpg"}
                alt=""
              />
              <h4>Larry Parker</h4>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={"./img/team/3.jpg"}
                alt=""
              />
              <h4>Diana Pertersen</h4>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              They are motivated and determined to make your learning experience
              amazing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
