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
import BoyOnHeadset from "../images/BoyOnHeadset.png";
import Mentorship from "../images/Mentorship.png";
import Access from "../images/Access.png";
import Certificate from "../images/Certificate.png";
import Finance from "../images/Finance.png";
import Firstaid from "../images/Firstaid.png";
import Call from "../images/Call.png";
import Shoppingcart from "../images/Shoppingcart.png";
import RedDiary from "../images/RedDiary.png";
import Passport from "../images/Passport.png";
import Stargroups from "../images/Stargroups.png";
import Group1 from "../images/Group1.png";
import Group2 from "../images/Group2.png";
import Group3 from "../images/Group3.png";
import Group4 from "../images/Group4.png";
import Group5 from "../images/Group5.png";
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
            <h1 className="card-details">UI/UX Design</h1>
            <div className="star">
              <p className="reviews">
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
            <h1 className="card-details">Digital Marketing</h1>
            <div className="star">
              <p className="reviews">
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
            <h1 className="card-details">UX Writing Introduction</h1>
            <div className="star">
              <p className="reviews">
                <img className="star-icon" src={Star} alt="" />
                5.0 (340 reviews)
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
            <h1 className="card-details">Public Speaking Basics</h1>
            <div className="star">
              <p className="reviews">
                <img className="star-icon" src={Star} alt="" />
                5.0 (340 reviews)
              </p>
              <p className="money">Free</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>

          <div className="cards">
            <img src={Chart} alt="Chart" />
            <h1 className="card-details">Content Marketing</h1>
            <div className="star">
              <p className="reviews">
                <img className="star-icon" src={Star} alt="" />
                5.0 (340 reviews)
              </p>
              <p className="money">$24</p>
            </div>
            <a href="" className="btn">
              Enroll Now
            </a>
          </div>

          <div className="cards">
            <img src={Studio} alt="Studio" />
            <h1 className="card-details">Portrait Photography</h1>
            <div className="star">
              <p className="reviews">
                <img className="star-icon" src={Star} alt="" />
                5.0 (340 reviews)
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

      <div className="section-3">
        <div className="headset">
          <span>
            <img src={BoyOnHeadset} alt="" />
          </span>
        </div>

        <div className="why-edu">
          <h1 className="edulearn">Why EduLearn?</h1>

          <div>
            <div className="reasons">
              <img className="whyEdu-icon" src={Access} alt="" />
              <p className="reason"> Lifetime Access</p>
            </div>
            <p className="content">
              Lifetime access to all courses on your profile
            </p>
          </div>

          <div>
            <div className="reasons">
              <img className="whyEdu-icon" src={Certificate} alt="" />
              <p className="reason">Certification</p>
            </div>
            <p className="content">
              Get issued a certificate upon completion of your course.
            </p>
          </div>

          <div>
            <div className="reasons">
              <img className="whyEdu-icon" src={Finance} alt="" />
              <p className="reason">Financial Aid</p>
            </div>
            <p className="content">Apply for financial aid for paid courses</p>
          </div>

          <div>
            <div className="reasons">
              <img className="whyEdu-icon" src={Mentorship} alt="" />
              <p className="reason">Mentorship</p>
            </div>
            <p className="content">
              Get mentored by world class tutors during and after your courses.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="courses-24">
          <h1 className="courses">Courses You Can Complete Within 24Hours</h1>
          <p className="browse">
            Browse through our popular and trending courses to get sarted with
            your learning journey.
          </p>
        </div>
      </div>

      <div className="section-4">
        <div className="row">
          <div className="cards">
            <img src={Call} alt="" />
            <h1 className="card-details">Communication Skills 1</h1>
            <p className="courses-card">Leslie Alexander </p>
            {/* <img className="shop-cart" src={Shoppingcart} alt="" /> */}
            <a href="" className="btn-cart">
              Add to Cart
            </a>
          </div>

          <div className="cards">
            <img src={Firstaid} alt="" />
            <h1 className="card-details">Basics of First Aid</h1>
            <p className="courses-card">Brooklyn Simmons</p>
            {/* <img className="shop-cart" src={Shoppingcart} alt="" /> */}
            <a href="" className="btn-cart">
              Add to Cart
            </a>
          </div>

          <div className="cards">
            <img src={HandShaking} alt="" />
            <h1 className="card-details"> Negotiating like a PRO</h1>
            <p className="courses-card">Savannah Nguyen </p>
            <p>
              <a href="" className="btn-cart">
                Add to Cart
              </a>
            </p>
          </div>
        </div>

        <div className="more-courses">
          <p className="arrow">See more courses</p>
          <img className="arrow-icon" src={Arrow} alt="" />
        </div>

        <div className="section-5">
          <div className="aid">
            <p className="apply">
              Apply for <br /> financial aid
            </p>
            <p className="get">
              Get financial aid to complete your courses <br /> and also get
              cerified with just a few <br /> processes.
            </p>
            <a href="" className="aid-btn">
              Join for free
            </a>
          </div>

          <div>
            <img src={RedDiary} alt="" />
          </div>
        </div>

        <p className="student">What Our Students Have to Say</p>

        <div className="section-6">
          <div className="plain-card">
            <div className="passport">
              <img src={Passport} alt="" />
              <p>Olivia Shawn</p>
              <img src={Stargroups} alt="" />
              <p>
                I started out my career in product design by taking courses from
                eduLearn.
              </p>
            </div>
          </div>

          <div className="plain-card">
            <div className="passport">
              <img src={Passport} alt="" />
              <p className="name">Olivia Shawn</p>
              <img src={Stargroups} alt="" />
              <p>
                It’s a very good platform to kickstart a career or learn
                anything at all.
              </p>
            </div>
          </div>

          <div className="plain-card">
            <div className="passport">
              <img src={Passport} alt="" />
              <p>Olivia Shawn</p>
              <img src={Stargroups} alt="" />
              <p>Learnt how to read and write French Language on eduLearn.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-7">
        <div className="community">
          <p className="join">
            Join Our Student <br /> Community
          </p>
          <p className="update">
            Get firsthand updates about course,
            <br /> discounts, pricing and everything about your <br />
            membership at eduLearn.
          </p>
          <div className="subscribe">
            <input className="input" type="text" placeholder="Email Address" />
            <a href="" className="subscribe-btn">
              Subscribe
            </a>
          </div>
        </div>

        <div className="group-images">
          <img className="img1" src={Group1} alt="" />
          <img className="img2" src={Group4} alt="" />
          <img className="img3" src={Group3} alt="" />
          <img className="img4" src={Group2} alt="" />
          <img className="img5" src={Group5} alt="" />
        </div>
      </div>
    </body>
  );
}

export default LandingPage;
