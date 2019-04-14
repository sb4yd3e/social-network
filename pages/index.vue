<template>
    <div v-if="this.$store.state.myPage.inited">
        <AddPost/>
        <ul v-if="!!this.$store.state.myPage.posts.length">
            <li class="PostsItem" v-for="post in this.$store.state.myPage.posts" :key="post.id">
                <Post v-bind="post"/>
            </li>
        </ul>
        <EmptyBlock v-else :text="emptyText"/>
    </div>
</template>

<script>
import AddPost from '../components/AddPost/AddPost.vue';
import Post from '../components/Post/Post.vue';
import EmptyBlock from '../components/EmptyBlock/EmptyBlock.vue';

export default {
    head() {
        return {
            title: 'Моя страница'
        };
    },
    components: {
        AddPost,
        Post,
        EmptyBlock
    },
    data() {
        return {
            emptyText: 'Список пуст'
        };
    },
    mounted() {
        this.$store.dispatch('fetchMyPage');
    }
};
</script>

