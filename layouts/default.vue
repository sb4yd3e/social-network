<template>
    <div class="Layout">
        <div class="Layout-Header">
            <Header />
        </div>
        <div class="Container">
            <div class="Layout-Body">
                <div class="Layout-Sidebar">
                    <Nav />
                </div>
                <div class="Layout-Content">
                    <main class="Layout-Main">
                        <nuxt />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Nav from "../components/Nav/Nav.vue";

export default {
    components: {
        Header,
        Nav
    },
    mounted() {
        // this.$store.dispatch('fetchLayout');
    }
};
</script>

<style lang="postcss">
    .Layout {
        min-height: 100vh;
        background: var(--color-gray);

        &-Header {
            margin: 0 0 20px;
        }

        &-Body {
            display: flex;
            justify-content: space-between;
        }

        &-Sidebar {
            width: 250px;
        }

        &-Content {
            width: calc(100% - 270px);
        }

        &-Main {
            padding: 20px;
            background: var(--color-white);
        }
    }
</style>

