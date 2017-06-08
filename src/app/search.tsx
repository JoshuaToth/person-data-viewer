import * as React from 'react';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';

interface ISearchProps {};

interface ISearchState {};

export class Search extends React.Component<ISearchProps, ISearchState> {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
