import * as React from 'react';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';

import './search-bar.less';
import * as SearchService from '../search-service';
import * as SearchBarTag from './search-bar-tag/search-bar-tag';

interface ISearchBarProps {
  onSubmit: {(data):void},
  tags: string[],
  searchTerm: string,
  removeTag: {(data):void}
};

interface ISearchBarState {};

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  handleSubmit = (event) => {
    event.preventDefault();    
    this.props.onSubmit(this.state.searchTerm);
  }

  state = {
    searchTerm: ""
  };
  
  render() {
    return (      
      <Row className="search-bar">
        <Col>
          <Row>
            <form className="search-input" onSubmit={this.handleSubmit}>            
              <input type="text" 
                value={this.state.searchTerm}
                onChange={(event) => this.setState({ searchTerm: event.target.value})}
                placeholder="Search" />
            </form>
          </Row>
          <Row className="search-bar-tags">
            {this.props.tags.map(tag => <SearchBarTag.SearchBarTag removeTag={this.props.removeTag} tagName={tag} key={tag}/>)}
          </Row>
        </Col>
      </Row>
    );
  }
}
