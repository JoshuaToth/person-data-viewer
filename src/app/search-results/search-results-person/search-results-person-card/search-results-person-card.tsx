import * as React from 'react';


export const SearchResultsPersonCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
};
