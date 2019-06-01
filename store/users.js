import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        list: []
    },
    mutations: {
        FETCH_USERS(state, payload) {
            state.list = payload.list;
            state.inited = true;
        },
        CLEAR_USERS(state) {
            state.inited = false;
            state.list = [];
        }
    },
    actions: {
        fetchUsers({ commit }, data) {
            axios.post('/api/users').then(response => {
                return commit('FETCH_USERS', response.data.data);
            });
        },
        clearUsers({ commit }) {
            return commit('CLEAR_USERS');
        }
    }
};
