<template>
    <div v-if="$store.state.feed.inited">
        <Sort
            :sortValue="$store.state.feed.sortValue"
            :sortDirection="$store.state.feed.sortDirection"
            :sort="changeSort"
        />
        <div v-if="!!$store.state.feed.posts.length">
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
            <ShowMore
                v-if="$store.state.feed.postsCounter < $store.state.feed.allPostsCounter"
                :text="'Показать еще'"
                :click="showMore"
            />
        </div>
        <Empty v-else :text="'Нет ни одной добавленной записи'" />
    </div>
</template>

<script>
import Sort from '../components/Sort/Sort.vue';
import Post from '../components/Post/Post.vue';
import ShowMore from '../components/ShowMore/ShowMore.vue';
import Empty from '../components/Empty/Empty.vue';

export default {
    head() {
        return {
            title: 'Новости'
        };
    },
    components: {
        Sort,
        Post,
        ShowMore,
        Empty
    },
    mounted() {
        const { sortValue, sortDirection } = this.$store.state.feed;
        this.$store.dispatch('fetchFeed', { sortValue, sortDirection });
    },
    destroyed() {
        this.$store.dispatch('clearFeed');
    },
    methods: {
        showMore() {
            const { sortValue, sortDirection } = this.$store.state.feed;
            this.$store.dispatch('showMoreFeed', {
                sortValue,
                sortDirection
            });
        },
        changeSort(sortValue, sortDirection) {
            this.$store.dispatch('changeFeedSort', {
                sortValue,
                sortDirection
            });
        },
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
