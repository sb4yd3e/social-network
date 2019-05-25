import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        posts: [],
    },
    mutations: {
        FETCH_USER(state, payload) {
            state.posts = payload.posts;
            state.user = payload.user;
            state.inited = true;
        },
        UPDATE_USER_LIKES(state, payload) {
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
        CLEAR_USER(state) {
            state.inited = false;
            state.posts = [];
        }
    },
    actions: {
        fetchUser({ commit }, data) {
            axios.post('/api/posts', data).then((postsResponse) => {
                return axios.post('/api/user', data).then((userResponse) => {
                    return commit('FETCH_USER', {
                        posts: postsResponse.data.data.posts,
                        user: userResponse.data.data.user
                    });
                });
            });
        },
        likeUserPost({ commit }, data) {
            axios.post('/api/like-post', data).then((response) => {
                commit('UPDATE_USER_LIKES', {
                    likes: response.data.data.likes,
                    postId: data.postId
                })
            });
        },
        clearUser({ commit }) {
            return commit('CLEAR_USER');
        }
    }
}