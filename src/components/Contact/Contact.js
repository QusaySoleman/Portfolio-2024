import "./Contact.css";
import React from "react";
import whatsapp from "../../Assets/images/Whatsapp QR-Code.jpeg";
function Contact() {
  return (
    <div className=" container-fluid contact-section " id="contact-section">
      <div className="row stay-connected">
        <h4>Contact Me</h4>
        {/* 1 */}
        <div className="col-md-4 col-sm-12">
          <h4>Social Media</h4>
          <div className="icons-group-1">
            <div className="icon-box">
              <a
                href="https://www.facebook.com/qusay.almheo"
                target="blank"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.linkedin.com/in/qusay-mheo-838205317/" target="blank" title="Linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="icon-box">
              <a href="mailto:qusaymheo1997@gmail.com">
                <i
                  className="bi bi-envelope-paper-fill"
                  title="Send E-mail"
                ></i>
              </a>
            </div>

            <div className="icon-box">
              <a
                target="blank"
                href="https://www.youtube.com/channel/UCnqvq7saWtrvkl9lhUF5PJw/about"
              >
                <i
                  className="bi bi-youtube"
                  title="View my YouTube Channel"
                ></i>
              </a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="col-md-8 col-sm-12  text-sm-center Address">
          <iframe
            title="map"
            className="img-fluid"
            src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=damascus+(Location)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
