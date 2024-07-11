import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Skills: React.FC = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I build user-friendly websites that look great on any device! I
                use cool tools like <b>React</b> to make them dynamic and <b>testing
                frameworks</b> to keep them smooth. My skills go beyond frameworks -
                I'm a whiz with <b>JavaScript</b> for interactivity, <b>CSS magic</b> for
                styling, and an eye for user experience. While I love <b>React</b>, I
                can also work with other tools like <b>Angular</b> I'm curious
                about DevOps and learning new things like version control with
                Git and tools for easier project management.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="React Dev" />
                  <h5>React Dev</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Angular Dev" />
                  <h5>Angular Dev</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Testing" />
                  <h5>Testing</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Responsive Web" />
                  <h5>Responsive Web</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
