<template>
    <div v-if="this.$store.state.feed.inited">
        <ul v-if="!!this.$store.state.feed.posts.length">
            <li v-for="post in this.$store.state.feed.posts" :key="post._id">
                <Post v-bind="post" :currentUserId="$store.state.layout.user.userId" :remove="removePost" />
            </li>
        </ul>
    </div>
</template>

<script>
import Post from '../components/Post/Post.vue';

export default {
    head() {
        return {
            title: 'Новости'
        };
    },
    components: {
        Post
    },
    data() {
        return {
            emptyText: 'Список пуст'
        };
    },
    mounted() {
        this.$store.dispatch('fetchFeed', {
            userId: this.$store.state.layout.user.userId
        });
    },
    destroyed() {
        this.$store.dispatch('clearFeed');
    },
    methods: {
        removePost(id) {
            this.$store.dispatch('removeFeedPost', { id });
        }
    }
};
</script>
