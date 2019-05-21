import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        posts: [],
        inputValue: ''
    },
    mutations: {
        FETCH_MY_PAGE(state, payload) {
            state.posts = payload.posts;
            state.inited = true;
        },
        CHANGE_INPUT_VALUE(state, payload) {
            state.inputValue = payload;
        },
        CLEAR_INPUT(state) {
            state.inputValue = '';
        },
        UPDATE_MY_PAGE_LIKES(state, payload) {
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
        addMyPagePost({ dispatch, rootState, commit }, data) {
            axios.post('/api/add-post', data).then((response) => {
                return [
                    dispatch('fetchMyPage', {
                        _id: rootState.layout.user._id
                    }),
                    commit('CLEAR_INPUT')
                ]
            });
        },
        removeMyPagePost({ dispatch, rootState }, data) {
            axios.post('/api/remove-post', data).then((response) => {
                return dispatch('fetchMyPage', {
                    _id: rootState.layout.user._id
                });
            });
        },
        likeMyPagePost({ commit }, data) {
            axios.post('/api/like-post', data).then((response) => {
                commit('UPDATE_MY_PAGE_LIKES', {
                    likes: response.data.data.likes,
                    postId: data.postId
                })
            });
        },
        clearMyPage({ commit }) {
            return commit('CLEAR_MY_PAGE');
        }
    }
}