<template>
    <div v-if="$store.state.users.inited">
        <ul v-if="!!$store.state.users.list.length">
            <li v-for="user in $store.state.users.list" :key="user._id">
                <User
                    v-bind="user"
                    :href="$store.state.layout.user._id === user._id ? '/' : `/users/${user._id}`"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import User from '../../components/User/User.vue';

export default {
    head() {
        return {
            title: 'Пользователи'
        };
    },
    components: {
        User
    },
    mounted() {
        this.$store.dispatch('fetchUsers');
    },
    destroyed() {
        this.$store.dispatch('clearUsers');
    }
};
</script>
