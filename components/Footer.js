import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer__area fix p-relative pt-200 pb-60">
        <div className="footer__shape">
          <img
            className="footer-shape-1"
            src="/assets/images/shape/footer/footer-s-1.png"
            alt=""
          />
          <img
            className="footer-shape-2"
            src="/assets/images/shape/footer/footer-s-2.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="mb-145">
            <Col xxl={6} xl={7} lg={8} md={10}>
              <div className="footer__newsletter">
                <SectionTitle
                  subTitle="Join Our Community"
                  titleFirst="Subscribe for newsletter"
                />
              </div>
            </Col>
            <Col xxl={{ span: 5, offset: 1 }} xl={5} lg={4} md={4}>
              {/*<div className="footer__subscribe">*/}
              {/*  <form action="#">*/}
              {/*    <div className="footer__subscribe-input">*/}
              {/*      <div className="form-group">*/}
              {/*        <input*/}
              {/*          type="email"*/}
              {/*          className="form-control"*/}
              {/*          placeholder="Email address"*/}
              {/*        />*/}
              {/*      </div>*/}
              {/*      <button type="submit">Subscribe</button>*/}
              {/*    </div>*/}
              {/*  </form>*/}
              {/*</div>*/}
            </Col>
          </Row>
          <Row className="mb-50">
            <Col xl={4} lg={4} md={10} sm={10}>
              <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                <div className="footer__widget-logo">
                  <Link href="/">
                    <a>
                      <h4 className={`section__sub-title`}>
                        Vlack Solutions Private Limited
                      </h4>
                    </a>
                  </Link>
                </div>
                <div className="footer__widget-social">
                  <Link href="https://x.com/Vlacksolutions?t=JOWQSuYrzbMmbKaHSXp2xA&s=09">
                    <a>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </Link>
                  <Link href="https://x.com/Vlacksolutions?t=JOWQSuYrzbMmbKaHSXp2xA&s=09">
                    <a>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={2} md={4} sm={6}>
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h5>Our Services</h5>
                </div>
                <div className="footer__widget-link">
                  <ul>
                    <li>
                      <Link href="/services-details">
                        <a>Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <a>marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <a>UI/UX Design</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms">
                        <a>Terms And Conditions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={2} md={4} sm={6}>
              <div className="footer__widget footer__widget-mt-2">
                <div className="footer__widget-title">
                  <h5>Company</h5>
                </div>
                <div className="footer__widget-link">
                  <ul>
                    <li>
                      <Link href="/about">
                        <a>About us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <a>Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/refund-policy">
                        <a>Refund & Cancellation Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={10}>
              <div className="footer__widget footer__widget-mt">
                <div className="footer__widget-title">
                  <h5>Stay Connected</h5>
                </div>
                <div className="footer__widget-info">
                  <div className="footer__widget-address">
                    <p>
                      Plot No 60, Road No: 5, Ayyappa Housing Society, Madhapur,
                      Telangana 500081
                    </p>
                  </div>
                  <div className="footer__widget-phone d-flex align-items-center">
                    <i className="fa-solid fa-phone"></i>
                    <p>
                      <Link href="tel:+919392245979">
                        <a>+91 9392 245 979</a>
                      </Link>
                    </p>
                  </div>
                  <div className="footer__widget-email d-flex align-items-center">
                    <i className="fa-solid fa-paper-plane"></i>
                    <p>
                      <Link href="mailto:contact@vlacksolutions.com">
                        <a>contact@vlacksolutions.com</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="footer__copyright">
                <p>
                  Copyright © 2024
                  <Link href="https://vlacksolutions.com/">
                    <a>Vlack solutions</a>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
