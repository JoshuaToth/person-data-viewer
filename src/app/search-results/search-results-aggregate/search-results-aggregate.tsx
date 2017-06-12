import * as React from 'react';
import * as AggregateTags from './search-results-aggregate-tags/search-results-aggregate-tags'; // Rename to tag?
export const SearchResultsAggregate = (props) => {
  return (
    <div>
      <p>Tags: {props.tagAggs.buckets.length}</p>
      {props.tagAggs.buckets.map(tag => <AggregateTags.SearchResultsAggregateTags tagName={tag.key} count={tag.doc_count} key={tag.key}/>)}
    </div>
  );
};
