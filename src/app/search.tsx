import * as React from 'react';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';
import { Grid } from 'react-bootstrap'


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
      <Grid>
        <SearchBar onSubmit={this.searchForSophia}/>
        <SearchResults onSubmit={this.searchForSophia} resultData={this.state.resultData}/>
      </Grid>
    );
  }
}
