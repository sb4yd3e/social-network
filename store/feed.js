import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        posts: []
    },
    mutations: {
        FETCH_FEED(state, payload) {
            state.posts = payload.posts;
            state.inited = true;
        },
        UPDATE_FEED_POSTS(state, payload) {
            state.posts = payload.posts;
        },
        CLEAR_FEED(state) {
            state.inited = false;
            state.posts = [];
        }
    },
    actions: {
        fetchFeed({ commit }, data) {
            axios.post('/api/feed', data).then((response) => {
                return commit('FETCH_FEED', response.data.data);
            });
        },
        removeFeedPost({ commit }, data) {
            axios.post('/api/remove-post', data).then((response) => {
                return commit('UPDATE_FEED_POSTS', response.data.data);
            });
        },
        clearFeed({ commit }) {
            return commit('CLEAR_FEED');
        }
    }
}