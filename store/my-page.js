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
        UPDATE_POSTS(state, payload) {
            state.posts = payload.posts;
            state.addPostInputValue = '';
        }
    },
    actions: {
        fetchMyPage({ commit }, data) {
            axios.post('/api/my-page', data).then((response) => {
                return commit('FETCH_MY_PAGE', response.data.data);
            });
        },
        addPost({ commit }, data) {
            axios.post('/api/add-post', data).then((response) => {
                return commit('UPDATE_POSTS', response.data.data);
            });
        },
        removePost({ commit }, data) {
            axios.post('/api/remove-post', data).then((response) => {
                return commit('UPDATE_POSTS', response.data.data);
            });
        }
    }
}