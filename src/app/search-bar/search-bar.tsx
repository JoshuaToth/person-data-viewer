import * as React from 'react';
import axios from 'axios';


interface ISearchBarProps {
  onSubmit: {(data):void}
};

interface ISearchBarState {};

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/person/search`, {
      name: {
        firstName: "Sophia",
        lastName: ""
      },
      tags: []
    })
    	.then(resp => {
        console.log(resp);
        this.props.onSubmit(resp.data);
      });
  }
  
  render() {
    return (      
      <div>
        <h1>{'SearchBar'}</h1>
        <form onSubmit={this.handleSubmit}>
          <button type="Submit">search</button>
        </form>
      </div>
    );
  }
}
