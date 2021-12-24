import OwlCarousel from "react-owl-carousel";
import React from "react";
import TestiMonialDetails from "../Testimonials/testimonialdetails";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Testimonials/testimonials.css";
import image1 from "../Images/image1.jpeg";

const TestiMonials = () => {
  const testiMonials = [
    {
      name: "David Scott",
      description:
        "Great work great turn around highly recommened. For all powder coat needs",
      img: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.18172-8/25790776_1980096192005973_6705608775709281369_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=t2kn3SMBUxIAX9Wa_YL&_nc_ht=scontent-ort2-2.xx&oh=00_AT_KHdMUHF9kI1ULoL67UwjYmZlbv4SLhB4URwYdheSKnA&oe=61E66FC0",
    },
    {
      name: "Destynee Wilber",
      description:
        "Awesome company. Quick turn around time. Great work. Highly recommend",
      img: "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/259907592_4440571476062158_8453329618561622889_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=be7RXWPmm8cAX82eKCT&_nc_ht=scontent-ort2-2.xx&oh=00_AT-EMQAkq0HlhR-LAi5MemNwYoLC8-0m_z8YOX1r9j6ykg&oe=61C6ED29",
    },
    {
      name: "Olivia Jeffers",
      description:
        "Manny went above and beyond making sure I had the correct color I wanted to powder coat my bike. Never once complained my bike was a pain to take apart and put back together. Ill definitely be sending my buddies his way",
      img: "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/249244233_10225016228620366_1881172058847603535_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pXhn7BDofEYAX-v9pbB&_nc_ht=scontent-ort2-2.xx&oh=00_AT-U-DD6BpRS_zgN2Yi6h-EiP0bCUm4fs_S3vFAjz-3Wkw&oe=61C61209",
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
  return (
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
  );
};

export default TestiMonials;
