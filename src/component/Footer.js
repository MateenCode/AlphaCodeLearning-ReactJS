import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">
              Copyright &copy; AlphaCodeLearning 2018
            </span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <button>
                  <i className="fab fa-twitter" />
                </button>
              </li>
              <li className="list-inline-item">
                <button>
                  <i className="fab fa-facebook-f" />
                </button>
              </li>
              <li className="list-inline-item">
                <button>
                  <i className="fab fa-linkedin-in" />
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <button>Privacy Policy</button>
              </li>
              <li className="list-inline-item">
                <button>Terms of Use</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
