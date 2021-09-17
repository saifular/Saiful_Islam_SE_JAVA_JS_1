import React, {Component, Fragment} from 'react';
import {Navbar,NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHome,faEnvelope,faFolder,faComment,faPowerOff, faShoppingBasket, faShoppingBag, faSlidersH, faShoppingCart, faUser, faMale} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class Menu extends Component {

    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            NavText:"d-none",
            mainDivOverlay:"main-overlay-close"
        }

        this.showHideSideNav=this.showHideSideNav.bind(this);
    }


    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }
  


    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar  expand="lg" className="fixed-top shadow-sm bg-white mb-5 py-3" variant="light" bg="white">
                    <Navbar.Brand onClick={this.showHideSideNav}  href="#"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <b>ADMIN DASHBOARD</b>
                </Navbar>

                <div className={this.state.sideNavClass}>
                <NavLink> <Link className="NavItem" to="home"> <FontAwesomeIcon icon={faHome} /> <span className={this.state.NavText}>Home</span> </Link></NavLink>
                 
                </div>
                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>

                <div className="mainDiv">
                    {this.props.children}
                </div>


            </Fragment>
        );
    }
}

export default Menu;
