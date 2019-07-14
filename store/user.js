import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        id: null,
        user: null,
        posts: [],
        postsCounter: 0,
        allPostsCounter: 0,
        sortValue: 'date',
        sortDirection: -1
    },
    mutations: {
        FETCH_USER(state, payload) {
            state.posts = payload.posts;
            state.postsCounter = payload.posts.length;
            state.allPostsCounter = payload.allPostsCounter;
            if (payload.id) state.id = payload.id;
            if (payload.user) state.user = payload.user;
            state.inited = true;
        },
        CHANGE_USER_SORT(state, payload) {
            state.sortValue = payload.sortValue;
            state.sortDirection = payload.sortDirection;
        },
        UPDATE_USER_LIKES(state, payload) {
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
        CLEAR_USER(state) {
            state.inited = false;
            state.user = null;
            state.posts = [];
            state.id = null;
            state.postsCounter = 0;
            state.allPostsCounter = 0;
        }
    },
    actions: {
        fetchUser({ commit, state }, data) {
            const id = data._id || state.id;
            axios
                .post('/api/posts', {
                    showMore: true,
                    ...data,
                    postsCounter:
                        state.postsCounter > 10 || state.postsCounter === 0
                            ? state.postsCounter
                            : 10
                })
                .then(postsResponse => {
                    if (state.user) {
                        return commit('FETCH_USER', {
                            posts: postsResponse.data.data.posts,
                            allPostsCounter:
                                postsResponse.data.data.allPostsCounter
                        });
                    }

                    return axios.post('/api/user', data).then(userResponse => {
                        return commit('FETCH_USER', {
                            id,
                            posts: postsResponse.data.data.posts,
                            user: userResponse.data.data.user,
                            allPostsCounter:
                                postsResponse.data.data.allPostsCounter
                        });
                    });
                });
        },
        showMoreUser({ commit, state }, data) {
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
                    return commit('FETCH_USER', response.data.data);
                });
        },
        changeUserSort({ dispatch, state, commit }, data) {
            commit('CHANGE_USER_SORT', data);
            return dispatch('fetchUser', {
                ...data,
                showMore: false
            });
        },
        likeUserPost({ commit }, data) {
            axios.post('/api/like-post', data).then(response => {
                return commit('UPDATE_USER_LIKES', {
                    likes: response.data.data.likes,
                    postId: data.postId
                });
            });
        },
        clearUser({ commit }) {
            return commit('CLEAR_USER');
        }
    }
};
