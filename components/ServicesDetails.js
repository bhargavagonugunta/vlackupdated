import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from "./ServiceSidebar";

const ServicesDetails = () => {
  return (
    <section className="services__details p-relative pt-120 pb-230">
      <div className="services__details-shape">
        <img
          className="s-details-s-1"
          src="assets/images/shape/services/s-details-s-1.png"
          alt=""
        />
        <img
          className="s-details-s-2 d-none d-sm-block"
          src="assets/images/shape/services/s-details-s-2.png"
          alt=""
        />
        <img
          className="s-details-s-3"
          src="assets/images/shape/services/s-details-s-3.png"
          alt=""
        />
      </div>
      <Container>
        <Row>
          <Col xl={4} lg={{ span: 4, order: "first" }} xs={{ order: "last" }}>
            <ServiceSidebar />
          </Col>
          <Col xl={8} lg={8}>
            <div className="services__details-thumb mb-60">
              <img
                src="assets/images/services-details/s-details-img.jpg"
                alt=""
              />
            </div>
            <div className="services__details-content">
              <h2>Web Development</h2>
              <p>
                Transform your online presence with Vlack Solutions expert web
                development services. Our team crafts dynamic, visually striking
                websites that seamlessly blend form and function. From sleek
                corporate platforms to robust e-commerce solutions, we
                prioritize user-centric experiences, ensuring your digital
                presence stands out in todays competitive landscape.
              </p>
              <p>
                Kindling the energy hidden in matter the only home we&apos;ve
                ever known radio telescope decipherment descended from
                astronomers rogue. Prime number network of wormholes take root.
                Matter the only home we&apos;ve ever known radio telescope
                decipherment descended from astronomers rogue. Prime number
                network of wormholes take root. Kindling the energy hidden in
                matter the only home we&apos;ve ever known radio telescope
                decipherment descended from astronomers rogue. Prime number
                network of wormholes take root. Matter the only home we&apos;ve
                ever known radio telescope decipherment descended from
                astronomers rogue. Prime number network of wormholes take root.
              </p>
              <div className="key__factors">
                <div className="key__factors-title">
                  <h3>Key Factors</h3>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Cutting-Edge Technologies</h5>
                      <p>
                        Employing the latest tech for innovative and responsive
                        websites.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-chart-bar"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>User-Centric Approach</h5>
                      <p>
                        Prioritizing intuitive navigation and engaging user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-unlock-keyhole"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Comprehensive Expertise:</h5>
                      <p>
                        Covering diverse web development needs for various
                        industries
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Annual Report</h5>
                      <p>
                        Energy only home we&apos;ve ever known deciphe scended
                        from rogue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="key__benefits">
                <div className="key__benefits-title">
                  <h3>Key Benefits</h3>
                </div>
                <div className="key__benefits-content">
                  <ul>
                    <li>Memorable designs that leave a lasting impression.</li>
                    <li>
                      A seamless experience for increased interaction and
                      retention..
                    </li>
                    <li>
                      Fostering recognition through designs aligned with your
                      brand identity.
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Empower your business with our innovative app development
                services. We specialize in turning your ideas into functional
                and user-friendly mobile applications. From sleek consumer apps
                to robust enterprise solutions, our experienced team utilizes
                cutting-edge technologies to bring your vision to life. Elevate
                your brand's accessibility and user engagement with Vlack
                Solutions as your trusted app development partner.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesDetails;
