<template>
    <a v-if="href" class="Link js-focus-visible" :href="href">{{text}}</a>
    <button v-else class="Link js-focus-visible" type="button" @click="click">{{text}}</button>
</template>

<script>
export default {
    props: {
        text: String,
        href: String,
        click: {
            type: Function,
            default: () => {}
        }
    }
};
</script>
