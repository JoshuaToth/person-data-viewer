import * as React from 'react';
import * as AggregateTags from './search-results-aggregate-tags/search-results-aggregate-tags'; // Rename to tag?
import * as SearchService from '../../search-service';
import { Grid, Col } from 'react-bootstrap'
import axios from 'axios';

import './search-results-aggregate.less';

export const SearchResultsAggregate = (props) => {  
  return (
    <Col xs={6} md={2} className="search-aggregate">
      <p>Tags: {props.tagAggs.buckets.length}</p>
      <Grid>
        {props.tagAggs.buckets.map(tag => <AggregateTags.SearchResultsAggregateTags addTag={props.addTag} tagName={tag.key} count={tag.doc_count} key={tag.key}/>)}
      </Grid>
    </Col>
  );
};
