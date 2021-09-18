import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Card, Col, Container, Row} from "react-bootstrap";
class a extends Component {


    render() {



      
            return (
                <Fragment>
                    <Menu title="Home">
                        <Container fluid={true}>
                            <Row>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                          
                                            <h5 className="des-text">Total Product </h5>
                                            <h5 className="des-text">100</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                      
                                            <h5 className="des-text">Total Sold Product</h5>
                                            <h5 className="des-text">100</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                     
                                            <h5 className="des-text">Most Profitable Product</h5>
                                            <h5 className="des-text">Ram</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                        
                                            <h5 className="des-text">Total RAM</h5>
                                            <h5 className="des-text">100</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                        
                                            <h5 className="des-text">MOTHERBOARD</h5>
                                            <h5 className="des-text">100</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                          
                                            <h5 className="des-text">GRAPHICS CARD</h5>
                                            <h5 className="des-text">100</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>

                    </Menu>
                </Fragment>
            );
        


    }
}

export default a;
