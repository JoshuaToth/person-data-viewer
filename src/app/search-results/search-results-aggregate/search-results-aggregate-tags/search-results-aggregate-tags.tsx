import * as React from 'react';

export const SearchResultsAggregateTags = (props) => {
  return (
    <div>
      <p><a onClick={() => {props.returnFn(props.tagName)}} href="#">{props.tagName}</a> ({props.count})</p>
    </div>
  );
};
