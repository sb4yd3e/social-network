<template>
    <div v-if="$store.state.users.inited">
        <Miniform
            :value="$store.state.users.searchValue"
            :change="(value) => { $store.commit('CHANGE_SEARCH_VALUE', value) }"
            :submit="search"
            :placeholder="'Введите имя пользователя'"
            :buttonText="'Искать'"
        />
        <ul v-if="!!$store.state.users.list.length">
            <li v-for="user in $store.state.users.list" :key="user._id">
                <User
                    v-bind="user"
                    :href="$store.state.layout.user._id === user._id ? '/' : `/users/${user._id}`"
                />
            </li>
        </ul>
        <Empty v-else :text="'По данному запросу ничего не найдено'"/>
    </div>
</template>

<script>
import Miniform from '../../components/Miniform/Miniform.vue';
import User from '../../components/User/User.vue';
import Empty from '../../components/Empty/Empty.vue';

export default {
    head() {
        return {
            title: 'Пользователи'
        };
    },
    components: {
        Miniform,
        User,
        Empty
    },
    mounted() {
        this.$store.dispatch('fetchUsers', {
            string: this.$store.state.users.searchValue
        });
    },
    destroyed() {
        this.$store.dispatch('clearUsers');
    },
    methods: {
        search(e) {
            e.preventDefault();

            this.$store.dispatch('fetchUsers', {
                string: this.$store.state.users.searchValue
            });
        }
    }
};
</script>
