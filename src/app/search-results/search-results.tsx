import * as React from 'react';
import * as Aggregate from './search-results-aggregate/search-results-aggregate';
import * as Person from './search-results-person/search-results-person'
import { Row, Col } from 'react-bootstrap'

export const SearchResults = (props) => {
  // Be nice to revist the tag aggregations with morelike, and get rid of the check.
  return (
    <div>
      <Row className="show-grid">
        {props.resultData.aggregations ?
          <Aggregate.SearchResultsAggregate onSubmit={props.onSubmit} addTag={props.addTag} tagAggs={props.resultData.aggregations.tagAggs as any}/>
        : <Col md={2}></Col>
        }
        <Person.SearchResultsPerson onSubmit={props.onSubmit} persons={props.resultData.hits.hits} total={props.resultData.hits.total}/>
      </Row>
      <Row>
        {props.resultData.hits.total ? <button onClick={() => {props.loadMore(props.resultData.hits.hits.length)}} className="btn btn-primary btn-block">Load More</button>: ""}
      </Row>
    </div>
  );
}
