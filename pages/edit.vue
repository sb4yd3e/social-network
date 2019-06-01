<template>
    <div v-if="$store.state.edit.inited">
        <EditProfile
            v-bind="$store.state.edit.profile"
            :change="(value, name) => { $store.commit('CHANGE_EDIT_PROFILE_INPUT', { value, name }) }"
            :submit="editProfile"
        />
    </div>
</template>

<script>
import EditProfile from '../components/EditProfile/EditProfile.vue';

export default {
    head() {
        return {
            title: 'Редактирование профиля'
        };
    },
    components: {
        EditProfile
    },
    mounted() {
        this.$store.dispatch('fetchEdit');
    },
    destroyed() {
        this.$store.dispatch('clearEdit');
    },
    methods: {
        editProfile(e) {
            e.preventDefault();
            this.$store.dispatch('editProfile');
        }
    }
};
</script>
