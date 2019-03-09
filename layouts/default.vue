<template>
    <div class="layout">
        <div class="layout__header">
            <Header />
        </div>
        <div class="layout__body">
            <nuxt />
        </div>
    </div>
</template>

<script>
import Header from "~/components/Header/Header.vue";

export default {
    components: {
        Header
    }
};
</script>

<style>
</style>

