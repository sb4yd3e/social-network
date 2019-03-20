import axios from '~/plugins/axios';

export default {
    state: {
        status: null,
    },
    mutations: {
        FETCH_LAYOUT(state, data) {
            state.status = data.status;
        }
    },
    actions: {
        fetchLayout({ commit }) {
            axios.get('/api/layout').then((response) => {
                return commit('FETCH_LAYOUT', response.data);
            });
        }
    }
}