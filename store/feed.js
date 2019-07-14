import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        posts: [],
        postsCounter: 0,
        allPostsCounter: 0,
        sortValue: 'date',
        sortDirection: -1
    },
    mutations: {
        FETCH_FEED(state, payload) {
            state.posts = payload.posts;
            state.postsCounter = payload.posts.length;
            state.allPostsCounter = payload.allPostsCounter;
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
            state.postsCounter = 0;
            state.allPostsCounter = 0;
        }
    },
    actions: {
        fetchFeed({ commit, state }, data) {
            axios
                .post('/api/posts', {
                    showMore: true,
                    ...data,
                    postsCounter:
                        state.postsCounter > 10 || state.postsCounter === 0
                            ? state.postsCounter
                            : 10
                })
                .then(response => {
                    return commit('FETCH_FEED', response.data.data);
                });
        },
        showMoreFeed({ commit, state }, data) {
            axios
                .post('/api/posts', {
                    showMore: true,
                    ...data,
                    postsCounter:
                        state.postsCounter > 10 || state.postsCounter === 0
                            ? state.postsCounter
                            : 10
                })
                .then(response => {
                    return commit('FETCH_FEED', response.data.data);
                });
        },
        changeFeedSort({ dispatch, commit }, data) {
            commit('CHANGE_FEED_SORT', data);
            return dispatch('fetchFeed', {
                ...data,
                showMore: false
            });
        },
        removeFeedPost({ dispatch, state }, data) {
            const { sortValue, sortDirection } = state;
            axios.post('/api/remove-post', data).then(() => {
                return dispatch('fetchFeed', {
                    sortValue,
                    sortDirection,
                    showMore: false
                });
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
