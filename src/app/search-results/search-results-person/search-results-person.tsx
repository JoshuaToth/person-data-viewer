import * as React from 'react';
import * as PersonCard from './search-results-person-card/search-results-person-card'

export const SearchResultsPerson = (props) => {
  return (
    <div>
      <PersonCard.SearchResultsPersonCard name="Fred Flingle" email="fingle@gmail.com" phone="0425879078"/>
    </div>
  );
};
