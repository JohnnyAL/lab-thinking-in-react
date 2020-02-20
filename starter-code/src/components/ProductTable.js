import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products
            .filter(product => {
              return product.name
                .toLowerCase()
                .includes(this.props.search.toLowerCase());
            })
            .map(product => {
              return (
                <tr>
                  <ProductRow product={product} />
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
