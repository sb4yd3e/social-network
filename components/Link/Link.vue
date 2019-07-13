<template>
    <a
        class="Link js-focus-visible"
        :class="className"
        v-if="href"
        :href="href"
    >
        {{text}}
    </a>
    <button
        v-else
        class="Link js-focus-visible"
        type="button"
        @click="click"
    >
        {{text}}
    </button>
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
