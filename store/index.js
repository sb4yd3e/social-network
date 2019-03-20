import Vuex from 'vuex';
import layout from './layout';
import home from './home';

export default () => new Vuex.Store({
    namespaced: true,
    modules: {
        layout,
        home,
    }
});