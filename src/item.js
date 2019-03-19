import React, {Component} from 'react';
import {Card,CardImg,CardBody} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

import './item.css';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
      const {item} =this.props
        return ( 
        <div className='item'>
   
      <div className="use-card">
      <div className="use-card1">
      <Card style={{ width: '18rem' }}>
  <CardImg variant="top"  src={item.article} />
  <CardBody>
    
    <h3>
    {item.title}

    </h3>
  <h3>
  <StarRatingComponent 
          name="rate1" 
          starCount={10}
         value= {item.rating}
         
        />
  </h3>
  
  </CardBody>
</Card>;
</div>

</div>




       </div>);
        
    }
}
 
export default Item;