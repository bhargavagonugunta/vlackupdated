import { Col, Container } from "react-bootstrap";
import React from "react";

const QuoteForm = () => {
  return (
    <Container>
      <Col
        xl={{ span: 7, offset: 5 }}
        lg={{ span: 8, offset: 4 }}
        md={{ span: 10, offset: 2 }}
      >
        <div className="contact__form contact__form-2">
          <h3>Quick-Start</h3>
          <h6 className={`mt-25`}>
            Ideal for rapid transformation of single business process or
            focussed areas with the advantage of pay as you go
          </h6>
          <div className={``}>
            <button type="submit" className="m-btn">
              1000 $
            </button>
          </div>

          <div className="mt-25 key__benefits-content">
            <ul>
              <li>Memorable designs that leave a lasting impression.</li>
              <li>
                A seamless experience for increased interaction and retention.
              </li>
              <li>
                Fostering recognition through designs aligned with your brand
                identity.
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default QuoteForm;
