import * as React from 'react';
import './search-bar-tag.less';
import { Col } from 'react-bootstrap'

export const SearchBarTag = (props) => {
  return (
    <div className="search-bar-tag" >
      <button type="button" onClick={() => {props.removeTag(props.tagName)}} className="btn btn-success"><i className="fa fa-window-close" aria-hidden="true"></i>  {props.tagName}</button>
    </div>
  );
};
