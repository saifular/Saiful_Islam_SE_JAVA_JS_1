import React, {Component, Fragment} from 'react';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {Button,Modal,Form} from "react-bootstrap";
import Menu from '../components/Menu';
class c extends Component {
   
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
  
     
      
 
    imgCellFormat(cell,row){
        return(
            <img style={{width:"60px",height:"auto"}} src={"http://127.0.0.1:8000/storage/"+cell}/>
        )
        }



    render() {
        const data =[{id:'1',name:'Ram',price:'1000',percentage:'20%',type:'Electronies'}];
        const columns=[
            {dataField: 'id', text: 'ID'},
            {dataField: 'name', text: 'Product_Name'},
            {dataField: 'price', text: 'Product Price'},
            {dataField: 'percentage', text: 'Product_Percentage'},
            {dataField: 'type', text: 'Product_Type'},
        ]
        const selectRow={
            mode:'radio',
            onSelect:(row,isSelect,rowIndex)=>{
                this.setState({rowDataID:row['id']})
                
            }
        }
        return (
            <Fragment>
                <Menu >
                    <button style={{marginLeft:"20px"}}  className="normal-btn  my-2 btn">Delete</button>
                    <button onClick={this.addNewModalOpen} style={{marginLeft:"20px"}}  className="normal-btn  my-2 btn">Edit</button>
                    <BootstrapTable
                                                keyField='id'
                                                data={ data }
                                                columns={ columns }
                                                selectRow={selectRow}
                                                pagination={ paginationFactory()}
                                                >
                
                             
                             
                                               </BootstrapTable>
                          
                            </Menu>
                            <Modal show={this.state.addNewModalOpen} onHide={this.addNewModalClose}>
                               <Modal.Header>
                               <Modal.Title>Update Product</Modal.Title>
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

export default c;
