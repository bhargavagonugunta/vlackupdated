import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";

const SERVICE_DATA = [
  {
    serviceIcon: "/assets/images/icon/s-icon-1.png",
    serviceTitle: "UI/UX Design",
    serviceDesc:
      "Define clear boundaries for quick wins in UI/UX. With a full workload, streamline processes, gain alignment, and focus on lean strategies to future-proof our design plan.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-2.png",
    serviceTitle: "Web Development",
    serviceDesc:
      "Establish a clear direction for quick wins in web development. With a full workload, prioritize efficiency, achieve alignment, and implement lean practices to future-proof our development plan.\n",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-3.png",
    serviceTitle: "App Development",
    serviceDesc:
      "Cross-Platform App Development: Whether it's Android, iOS, or Windows, we design and develop applications that resonate across all platforms.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-4.png",
    serviceTitle: "Digital Marketing",
    serviceDesc:
      "Revolutionize your brand's online presence with our comprehensive digital marketing solutions. We specialize in leveraging cutting-edge strategies to boost visibility, engage target audiences, and drive results.\n",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-5.png",
    serviceTitle: "Content Writing",
    serviceDesc:
      "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-6.png",
    serviceTitle: "E-commerce",
    serviceDesc:
      "Revolutionize your online business with Vlack Solutions' bespoke e-commerce solutions. Our team specializes in creating dynamic, secure, and user-friendly online platforms that seamlessly integrate with your brand. From intuitive navigation to robust payment gateways..",
    serviceLink: "/services-details",
  },
];

const Services = ({ extraClass }) => {
  return (
    <section
      className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}
    >
      <div className="services__shape">
        <img
          className="services-s-1"
          src="/assets/images/shape/services/services-s-1.png"
          alt=""
        />
        <img
          className="services-s-2"
          src="/assets/images/shape/services/services-s-2.png"
          alt=""
        />
        <img
          className="services-s-3"
          src="/assets/images/shape/services/services-s-3.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-55">
          <Col xl={6}>
            <div className="services__title">
              <SectionTitle subTitle="Services" titleFirst="What we do" />
            </div>
          </Col>
        </Row>
        <Row>
          {SERVICE_DATA.map(
            (
              { serviceIcon, serviceTitle, serviceDesc, serviceLink },
              index,
            ) => (
              <ServiceItem
                key={index}
                serviceIcon={serviceIcon}
                serviceTitle={serviceTitle}
                serviceDesc={serviceDesc}
                serviceLink={serviceLink}
              />
            ),
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
