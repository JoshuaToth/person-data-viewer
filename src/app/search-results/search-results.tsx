import * as React from 'react';
import * as Aggregate from './search-results-aggregate/search-results-aggregate';
import * as Person from './search-results-person/search-results-person'


interface ISearchResultsProps {};

interface ISearchResultsState {};

export const SearchResults = (props) => {
  return (
    <div>
      <Aggregate.SearchResultsAggregate />
      <Person.SearchResultsPerson persons={props.resultData.hits.hits}/>
    </div>
  );
}
