import * as React from 'react';
import * as AggregateTags from './search-results-aggregate-tags/search-results-aggregate-tags'; // Rename to tag?
import { Grid, Col } from 'react-bootstrap'
import axios from 'axios';

import './search-results-aggregate.less';

interface ISearchAggregateProps {
  onSubmit: {(data):void},
  tagAggs: any
};

interface ISearchBarAggregateState {};

export class SearchResultsAggregate extends React.Component<ISearchAggregateProps, ISearchBarAggregateState> {
  aggregateSearch = (key) => {
    axios.post(`http://localhost:8080/api/person/search`, {
      name: {
        firstName: "",
        lastName: ""
      },
      tags: [key]
    })
    .then(resp => {
      console.log(this.props);
      this.props.onSubmit(resp.data);
    });
  };
  
  render() {
    return (
      <Col xs={6} md={2} className="search-aggregate">
        <p>Tags: {this.props.tagAggs.buckets.length}</p>
        <Grid>
          {this.props.tagAggs.buckets.map(tag => <AggregateTags.SearchResultsAggregateTags returnFn={this.aggregateSearch} tagName={tag.key} count={tag.doc_count} key={tag.key}/>)}
        </Grid>
      </Col>
    );
  }
};
