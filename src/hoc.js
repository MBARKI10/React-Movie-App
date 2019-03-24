import React, { Component } from 'react';
import Spinner from './spinner';
import './hoc.css';

const Hoc = (WrappedComponent) =>  {
    return class Hoc extends Component{ 
     render() { 
        return ( 
            this.props.isLoading  ? <Spinner/> : <WrappedComponent {... this.props}/>
         );
    }
}
}
export default Hoc;