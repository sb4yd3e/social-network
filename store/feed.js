import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        posts: [],
        sortValue: 'date',
        sortDirection: -1
    },
    mutations: {
        FETCH_FEED(state, payload) {
            state.posts = payload.posts;
            state.inited = true;
        },
        CHANGE_FEED_SORT(state, payload) {
            state.sortValue = payload.sortValue;
            state.sortDirection = payload.sortDirection;
        },
        UPDATE_FEED_LIKES(state, payload) {
            state.posts = state.posts.map(item => {
                if (payload.postId === item._id) {
                    return {
                        ...item,
                        likes: payload.likes
                    };
                }
                return item;
            });
        },
        CLEAR_FEED(state) {
            state.inited = false;
            state.posts = [];
        }
    },
    actions: {
        fetchFeed({ commit }, data) {
            axios.post('/api/posts', data).then(response => {
                return commit('FETCH_FEED', response.data.data);
            });
        },
        changeFeedSort({ dispatch, commit }, data) {
            commit('CHANGE_FEED_SORT', data);
            return dispatch('fetchFeed', {
                ...data
            });
        },
        removeFeedPost({ dispatch, state }, data) {
            const { sortValue, sortDirection } = state;
            axios.post('/api/remove-post', data).then(() => {
                return dispatch('fetchFeed', { sortValue, sortDirection });
            });
        },
        likeFeedPost({ commit }, data) {
            axios.post('/api/like-post', data).then(response => {
                return commit('UPDATE_FEED_LIKES', {
                    likes: response.data.data.likes,
                    postId: data.postId
                });
            });
        },
        clearFeed({ commit }) {
            return commit('CLEAR_FEED');
        }
    }
};
