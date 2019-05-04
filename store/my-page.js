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
        UPDATE_MY_PAGE_POSTS(state, payload) {
            state.posts = payload.posts;
            state.addPostInputValue = '';
        },
        CLEAR_MY_PAGE(state) {
            state.inited = false;
            state.posts = [];
        }
    },
    actions: {
        fetchMyPage({ commit }, data) {
            axios.post('/api/my-page', data).then((response) => {
                return commit('FETCH_MY_PAGE', response.data.data);
            });
        },
        addMyPagePost({ commit }, data) {
            axios.post('/api/add-post', data).then((response) => {
                return commit('UPDATE_MY_PAGE_POSTS', response.data.data);
            });
        },
        removeMyPagePost({ commit }, data) {
            axios.post('/api/remove-post', data).then((response) => {
                return commit('UPDATE_MY_PAGE_POSTS', response.data.data);
            });
        },
        clearMyPage({ commit }) {
            return commit('CLEAR_MY_PAGE');
        }
    }
}