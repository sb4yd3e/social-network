<template>
    <div v-if="this.$store.state.myPage.inited">     
        <AddPost
            :value="this.$store.state.myPage.inputValue"
            :change="(value) => { this.$store.commit('CHANGE_INPUT_VALUE', value) }"
            :submit="addPost"
        />
        <ul v-if="!!this.$store.state.myPage.posts.length">
            <li v-for="post in this.$store.state.myPage.posts" :key="post._id">
                <Post v-bind="post" :currentUserId="$store.state.layout.user._id" :remove="removePost" :like="likePost" />
            </li>
        </ul>
    </div>
</template>

<script>
import AddPost from '../components/AddPost/AddPost.vue';
import Post from '../components/Post/Post.vue';

export default {
    head() {
        return {
            title: `${this.$store.state.layout.user.firstName} ${this.$store.state.layout.user.lastName}`
        };
    },
    components: {
        AddPost,
        Post
    },
    mounted() {
        this.$store.dispatch('fetchMyPage', {
            _id: this.$store.state.layout.user._id
        });
    },
    destroyed() {
        this.$store.dispatch('clearMyPage');
    },
    methods: {
        addPost(e) {
            e.preventDefault();

            if (!!this.$store.state.myPage.inputValue.trim().length) {
                this.$store.dispatch('addMyPagePost', {
                    string: this.$store.state.myPage.inputValue,
                    ...this.$store.state.layout.user
                });
            }
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
