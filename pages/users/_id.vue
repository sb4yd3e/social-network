<template>
    <div v-if="$store.state.user.inited">
        <Profile v-bind="$store.state.user.user" :canChange="false"/>
        <ul v-if="!!$store.state.user.posts.length">
            <li v-for="post in $store.state.user.posts" :key="post._id">
                <Post
                    v-bind="post"
                    :currentUserId="$store.state.layout.user._id"
                    :link="`/users/${post.creator._id}`"
                    :like="likePost"
                />
            </li>
        </ul>
        <Empty v-else :text="'Нет ни одной добавленной записи'"/>
    </div>
</template>

<script>
import Profile from '../../components/Profile/Profile.vue';
import Post from '../../components/Post/Post.vue';
import Empty from '../../components/Empty/Empty.vue';

export default {
    head() {
        return {
            title: this.$store.state.user.user
                ? this.$store.state.user.user.fullName
                : ''
        };
    },
    components: {
        Profile,
        Post,
        Empty
    },
    mounted() {
        this.$store.dispatch('fetchUser', {
            _id: this.$route.params.id
        });
    },
    destroyed() {
        this.$store.dispatch('clearUser');
    },
    methods: {
        likePost(postId, userId) {
            this.$store.dispatch('likeUserPost', {
                postId,
                userId
            });
        }
    }
};
</script>
