import axios from 'axios';

export function personSearch(searchObject, forward, data, page = 0) {
    axios.post(`http://localhost:8080/api/person/search?from=${page}&size=20`, searchObject)
    .then(resp => {
        console.log(resp);
        forward(resp.data, data);
    });
};

export function moreLikeSearch(id, forward) {
    axios.post(`http://localhost:8080/api/person/morelike`, [id])
    .then(resp => {
        console.log(resp);
        forward(resp.data);
    });
}