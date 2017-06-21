import * as React from 'react';

export const SearchResultsAggregateTags = (props) => {
  return (
    <div>
      {
        props.searchedTags.indexOf(props.tagName) < 0
      ? <p><a onClick={() => {props.addTag(props.tagName)}} href="#">{props.tagName} ✔</a> ({props.count})</p>
      : <p><a onClick={() => {props.removeTag(props.tagName)}} href="#">{props.tagName} ✘</a> ({props.count})</p>
      }
    </div>
  );
};
