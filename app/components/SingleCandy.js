import React from 'react';
import {connect} from 'react-redux';

const SingleCandy = (props) => {
  return (
    <div>
      <h1>Candy Name: {props.name} </h1>
      <p>Description</p>
      <p>{props.description}</p>
      <h2>Quantity: {props.quantity}</h2>
      <img src={props.imageUrl} />
    </div>
  )
}

export default SingleCandy;
