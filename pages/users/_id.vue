<template>
    <div v-if="$store.state.user.inited">
        <Profile v-bind="$store.state.user.user" :canChange="false" />
        <Sort
            :sortValue="$store.state.user.sortValue"
            :sortDirection="$store.state.user.sortDirection"
            :sort="changeSort"
        />
        <div v-if="!!$store.state.user.posts.length">
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
            <ShowMore
                v-if="$store.state.user.postsCounter < $store.state.user.allPostsCounter"
                :text="'Показать еще'"
                :click="showMore"
            />
        </div>
        <Empty v-else :text="'Нет ни одной добавленной записи'" />
    </div>
</template>

<script>
import Profile from '../../components/Profile/Profile.vue';
import Sort from '../../components/Sort/Sort.vue';
import Post from '../../components/Post/Post.vue';
import ShowMore from '../../components/ShowMore/ShowMore.vue';
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
        Sort,
        Post,
        ShowMore,
        Empty
    },
    mounted() {
        const { sortValue, sortDirection } = this.$store.state.user;
        this.$store.dispatch('fetchUser', {
            _id: this.$route.params.id,
            sortValue,
            sortDirection
        });
    },
    destroyed() {
        this.$store.dispatch('clearUser');
    },
    methods: {
        showMore() {
            const { sortValue, sortDirection } = this.$store.state.user;
            this.$store.dispatch('showMoreUser', {
                _id: this.$route.params.id,
                sortValue,
                sortDirection
            });
        },
        changeSort(sortValue, sortDirection) {
            this.$store.dispatch('changeUserSort', {
                _id: this.$route.params.id,
                sortValue,
                sortDirection
            });
        },
        likePost(postId, userId) {
            this.$store.dispatch('likeUserPost', {
                postId,
                userId
            });
        }
    }
};
</script>
