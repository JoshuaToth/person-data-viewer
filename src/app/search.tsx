import * as React from 'react';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';
import { Grid } from 'react-bootstrap'
import * as SearchService from './search-service';


interface ISearchProps {};

interface ISearchState {
  resultData: {},
  tags: string[],
  searchTerm: string
};

export class Search extends React.Component<ISearchProps, ISearchState> {
// This can maybe be all moved to a different class? Leave here for now. 
  searchForSophia = (data) => {    
      this.setState({
        resultData: data,
        tags: this.state.tags,
      });
  };

  searchForWithName = (data) => {  
      let searchObj = {
        name: {
          firstName: data,
          lastName: ""
        },
        tags: []
      };

      SearchService.personSearch(searchObj,this.addSearchTerm,data);
  };

  searchForLoadMore = (data) => {  
      let searchObj = {
        name: {
          firstName: this.state.searchTerm,
          lastName: ""
        },
        tags: this.state.tags
      };

      SearchService.personSearch(searchObj,this.requestNextPage,data,data);
  };

  searchForAddTag = (data) => {  
      console.log('ay');
      let searchObj = {
        name: {
          firstName: this.state.searchTerm,
          lastName: ""
        },
        tags: this.state.tags.concat(data)
      };
      
      SearchService.personSearch(searchObj, this.addTag, data);
  };

  searchForRemoveTag = (data) => {  
      let searchObj = {
        name: {
          firstName: this.state.searchTerm,
          lastName: ""
        },
        tags: this.state.tags.filter(tag => tag != data)
      };
      
      SearchService.personSearch(searchObj, this.removeTag, data);
  };

  addTag = (dataResp, data) => { 
    this.setState({
        resultData: dataResp,
        tags: this.state.tags.concat(data),
        searchTerm: this.state.searchTerm
      });
  }

  removeTag = (dataResp, data) => {
    this.setState({
        resultData: dataResp,
        tags: this.state.tags.filter(tag => tag != data),
        searchTerm: this.state.searchTerm
      });
  }

  addSearchTerm = (dataResp, data) => { 
    this.setState({
        resultData: dataResp,
        tags: [],
        searchTerm: data
      });
  }

  requestNextPage = (dataResp, data) => { 
    let resultData = dataResp;
    resultData.hits.hits = this.state.resultData.hits.hits.concat(resultData.hits.hits);

    this.setState({
        resultData: resultData,
        tags: this.state.tags,
        searchTerm: this.state.searchTerm
      });
  }


  state = {
    resultData: {
      hits: {
        hits: []
      },
      aggregations: {
        tagAggs: {
          buckets: []
        }
      }
    },
    tags: [],
    searchTerm: ''
  }

  render() {
    return (
      <Grid>
        <SearchBar removeTag={this.searchForRemoveTag} onSubmit={this.searchForWithName} tags={this.state.tags} searchTerm={this.state.searchTerm}/>
        <SearchResults loadMore={this.searchForLoadMore} addTag={this.searchForAddTag} onSubmit={this.searchForSophia} resultData={this.state.resultData}/>
      </Grid>
    );
  }
}
