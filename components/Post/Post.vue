<template>
    <article class="Post Piece">
        <div class="Post-PhotoWrapper">
            <img class="Post-Photo" :src="creator.photo" alt="Фото автора поста">
        </div>
        <div class="Post-Info">
            <header class="Post-Header">
                <h3 class="Post-Name h5">{{`${creator.firstName} ${creator.lastName}`}}</h3>
                <time class="Post-Date">{{new Date(date).toLocaleString()}}</time>
            </header>
            <p class="Post-Text">{{text}}</p>

            <Link :text="'Удалить'" :click="() => {remove(_id)}" />
        </div>
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
        date: String,
        text: String,
        creator: Object,
        remove: Function
    }
};
</script>
