import axios from 'axios';

export function personSearch(searchObject, forward, data) {
    axios.post(`http://localhost:8080/api/person/search`, searchObject)
    .then(resp => {
        console.log(resp);
        forward(resp.data, data);
    });
};

export function tagSearch(tag, forward, data) {
    let searchObj = {
      name: {
        firstName: "",
        lastName: ""
      },
      tags: [tag]
    }
    personSearch(searchObj,forward, data);
}

export function moreLikeSearch(id, forward) {
    axios.post(`http://localhost:8080/api/person/morelike`, [id])
    .then(resp => {
        console.log(resp);
        forward(resp.data);
    });
}