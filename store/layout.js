import axios from '~/plugins/axios';

export default {
    state: {
        inited: false
    },
    mutations: {
        FETCH_LAYOUT(state, data) {
            state.inited = data.inited;
        }
    },
    actions: {
        fetchLayout({ commit }) {
            axios.get('/api/layout').then((response) => {
                return commit('FETCH_LAYOUT', response.data.data);
            });
        }
    }
}