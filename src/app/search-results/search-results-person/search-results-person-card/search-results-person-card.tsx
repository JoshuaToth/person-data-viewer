import * as React from 'react';
import { Col } from 'react-bootstrap';
import './search-results-person-card.less';

export const SearchResultsPersonCard = (props) => {
  return (
    <Col xs={12} md={3} className="person-card">
      <p>Name: {props.name.firstName} {props.name.lastName}</p>
      <p>Email: {props.contact.email[0].address}</p>
      <p>Phone: {props.contact.phone[0].number}</p>
    </Col>
  );
};
