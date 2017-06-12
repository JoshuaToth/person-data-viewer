import * as React from 'react';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';


interface ISearchProps {};

interface ISearchState {
  resultData: {}
};

export class Search extends React.Component<ISearchProps, ISearchState> {

  searchForSophia = (data) => {    
      this.setState({resultData: data});
  };

  state = {
    resultData: {
      hits: {
        hits: []
      },
      aggregations: {
        tagAggs: {
          buckets: []
        }
      }
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.searchForSophia}/>
        <SearchResults resultData={this.state.resultData}/>
      </div>
    );
  }
}
