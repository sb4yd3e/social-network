import Vuex from 'vuex';
import layout from './layout';
import myPage from './my-page';
import feed from './feed';

export default () => new Vuex.Store({
    namespaced: true,
    modules: {
        layout,
        myPage,
        feed
    }
});