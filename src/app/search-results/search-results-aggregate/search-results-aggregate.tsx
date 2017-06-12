import * as React from 'react';
import * as AggregateTags from './search-results-aggregate-tags/search-results-aggregate-tags'; // Rename to tag?
import { Col } from 'react-bootstrap'

export const SearchResultsAggregate = (props) => {
  return (
    <Col xs={6} md={4}>
      <p>Tags: {props.tagAggs.buckets.length}</p>
      {props.tagAggs.buckets.map(tag => <AggregateTags.SearchResultsAggregateTags tagName={tag.key} count={tag.doc_count} key={tag.key}/>)}
    </Col>
  );
};
