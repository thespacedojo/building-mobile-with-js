import React from 'react';
import { IonIcon } from 'reactionic';

class Rating extends React.Component {
  constructor() {
    super();
    this.buildRatings = this.buildRatings.bind(this);
  }

  buildRatings() {
    let ratingArray = [];
    let num = Math.round(this.props.rating * 2)/2; // nearest .5 rating
    let rating = Math.round(this.props.rating);
    let diff = 5 - rating;
    for(i = 1; i < num; i++) {
      ratingArray.push('ios-star');
    }

    if ( rating - num != 0 ) {
      ratingArray.push('ios-star-half');
    }


    for(j = 1; j < diff; j++) {
      ratingArray.push('ios-star-outline');
    }
    return ratingArray;
  }

  render() {
    if (this.props.rating === 0) {
      return (
        <span>
          <span className="meta divider">|</span>
          <span>No Ratings</span>
        </span>
      )
    } else {
      return (
        <span>
          <span className="meta divider">|</span>
          <span className="meta stars">{this.buildRatings().map((rating, index) => {return <IonIcon key={index} icon={rating} />})}</span>
        </span>
      )
    }
  }
}

Rating.defaultProps = { rating: 0 }

export default Rating;
