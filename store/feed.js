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
        CLEAR_FEED(state) {
            state.inited = false;
            state.posts = [];
        }
    },
    actions: {
        fetchFeed({ commit }, data) {
            axios.post('/api/posts').then((response) => {
                return commit('FETCH_FEED', response.data.data);
            });
        },
        removeFeedPost({ dispatch }, data) {
            axios.post('/api/remove-post', data).then((response) => {
                return dispatch('fetchFeed');
            });
        },
        clearFeed({ commit }) {
            return commit('CLEAR_FEED');
        }
    }
}