import * as axios from 'axios';

let options = {};

// The server-side needs a full url to works
if (process.server) {
    options.baseURL = `http://${process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0'}:${process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080}`;
}

export default axios.create(options);
