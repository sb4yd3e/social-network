<template>
    <div v-if="$store.state.myPage.inited">
        <Profile v-bind="$store.state.layout.user" :canChange="true" />
        <Miniform
            :value="$store.state.myPage.inputValue"
            :change="(value) => { $store.commit('CHANGE_INPUT_VALUE', value) }"
            :submit="addPost"
            :placeholder="'Что у Вас нового?'"
            :buttonText="'Опубликовать'"
        />
        <Sort
            :sortValue="$store.state.myPage.sortValue"
            :sortDirection="$store.state.myPage.sortDirection"
            :sort="changeSort"
        />
        <div v-if="!!$store.state.myPage.posts.length">
            <ul>
                <li v-for="post in $store.state.myPage.posts" :key="post._id">
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
                v-if="$store.state.myPage.postsCounter < $store.state.myPage.allPostsCounter"
                :text="'Показать еще'"
                :click="showMore"
            />
        </div>
        <Empty v-else :text="'Нет ни одной добавленной записи'" />
    </div>
</template>

<script>
import Profile from '../components/Profile/Profile.vue';
import Miniform from '../components/Miniform/Miniform.vue';
import Sort from '../components/Sort/Sort.vue';
import Post from '../components/Post/Post.vue';
import ShowMore from '../components/ShowMore/ShowMore.vue';
import Empty from '../components/Empty/Empty.vue';

export default {
    head() {
        return {
            title: this.$store.state.layout.user.fullName
        };
    },
    components: {
        Profile,
        Miniform,
        Sort,
        Post,
        ShowMore,
        Empty
    },
    mounted() {
        const { sortValue, sortDirection } = this.$store.state.myPage;
        this.$store.dispatch('fetchMyPage', {
            _id: this.$store.state.layout.user._id,
            sortValue,
            sortDirection
        });
    },
    destroyed() {
        this.$store.dispatch('clearMyPage');
    },
    methods: {
        showMore() {
            const { sortValue, sortDirection } = this.$store.state.myPage;
            this.$store.dispatch('showMoreMyPage', {
                _id: this.$store.state.layout.user._id,
                sortValue,
                sortDirection
            });
        },
        addPost(e) {
            e.preventDefault();

            if (!!this.$store.state.myPage.inputValue.trim().length) {
                this.$store.dispatch('addMyPagePost', {
                    string: this.$store.state.myPage.inputValue,
                    ...this.$store.state.layout.user
                });
            }
        },
        changeSort(sortValue, sortDirection) {
            this.$store.dispatch('changeMyPageSort', {
                sortValue,
                sortDirection
            });
        },
        removePost(id) {
            this.$store.dispatch('removeMyPagePost', {
                id,
                ...this.$store.state.layout.user
            });
        },
        likePost(postId, userId) {
            this.$store.dispatch('likeMyPagePost', {
                postId,
                userId
            });
        }
    }
};
</script>
