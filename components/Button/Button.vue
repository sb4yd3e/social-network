<template>
    <button
        class="Button js-focus-visible"
        :class="{ 'is-loading': preloader }"
        type="button"
        @click="click"
    >
        <span class="Button-Text">{{text}}</span>
        <span v-if="preloaderText" class="Button-Preloader">
            {{preloaderText}}
            <span class="Button-PreloaderDots">...</span>
        </span>
    </button>
</template>

<script>
export default {
    props: {
        text: String,
        preloaderText: String,
        preloader: Boolean,
        click: {
            type: Function,
            default: () => {}
        }
    }
};
</script>
