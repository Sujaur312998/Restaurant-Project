import React,{Component} from "react"
import { Navbar, NavbarBrand, Nav, NavItem,Collapse, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom'
class Navigation extends Component {
    state={
        isToggled: false
    }
    isToggled=()=>{
        this.setState({
            isToggled: !this.state.isToggled
        })
    }
    render() {
        return(
            <div>
                <Navbar dark  color="dark" expand='sm'>
                    <div className="container"> 
                        <NavbarBrand href="/">Restarant Project</NavbarBrand>
                        <Nav className='ml-auto' navbar>
                        <NavbarToggler onClick={this.isToggled}/>
                        <Collapse isOpen={this.state.isToggled} navbar >
                            <NavItem>
                                <Link to='/' className='nav-link action'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/menu' className='nav-link '>Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/about' className='nav-link'>About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/contact' className='nav-link '>Contact</Link>
                            </NavItem>
                        </Collapse>
                        
                        

                    </Nav>
                    </div>
                    
                </Navbar>
            </div>
        )
    }
    
}
export default Navigation