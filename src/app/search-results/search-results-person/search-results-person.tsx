import * as React from 'react';
import * as PersonCard from './search-results-person-card/search-results-person-card';
import * as SearchService from '../../search-service';
import { Col } from 'react-bootstrap'

export const SearchResultsPerson = (props) => {
  return (
    <Col xs={12} md={10}>
      <h3>{props.total ? `Total Results found: ${props.total}`: ""}</h3>
      {props.persons.map(person => <PersonCard.SearchResultsPersonCard {...person._source} onSubmit={() => {SearchService.moreLikeSearch(person._id, props.onSubmit)}} key={person._id}/>)}
    </Col>
  );
};
