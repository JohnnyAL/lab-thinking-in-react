import React, { Component } from 'react';
import ProductTable from './ProductTable';
import Search from './Search';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    searchText: ''
  };

  updateSearchText = text => {
    console.log(text);
    this.setState({
      searchText: text
    });
  };

  render() {
    return (
      <div>
        <Search
          updateSearchText={this.updateSearchText}
          search={this.state.searchText}
        />
        <ProductTable
          products={this.state.products}
          search={this.state.searchText}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
