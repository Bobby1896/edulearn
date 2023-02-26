import React from "react";
import BlueBackground from "../images/BlueBackground.png";
import LadyOnGlases from "../images/LadyOnGlases.png";
import IBM from "../images/IBM.png";
import Duolingoo from "../images/Duolingoo.png";
import Google from "../images/Google.png";
import Stanford from "../images/Stanford.png";
import ImperialCollege from "../images/ImperialCollege.png";
import Desktop1 from "../images/Desktop1.png";
import Ruler from "../images/Ruler.png";
import Tab from "../images/Tab.png";
import Chart from "../images/Chart.png";
import HandShaking from "../images/HandShaking.png";
import Studio from "../images/Studio.png";
import Arrow from "../images/Arrow.png";
import Star from "../images/Star.png";
import "../scss/landingPage.scss";

function LandingPage() {
  return (
    <body>
      <div className="first-paragraph">
        <section>
          <h1 className="kickstart">
            Kickstart your career in any field of your choice
          </h1>
          <p className="register">
            Register for any course from anywhere at anytime by choosing from
            the dierange of courses available on eduLearn
          </p>
          <a href="" className="btn-1">
            Join for free
          </a>
        </section>

        <section>
          <img src={BlueBackground} className="blue-bg" alt="Blue Background" />
          <img
            src={LadyOnGlases}
            className="glass-lady"
            alt="Lady on Glasses"
          />
        </section>
      </div>

      <div className="figures">
        <h1>
          20k+ <span style={{ fontSize: "20px" }}>Students</span>
        </h1>
        <h1>
          15k+ <span style={{ fontSize: "20px" }}>Countries</span>
        </h1>
        <h1>
          120 <span style={{ fontSize: "20px" }}>Courses</span>
        </h1>
      </div>

      {/* <div className="brands">
        <span>
          <img src={IBM} alt="IBM" />
        </span>
        <span style={{ width: "20px", height: "20px", fontSize: "30px" }}>
          <img src={Stanford} alt="Stanford" />
        </span>
        <span style={{ width: "20px", height: "20px", fontSize: "15px" }}>
          <img src={Google} alt="Google" />
        </span>
        <img src={Stanford} alt="Stanford" />
        <img src={Duolingoo} alt="Duolingo" />
      </div> */}

      <div className="trending">
        <h1>Trending Courses</h1>
        <p>
          <span style={{ fontSize: "24px" }}>
            Browse through our popular and trending courses to get sarted with
            your learning journey.
          </span>
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="cards">
            <img src={Desktop1} alt="Desktop" />
            <h1>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                UI/UX Design
              </span>
            </h1>
            <div className="star">
              <p>
                <img className="star-icon" src={Star} alt="" />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  5.0 (340 reviews)
                </span>
              </p>
              <p className="money">$34</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>

          <div className="cards">
            <img src={Ruler} alt="Ruler" />
            <h1>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                Digital Marketing
              </span>
            </h1>
            <div className="star">
              <p>
                <img className="star-icon" src={Star} alt="" />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  5.0 (340 reviews)
                </span>
              </p>
              <p className="money">$36</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>

          <div className="cards">
            <img src={Tab} alt="Tab" />
            <h1>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                UX Writing Introduction
              </span>
            </h1>
            <div className="star">
              <p>
                <img className="star-icon" src={Star} alt="" />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  5.0 (340 reviews)
                </span>
              </p>
              <p className="money">$20</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>
        </div>

        <div className="row-2">
          <div className="cards">
            <img src={HandShaking} alt="Handshake" />
            <h1>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                Public Speaking Basics
              </span>
            </h1>
            <div className="star">
              <p>
                <img className="star-icon" src={Star} alt="" />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  5.0 (340 reviews)
                </span>
              </p>
              <p className="money">Free</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>

          <div className="cards">
            <img src={Chart} alt="Chart" />
            <h1>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                Content Marketing
              </span>
            </h1>
            <div className="star">
              <p>
                <img className="star-icon" src={Star} alt="" />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  5.0 (340 reviews)
                </span>
              </p>
              <p className="money">$24</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>

          <div className="cards">
            <img src={Studio} alt="Studio" />
            <h1>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                Portrait Photography
              </span>
            </h1>
            <div className="star">
              <p>
                <img className="star-icon" src={Star} alt="" />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  5.0 (340 reviews)
                </span>
              </p>
              <p className="money">$26</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>
        </div>
      </div>

      <div className="more-courses">
        <p className="arrow">See more courses</p>
        <img className="arrow-icon" src={Arrow} alt="" />
      </div>

      <div>
        <p>WHY CHOOSE EDU LEARN</p>
      </div>
    </body>
  );
}

export default LandingPage;
