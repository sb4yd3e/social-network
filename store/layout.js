import axios from '~/plugins/axios';

export default {
    state: {
        inited: false
    },
    mutations: {
        FETCH_LAYOUT(state, data) {
            state.user = data.user;
            state.inited = true;
        }
    },
    actions: {
        fetchLayout({ commit }, data) {
            axios.post('/api/layout', data).then((response) => {
                return commit('FETCH_LAYOUT', response.data.data);
            });
        }
    }
}