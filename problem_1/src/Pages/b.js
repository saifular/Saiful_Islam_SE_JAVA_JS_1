import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import {Button,Container,Modal,Form} from "react-bootstrap";
class b extends Component {
    constructor() {
        super();
        this.state={

            addNewModalOpen:false
        }
    }
   
    addNewModalOpen=()=>{
        this.setState({addNewModalOpen:true});
    }
    addNewModalClose=()=>{
        this.setState({addNewModalOpen:false});
    }

    render() {
 
            return (
                <Fragment>
                    <Menu title="Home">
                        <Container className="text-center mt-5">
                      <Button className="text-center justify" onClick={this.addNewModalOpen}  >Add Product</Button>
                      </Container>
                    </Menu>
                    <Modal show={this.state.addNewModalOpen} onHide={this.addNewModalClose}>
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Product Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Product Price</Form.Label>
    <Form.Control type="text" placeholder="Product Price" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Product Percentage</Form.Label>
    <Form.Control type="text" placeholder="Product Percentage" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Product Type</Form.Label>
    <Form.Control type="text" placeholder="Product Type" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicFile">
    <Form.Label>Product Image</Form.Label>
    <Form.Control type="file" placeholder="Product Image" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.addNewModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                </Fragment>
            );
        


    }
}

export default b;