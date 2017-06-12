import * as React from 'react';
export const SearchResultsPersonCard = (props) => {
  return (
    <div>
      <p>{props.name.firstName}</p>
      <p>{props.name.lastName}</p>
      <p>{props.contact.email[0].address}</p>
      <p>{props.contact.phone[0].number}</p>
    </div>
  );
};
