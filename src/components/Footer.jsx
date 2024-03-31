import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div class="footerContainer">
        <div class="socialIcons">
          <img src="https://themejunction.net/html/gerold/demo/assets/img/logo/logo-dark.png" />
        </div>
        <div class="footerNav">
          <ul>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footerBottom">
        <p>© 2024 All rights reserved by ThemeJunction</p>
      </div>
    </div>
  );
};
