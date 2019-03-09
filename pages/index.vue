<template>
    <div></div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
    async asyncData() {
        let { data } = await axios.get('/api/home');
        return { home: data };
    },
    head() {
        return {
            title: 'Home'
        };
    }
};
</script>

<style>
</style>

