import React from "react";
import "../scss/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="col-1">
          <a className="headers" href="">
            Home
          </a>

          <p>FAQs</p>
          <p>Blogs</p>
          <p>Mentorship</p>
          <p>Become a teacher</p>
        </div>

        <div className="col-2">
          <a className="headers" href="">
            About
          </a>

          <p>Services</p>
          <p>Subscriptions</p>
          <p>Updates</p>
        </div>

        <div className="col-3 ">
          <a className="headers" href="">
            Social Media
          </a>

          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>

        <div className="col-4">
          <a className="headers" href="">
            Privacy Policy
          </a>

          <p>Discounts</p>
          <p>Pricing</p>
          <p>Contact US</p>
          <p>Support Center</p>
        </div>
      </div>
      <hr />
      <div className="c-footer">
        <p className="copyright"> © 2022 eduLearn</p>
      </div>
    </footer>
  );
}

export default Footer;
