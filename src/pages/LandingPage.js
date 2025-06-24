import "../styles/landing-page.css";
import illustration1 from "../assets/icons/illustration-1.webp";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

function LandingPage() {
  const navigate = useNavigate();

  function onClickLogin() {
    navigate("/login");
  }
  function onClickSignIn() {
    navigate("/register");
  }

  return (
    <>
      <div className="header-container">
        <div className="header-row">
          <div className="logo-text"></div>
          <div>
            <a className="header-button">HOME</a>
            <a className="header-button">CONTACT</a>
            <a className="header-button">ABOUT US</a>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content-img-container">
          <img className="content-img" src={illustration1} />
        </div>
        <div className="context-right-container">
          <div>
            <div className="content-text">Welcome back, User!</div>
          </div>
          <div className="content-button-container">
            <div className="content-button-row-container">
              <div className="content-button-text">Don't have an account?</div>
              <button className="content-button" onClick={onClickSignIn}>
                SIGN IN
              </button>
            </div>
            <div className="content-button-row-container">
              <div className="content-button-text">
                Already have an account?
              </div>
              <button className="content-button" onClick={onClickLogin}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-container">
        <div className="feature-text">Web Development Foundation</div>
        <div className="feature-list-container">
          <div className="feature-item-container">
            <div className="feature-img html"></div>
            <div className="feature-item-text">HTML</div>
            <div className="feature-item-desc">for structure</div>
          </div>
          <div className="feature-item-container">
            <div className="feature-img css"></div>
            <div className="feature-item-text">CSS</div>
            <div className="feature-item-desc">for styling</div>
          </div>
          <div className="feature-item-container">
            <div className="feature-img js"></div>
            <div className="feature-item-text">JavaScript</div>
            <div className="feature-item-desc">for interactivity</div>
          </div>
        </div>
      </div>
      <div className="message-container">
        <div className="message-top-container">
          <div className="message-text">Thank you for visiting our page!</div>
        </div>
        <div className="message-bottom-container"></div>
      </div>
      <div className="footer-container">
        <div className="footer-text">
          © 2025 MyWebpage. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default LandingPage;
