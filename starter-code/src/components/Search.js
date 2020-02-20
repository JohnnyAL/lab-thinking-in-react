import React, { Component } from 'react';

// const Search = props => {
//   handleChange = event => {
//     console.log('SEARCHBAR: ', event.target.value);
//     props.updateSearchText(event.target.value);
//   };

//   return (
//     <div>
//       <input value={props.search} onChange={handleChange} />
//     </div>
//   );
// };

const Search = props => {
  return (
    <div>
      <input
        value={props.search}
        onChange={event => {
          props.updateSearchText(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
