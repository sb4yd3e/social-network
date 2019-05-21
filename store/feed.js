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
        UPDATE_FEED_LIKES(state, payload) {
            state.posts = state.posts.map((item) => {
                if (payload.postId === item._id) {
                    return {
                        ...item,
                        likes: payload.likes
                    };
                }
                return item;
            })
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
            axios.post('/api/remove-post', data).then(() => {
                return dispatch('fetchFeed');
            });
        },
        likeFeedPost({ commit }, data) {
            axios.post('/api/like-post', data).then((response) => {
                commit('UPDATE_FEED_LIKES', {
                    likes: response.data.data.likes,
                    postId: data.postId
                })
            });
        },
        clearFeed({ commit }) {
            return commit('CLEAR_FEED');
        }
    }
}