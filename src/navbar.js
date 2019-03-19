import React, {Component} from 'react';
import {Navbar,Button,Form,FormControl,Nav} from 'react-bootstrap';
import Rating from './rating';


class Nave extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          keyword:''
         }
    }
    handelchange=(event)=>{
        this.setState({keyword:event.target.value})
        this.props.searchname(event.target.value)
    }
    render() { 
       
        return ( 

<div className="use-nav" r>
<Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">MOVIE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
<Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#link">Link</Nav.Link>
 <Rating searchrating1={val=>this.props.searchrating1(val)} />
</Nav>
  <Form inline>
    <FormControl type="text" placeholder="Type Movie Name To Search" className="mr-sm-2" onChange={this.handelchange} />
    {this.state.keyword}
    <Button variant="outline-success">Search</Button>
  </Form>
  </Navbar.Collapse> 
</Navbar>


</div>);
        
}
}

export default Nave