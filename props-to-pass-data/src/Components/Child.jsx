import React from 'react';

const Child = (props) => {
  return (
    <div>
      <p><strong>Name:</strong> {props.user.name}</p>
      <p><strong>Age:</strong> {props.user.age}</p>
      <p><strong>City:</strong> {props.user.city}</p>
      <p><strong>Profession:</strong> {props.user.profession}</p>
    </div>
  );
};

export default Child;
