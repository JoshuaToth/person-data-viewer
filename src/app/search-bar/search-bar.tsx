import * as React from 'react';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';

import './search-bar.less';

interface ISearchBarProps {
  onSubmit: {(data):void}
};

interface ISearchBarState {};

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/api/person/search`, {
      name: {
        firstName: this.state.searchTerm,
        lastName: ""
      },
      tags: []
    })
    	.then(resp => {
        console.log(resp);
        this.props.onSubmit(resp.data);
      });
  }

  state = {
    searchTerm: ""
  };
  
  render() {
    return (      
      <Row className="search-bar">
        <Col>
          <form onSubmit={this.handleSubmit}>
            
            <input type="text" 
              value={this.state.searchTerm}
              onChange={(event) => this.setState({ searchTerm: event.target.value})}
              placeholder="Sophia" />
            <button type="Submit"><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </Col>
      </Row>
    );
  }
}
