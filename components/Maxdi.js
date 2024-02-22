import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from './SectionTitle';

const vlack = () => {
    return (
        <section className="vlack__area fix p-relative pt-115 pb-145">
                <div className="vlack__shape">
                    <img className="m-shape-1 d-none d-sm-block" src="/assets/images/shape/testimonials/t-shape-1.png" alt=""/>
                    <img className="m-shape-2" src="/assets/images/shape/testimonials/t-shape-2.png" alt=""/>
                    <img className="m-shape-3" src="/assets/images/shape/testimonials/t-shape-3.png" alt=""/>
                    <img className="m-shape-4" src="/assets/images/shape/testimonials/t-shape-4.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-110">
                        <Col xl={12}>
                            <div className="vlack__title text-center">
                                <SectionTitle subTitle="We Are Vlack"
                                titleFirst="We work to help your brand success"
                                /> 
                                <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                        
                        <Col xl={12}>
                            <div className="vlack__counter">
                                <div className="vlack__counter-content text-center">
                                    <h2>                                        
                                                                               
                                    </h2>
                                    <p></p>
                                </div>                                
                            </div>
                            <div className="vlack__counter vlack__counter-2">
                                <div className="vlack__counter-content vlack__counter-content-2 text-center">
                                    <h2>                                        
                                                                               
                                    </h2>
                                    <p></p>
                                </div>                                
                            </div>
                            <div className="vlack__content d-flex">
                                <div className="vlack__thumb-1">
                                    <img src="/assets/images/vlack/vlack-img-1.jpg" alt=""/>
                                </div>
                                <div className="vlack__thumb-2">
                                    <img src="/assets/images/vlack/vlack-img-2.jpg" alt=""/>
                                </div>                               
                                <div className="vlack__thumb-3">
                                    <img src="/assets/images/vlack/vlack-img-3.jpg" alt=""/>
                                </div>                               
                            </div>
                        </Col>                                            
                    </Row>
                </Container>
            </section>
    );
};

export default vlack;