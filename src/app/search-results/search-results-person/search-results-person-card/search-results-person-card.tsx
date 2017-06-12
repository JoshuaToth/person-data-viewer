import * as React from 'react';
import { Col } from 'react-bootstrap';
import './search-results-person-card.less';

export const SearchResultsPersonCard = (props) => {
  return (
    <Col xs={12} md={5} className="person-card">
      <p>Name: {props.name.firstName} {props.name.lastName}</p>
      <p>Email: {props.contact.email[0].address}</p>
      <p>Phone: {props.contact.phone[0].number}</p>
      <a onClick={props.onSubmit} href="#">More like this</a>
    </Col>
  );
};
