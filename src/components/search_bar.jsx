import React, {Component} from 'react';

class SearchBar extends Component {
  handleEvent = (event) => {
    return this.props.search(event.target.value)
  }

  render = () => {
    return (
      <input type="text" className="form-search" onChange={this.handleEvent}/>
    )
  };
}


export default SearchBar;
