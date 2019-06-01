import axios from '~/plugins/axios';

export default {
    state: {
        inited: false,
        profile: null
    },
    mutations: {
        FETCH_EDIT(state, payload) {
            state.profile = payload;
            state.inited = true;
        },
        CHANGE_EDIT_PROFILE_INPUT(state, payload) {
            state.profile[payload.name] = payload.value;
        },
        CLEAR_EDIT(state) {
            state.inited = false;
            state.profile = null;
        }
    },
    actions: {
        fetchEdit({ commit, rootState }) {
            return commit('FETCH_EDIT', rootState.layout.user);
        },
        editProfile({ state }) {
            axios.post('/api/edit-profile', state.profile).then(() => {
                location.href = '/';
            });
        },
        clearEdit({ commit }) {
            return commit('CLEAR_EDIT');
        }
    }
};
