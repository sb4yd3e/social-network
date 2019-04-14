import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        posts: [

        ],
        addPostInputValue: ""
    },
    mutations: {
        FETCH_MY_PAGE(state, payload) {
            state.posts = payload.posts;
            state.inited = payload.inited;
        },
        CHANGE_ADD_POST_INPUT_VALUE(state, payload) {
            state.addPostInputValue = payload;
        },
        UPDATE_POSTS(state, payload) {
            state.posts = payload.posts;
            state.addPostInputValue = "";
        }
    },
    actions: {
        fetchMyPage({ commit }) {
            axios.get('/api/my-page').then((response) => {
                return commit('FETCH_MY_PAGE', response.data.data);
            });
        },
        addPost({ commit, state }) {
            axios.post('/api/add-post', {
                string: state.addPostInputValue
            }).then((response) => {
                return commit('UPDATE_POSTS', response.data.data);
            });
        }
    }
}