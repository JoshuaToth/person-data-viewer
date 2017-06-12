import * as React from 'react';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';

import './search-bar.less';
import * as SearchService from '../search-service';

interface ISearchBarProps {
  onSubmit: {(data):void}
};

interface ISearchBarState {};

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  handleSubmit = (event) => {
    event.preventDefault();
    var searchObj = {
      name: {
        firstName: this.state.searchTerm,
        lastName: ""
      },
      tags: []
    };   
    
    SearchService.personSearch(searchObj,this.props.onSubmit);
  }

  state = {
    searchTerm: ""
  };
  
  render() {
    return (      
      <Row className="search-bar">
        <Col>
          <form className="search-input" onSubmit={this.handleSubmit}>            
            <input type="text" 
              value={this.state.searchTerm}
              onChange={(event) => this.setState({ searchTerm: event.target.value})}
              placeholder="Search" />
          </form>
        </Col>
      </Row>
    );
  }
}
