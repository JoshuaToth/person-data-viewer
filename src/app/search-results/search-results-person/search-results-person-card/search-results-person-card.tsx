import * as React from 'react';
import { Col } from 'react-bootstrap';
import './search-results-person-card';

export const SearchResultsPersonCard = (props) => {
  return (
    <Col xs={12} md={4} className="person-card">
      <p>{props.name.firstName}</p>
      <p>{props.name.lastName}</p>
      <p>{props.contact.email[0].address}</p>
      <p>{props.contact.phone[0].number}</p>
    </Col>
  );
};
