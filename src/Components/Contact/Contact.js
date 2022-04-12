import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ElfsightWidget } from "react-elfsight-widget";
import "../Contact/contact.css";
import image3 from "../Images/image3.png";

function Contact() {
  return (
    <>
      <div
        className="contact"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 25px",
          backgroundColor: "#0D0106",
        }}
      >
        <div className="contact-page">
          <div className="contact-info">
            <p className="contact-text">
              Phone/Text Number:
              <br />
              (919)-273-5365
              <br />
              Social Media:
            </p>
          </div>
          <div className="contact-links">
            <a
              className="contact-link"
              href="https://www.facebook.com/lunaperformance/"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="contact-link"
              href="https://www.instagram.com/luna_performance/?hl=en"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div class="elfsight-app-1ab0df33-5cfd-4a67-bebb-688c615ee9eb"></div>
        </div>
      </div>
    </>
  );
}

export default Contact;

<ElfsightWidget widgetID="1ab0df33-5cfd-4a67-bebb-688c615ee9eb" />;
