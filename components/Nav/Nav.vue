<template>
    <div class="Nav">
        <nav class="Nav-Nav">
            <ul class="Nav-List">
                <li class="Nav-Item" v-for="(item, index) in nav" :key="index">
                    <nuxt-link class="Link" :to="item.url">{{item.name}}</nuxt-link>
                </li>
                <li class="Nav-Item">
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
