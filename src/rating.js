import React, {Component} from 'react';

import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
  onStarClick(nextvalue) {
    this.setState({rating:nextvalue});
    this.props.searchrating1(nextvalue);
  }
 
 

 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
       
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 export default Rating;