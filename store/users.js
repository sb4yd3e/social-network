import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        list: [],
        searchValue: ''
    },
    mutations: {
        FETCH_USERS(state, payload) {
            state.list = payload.list;
            state.inited = true;
        },
        CHANGE_SEARCH_VALUE(state, payload) {
            state.searchValue = payload;
        },
        CLEAR_USERS(state) {
            state.inited = false;
            state.list = [];
        }
    },
    actions: {
        fetchUsers({ commit }, data) {
            axios.post('/api/users', data).then(response => {
                return commit('FETCH_USERS', response.data.data);
            });
        },
        clearUsers({ commit }) {
            return commit('CLEAR_USERS');
        }
    }
};
