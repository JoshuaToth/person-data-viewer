import * as React from 'react';

export const SearchResultsAggregateTags = (props) => {
  return (
    <div>
      <p>{props.tagName} ({props.count})</p>
    </div>
  );
};
