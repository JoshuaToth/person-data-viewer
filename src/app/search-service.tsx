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

export function moreLikeSearch(id, forward) {
    axios.post(`http://localhost:8080/api/person/morelike`, [id])
    .then(resp => {
        console.log(resp);
        forward(resp.data);
    });
}