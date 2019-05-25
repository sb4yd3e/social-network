<template>
    <div v-if="$store.state.feed.inited">
        <ul v-if="!!$store.state.feed.posts.length">
            <li v-for="post in $store.state.feed.posts" :key="post._id">
                <Post
                    v-bind="post"
                    :currentUserId="$store.state.layout.user._id"
                    :link="$store.state.layout.user._id === post.creator._id ? '/' : `/users/${post.creator._id}`"
                    :remove="removePost"
                    :like="likePost"
                    />
            </li>
        </ul>
        <Empty v-else :text="'Нет ни одной добавленной записи'" />
    </div>
</template>

<script>
import Post from '../components/Post/Post.vue';
import Empty from '../components/Empty/Empty.vue';

export default {
    head() {
        return {
            title: 'Новости'
        };
    },
    components: {
        Post,
        Empty
    },
    mounted() {
        this.$store.dispatch('fetchFeed');
    },
    destroyed() {
        this.$store.dispatch('clearFeed');
    },
    methods: {
        removePost(id) {
            this.$store.dispatch('removeFeedPost', { id });
        },
        likePost(postId, userId) {
            this.$store.dispatch('likeFeedPost', { 
                postId,
                userId
            });
        }
    }
};
</script>
