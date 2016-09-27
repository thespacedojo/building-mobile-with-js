import React from 'react';

class Distance extends React.Component {
  render() {
    return (
      <span>
        <span className="meta divider">|</span>
        <span>{this.props.distance.toFixed(2)} miles</span>
      </span>
    )
  }
}

Distance.defaultProps = { distance: 0 }

export default Distance;
