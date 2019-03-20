import axios from '~/plugins/axios';

export default {
    state: {
        status: null,
    },
    mutations: {
        CHANGE_STATUS(state, data) {
            state.status = data.status;
        }
    },
    actions: {
        fetchStatus({ commit }) {
            axios.get('/api/home').then((response) => {
                return commit('CHANGE_STATUS', response.data);
            });
        }
    }
}