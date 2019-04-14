import Vuex from 'vuex';
import layout from './layout';
import myPage from './my-page';

export default () => new Vuex.Store({
    namespaced: true,
    modules: {
        layout,
        myPage,
    }
});