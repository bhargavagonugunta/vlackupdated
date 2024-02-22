import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const About = ({ subTitle, titleFirst, titleSecond }) => {
  return (
    <section className="about__area fix p-relative pt-120 pb-120 about__pb">
      <Container>
        <Row>
          <Col xxl={7} xl={8} lg={10} md={10}>
            <div className="about__title mb-80">
              <SectionTitle
                subTitle={subTitle}
                titleFirst={titleFirst}
                titleSecond={titleSecond}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="about__thumb">
              <div className="about__thumb-shape">
                <img
                  className="about-s-1 d-none d-lg-block"
                  src="/assets/images/shape/about/about-s-1.png"
                  alt=""
                />
                <img
                  className="about-s-2 d-none d-md-block"
                  src="/assets/images/shape/about/about-s-2.png"
                  alt=""
                />
              </div>
              <div className="about__thumb-image">
                <img src="/assets/images/about/about-img.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={6}>
            <div className="about__content">
              <p>
                Were not just developers were architects of digital excellence.
                Specializing in software development, our dedicated team crafts
                bespoke Android and iOS applications, as well as dynamic
                websites that seamlessly blend creativity with functionality.
                With a passion for precision, we extend our expertise to brand
                marketing, ensuring that your Windows and iOS applications reach
                their full potential.
              </p>
              <ul>
                <li>Sea of Tranquility dispassionate observer dream.</li>
                <li>
                  Muse about as a patch of light brain is the seed of
                  intelligence.
                </li>
                <li>The only home we`ve ever known dream of the mind`s eye.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
