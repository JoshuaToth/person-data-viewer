import * as React from 'react';

interface ISearchBarProps {};

interface ISearchBarState {};

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  render() {
    return (
      <h1>{'SearchBar'}</h1>
    );
  }
}
