import React, { Component } from 'react';

const ProductRow = props => {
  return (
    <>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </>
  );
};

export default ProductRow;
