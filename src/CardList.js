import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => (
  <div>
    { robots.map(robot => (
      <Card key={robot.id.toString()}
            id={robot.id.toString()}
            name={robot.name}
            email={robot.email}
      />
    ))}
  </div>
);

CardList.propTypes = {
  robots: React.PropTypes.array.isRequired
}

export default CardList
