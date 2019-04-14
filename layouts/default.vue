<template>
    <div class="Layout" v-if="this.$store.state.layout.inited">
        <div class="Layout-Header">
            <Header/>
        </div>
        <div class="Container">
            <div class="Layout-Body">
                <div class="Layout-Aside">
                    <Aside/>
                </div>
                <div class="Layout-Content">
                    <main class="Layout-Main">
                        <nuxt/>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Aside from '../components/Aside/Aside.vue';

export default {
    components: {
        Header,
        Aside
    },
    mounted() {
        this.$store.dispatch('fetchLayout');
    }
};
</script>

