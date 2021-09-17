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
                                      
                                            <h5 className="des-text">Total Contact</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                     
                                            <h5 className="des-text">Total Order</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                        
                                            <h5 className="des-text">Total Category</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                        
                                            <h5 className="des-text">Total SubCategory</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                          
                                            <h5 className="des-text">Total ClientReview</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                       
                                            <h5 className="des-text">Total Slider</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                       
                                            <h5 className="des-text">Total ProductDetails</h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="p-2" md={3} log={3} sm={6}>
                                    <Card className="card">
                                        <Card.Body>
                                           
                                            <h5 className="des-text">Total User</h5>
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
