import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Background from '../Images/Background.jpg';
import Menu from '../components/Menu';
class d extends Component {


   
    render() {
        return (
            <Fragment>
                <Menu>
                <Container className="TopSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form id="signupForm" className="onboardForm" onSubmit={this.onFormSubmit}>
                                        <h4 className="section-title">ADMIN LOGIN</h4>
                                        <h6 className="section-sub-title">Please Enter Your User Name,Password</h6>
                                        <input onChange={this.user_nameOnChange} className="form-control m-2" type="text" placeholder="User Name"/>
                                        <input onChange={this.passwordOnChange} className="form-control m-2" type="password" placeholder="Password"/>
                                        <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn">ADMIN LOGIN</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={Background}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
         
        
       
                </Menu>
            </Fragment>
        );
    }
}

export default d;