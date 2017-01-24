import React from 'react';

const card = (props) => (
  <div className="tc bg-light-green dib pa2 ma2 br3 grow">
    <img src={'http://robohash.org/' + props.id + '/?size=200x200'} role="presentation"/>
    <div className="f3">{props.name}</div>
    <div>{props.email}</div>
  </div>
);

card.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired
}

export default card
