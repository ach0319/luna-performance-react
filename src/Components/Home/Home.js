import React from "react";
import image3 from "../Images/image3.png";
import OwlCarousel from "react-owl-carousel";
import TestiMonialDetails from "../Testimonials/testimonialdetails";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Testimonials/testimonials.css";
import image1 from "../Images/image1.jpeg";
import "../Home/home.css";

const TestiMonials = () => {
  const testiMonials = [
    {
      name: "David Scott",
      description:
        "Great work great turn around highly recommened. For all powder coat needs",
      img: "https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png",
    },
    {
      name: "Destynee Wilber",
      description:
        "Awesome company. Quick turn around time. Great work. Highly recommend",

      img: "https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png",
    },
    {
      name: "Olivia Jeffers",
      description:
        "Manny went above and beyond making sure I had the correct color I wanted to powder coat my bike. Never once complained my bike was a pain to take apart and put back together. Ill definitely be sending my buddies his way",
      img: "https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const mystyle = {
    backgroundImage: `url(${image3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 15px",
    backgroundColor: "#0D0106",
  };
  return (
    <div className="carousel-container" style={mystyle}>
      <div className="carousel">
      <div className="elfsight-app-b80d4582-8e68-4227-9a26-36ba0ef079a5"/>
      </div>
      <section id="testimonial" className="testimonials pt-70 pb-70">
        <div className="container mt-5">
          <h4 className="miniTitle text-center">TESTIMONIALS FROM CUSTOMERS</h4>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {testiMonials.length === 0 ? (
                  <div class="item">
                    <div class="shadow-effect">
                      <img class="img-circle" src={image1} />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                    <div class="testimonial-name">
                      <h5>Rajon Rony</h5>
                    </div>
                  </div>
                ) : (
                  testiMonials.map((testiMonialDetail) => {
                    return (
                      <TestiMonialDetails
                        testiMonialDetail={testiMonialDetail}
                        key={testiMonialDetail._key}
                      />
                    );
                  })
                )}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestiMonials;


