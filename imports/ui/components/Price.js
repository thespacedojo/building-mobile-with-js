import React from 'react';

class Price extends React.Component {
  render() {
    let priceString = "No pricing";
    if (this.props.price > 0) {
      let times = new Array(this.props.price);
      priceString = times.fill("$");
    }
    return <span>{priceString}</span>
  }
}

Price.defaultProps = { price: 0 }

export default Price;
