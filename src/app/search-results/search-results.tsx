import * as React from 'react';
import * as Aggregate from './search-results-aggregate/search-results-aggregate';
import * as Person from './search-results-person/search-results-person'
import { Row } from 'react-bootstrap'


interface ISearchResultsProps {};

interface ISearchResultsState {};

export const SearchResults = (props) => {
  return (
    <Row className="show-grid">
      <Aggregate.SearchResultsAggregate onSubmit={this.searchForSophia} tagAggs={props.resultData.aggregations.tagAggs as any}/>
      <Person.SearchResultsPerson onSubmit={this.searchForSophia} persons={props.resultData.hits.hits} total={props.resultData.hits.total}/>
    </Row>
  );
}
