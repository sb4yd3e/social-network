import * as axios from 'axios';

let options = {};

if (process.server) {
    options.baseURL = `http://${process.env.IP || '0.0.0.0'}:${process.env.PORT || 8080}`;
}

export default axios.create(options);
