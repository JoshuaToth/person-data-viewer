import * as React from 'react';
import * as PersonCard from './search-results-person-card/search-results-person-card';
import { Col } from 'react-bootstrap'

export const SearchResultsPerson = (props) => {
  return (
    <Col xs={12} md={8}>
      <p>{props.total ? `Total Results found: ${props.total}`: ""}</p>
      {props.persons.map(person => <PersonCard.SearchResultsPersonCard {...person._source} key={person._id}/>)}
      { props.total && <button>Load more</button> }
    </Col>
  );
};
