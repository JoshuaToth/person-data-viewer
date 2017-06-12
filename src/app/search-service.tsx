import axios from 'axios';

export function personSearch(searchObject, forward) {
    axios.post(`http://localhost:8080/api/person/search`, searchObject)
    .then(resp => {
        console.log(resp);
        forward(resp.data);
    });
};

export function tagSearch(tag, forward) {
    let searchObj = {
      name: {
        firstName: "",
        lastName: ""
      },
      tags: [tag]
    }
    personSearch(searchObj,forward);
}
