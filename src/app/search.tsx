import * as React from 'react';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';

import axios from 'axios';

interface ISearchProps {};

interface ISearchState {};

export class Search extends React.Component<ISearchProps, ISearchState> {

  searchEvent = (event) => {0
    axios.post(`http://localhost:8080/api/person/search`, {
      name: {
        firstName: "Sophia",
        lastName: ""
      },
      tags: []
    })
    	.then(resp => {
        console.log(resp);
      });
  };

  render() {
    this.searchEvent({});
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
