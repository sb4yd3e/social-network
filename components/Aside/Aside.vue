<template>
    <div class="Aside Piece">
        <nav class="Aside-Nav">
            <div class="Aside-PhotoWrapper">
                <img class="Aside-Photo" :src="photo" alt="Фото профиля">
            </div>
            <ul class="Aside-List">
                <li class="Aside-Item" v-for="(item, index) in nav" :key="index">
                    <nuxt-link class="Link" :to="item.url">{{item.name}}</nuxt-link>
                </li>
                <li>
                    <Link :text="'Выход'" :click="signOut" />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Link from '../Link/Link.vue';

export default {
    components: {
        Link
    },
    props: {
        photo: String,
        nav: Array,
        signOut: Function
    }
};
</script>
