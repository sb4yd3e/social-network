<template>
    <button class="Button js-focus-visible" :type="type || 'button'" @click="click">{{text}}</button>
</template>

<script>
export default {
    props: {
        text: String,
        type: String,
        click: {
            type: Function,
            default: () => {}
        }
    }
};
</script>
