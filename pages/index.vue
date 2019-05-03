<template>
    <div v-if="this.$store.state.myPage.inited">
        <AddPost
            :value="this.$store.state.myPage.addPostInputValue"
            :change="(value) => { this.$store.commit('CHANGE_ADD_POST_INPUT_VALUE', value) }"
            :submit="addPost"
        />
        <ul v-if="!!this.$store.state.myPage.posts.length">
            <li v-for="post in this.$store.state.myPage.posts" :key="post._id">
                <Post v-bind="post" :remove="removePost" />
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
        this.$store.dispatch('fetchMyPage', {
            userId: this.$store.state.layout.user.userId
        });
    },
    methods: {
        addPost() {
            this.$store.dispatch('addPost', {
                string: this.$store.state.myPage.addPostInputValue,
                ...this.$store.state.layout.user
            });
        },
        removePost(id) {
            this.$store.dispatch('removePost', { 
                id,
                ...this.$store.state.layout.user
            });
        }
    }
};
</script>
