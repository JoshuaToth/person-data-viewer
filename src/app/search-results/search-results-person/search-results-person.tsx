import * as React from 'react';
import * as PersonCard from './search-results-person-card/search-results-person-card'

export const SearchResultsPerson = (props) => {
  return (
    <div>
      <p>{props.total ? `Total Results found: ${props.total}`: ""}</p>
      {props.persons.map(person => <PersonCard.SearchResultsPersonCard {...person._source} key={person._id}/>)}
      {/*<PersonCard.SearchResultsPersonCard name="Fred Flingle" email="fingle@gmail.com" phone="0425879078"/>*/}
    </div>
  );
};
