import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        posts: [],
        addPostInputValue: ''
    },
    mutations: {
        FETCH_MY_PAGE(state, payload) {
            state.posts = payload.posts;
            state.inited = true;
        },
        CHANGE_ADD_POST_INPUT_VALUE(state, payload) {
            state.addPostInputValue = payload;
        },
        CLEAR_MY_PAGE(state) {
            state.inited = false;
            state.posts = [];
        }
    },
    actions: {
        fetchMyPage({ commit }, data) {
            axios.post('/api/posts', data).then((response) => {
                return commit('FETCH_MY_PAGE', response.data.data);
            });
        },
        addMyPagePost({ dispatch, rootState }, data) {
            axios.post('/api/add-post', data).then((response) => {
                return dispatch('fetchMyPage', {
                    userId: rootState.layout.user.userId
                });
            });
        },
        removeMyPagePost({ dispatch, state }, data) {
            axios.post('/api/remove-post', data).then((response) => {
                return dispatch('fetchMyPage', {
                    userId: rootState.layout.user.userId
                });
            });
        },
        clearMyPage({ commit }) {
            return commit('CLEAR_MY_PAGE');
        }
    }
}