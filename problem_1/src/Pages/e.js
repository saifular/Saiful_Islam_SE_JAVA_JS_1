import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import Menu from '../components/Menu';
class b extends Component {
  
   

    

    render() {
 
            return (
                <Fragment>
                    <Menu title="Home">
                        <Container className="text-center mt-5">
                        Name: Saiful Islam<br/>
                        Phone: 01717130337<br/>
                        Email: byteroni@gmail.com<br/>
                        Address: 68/1 Kadamtola,Basabo,Dhaka-1214<br/>
                      </Container>
                    </Menu>
              
   
                </Fragment>
            );
        


    }
}

export default b;