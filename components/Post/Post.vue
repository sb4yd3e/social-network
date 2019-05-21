<template>
    <article class="Post">
        <header class="Post-Header">
            <div class="Post-PhotoWrapper">
                <img class="Post-Photo" :src="creator.photo" alt="Фото автора поста">
            </div>
            <div class="Post-Info">
                <h3 class="Post-Name h5">{{`${creator.firstName} ${creator.lastName}`}}</h3>
                <time class="Post-Date">{{new Date(date).toLocaleString()}}</time>
            </div>
        </header>
        <div class="Post-Body">
            <p class="Post-Text">{{text}}</p>
        </div>
        <footer class="Post-Footer">
            <div class="Post-FooterItem">
                <Link :text="`👍 ${likes.length}`" :click="() => {like(_id, currentUserId)}" />
            </div>
            <div class="Post-FooterItem">
                <Link v-if="creator._id === currentUserId" :text="'Удалить'" :click="() => {remove(_id)}" />
            </div>
        </footer>
    </article>
</template>

<script>
import Link from '../Link/Link.vue';

export default {
    components: {
        Link
    },
    props: {
        _id: String,
        currentUserId: String,
        date: String,
        text: String,
        creator: Object,
        likes: Array,
        like: Function,
        remove: Function
    }
};
</script>
