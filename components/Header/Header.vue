<template>
    <header class="Header"></header>
</template>

<script>
import Nav from "../Nav/Nav.vue";

export default {
    components: {
        Nav
    },
    data() {
        return {
            header: {}
        };
    }
};
</script>

<style>
@import "./Header.css";
</style>

