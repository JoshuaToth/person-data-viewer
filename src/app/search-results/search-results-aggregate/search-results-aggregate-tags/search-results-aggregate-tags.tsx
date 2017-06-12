import * as React from 'react';

export const SearchResultsAggregateTags = (props) => {
  return (
    <div>
      <p>{props.tagName}. Count: {props.count}</p>
    </div>
  );
};
