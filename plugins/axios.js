import * as axios from 'axios';

let options = {};

// The server-side needs a full url to works
if (process.server) {
    options.baseURL = `http://${process.env.OPENSHIFT_NODEJS_IP || 'localhost'}:${process.env.OPENSHIFT_NODEJS_PORT || 8080}`;
}

export default axios.create(options);
