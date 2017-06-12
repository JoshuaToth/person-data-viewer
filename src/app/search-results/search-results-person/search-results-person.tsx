import * as React from 'react';
import * as PersonCard from './search-results-person-card/search-results-person-card';
import { Col } from 'react-bootstrap'
import './search-results-person.less';

export const SearchResultsPerson = (props) => {
  return (
    <Col xs={12} md={10} className="person-results">
      <h3>{props.total ? `Total Results found: ${props.total}`: ""}</h3>
      {props.persons.map(person => <PersonCard.SearchResultsPersonCard {...person._source} key={person._id}/>)}
    </Col>
  );
};
