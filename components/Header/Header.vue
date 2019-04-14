<template>
    <header class="Header">
        <div class="Header-Wrapper">
            <div class="Container">
                <div class="Header-Inner">
                    <div class="Header-Logo">
                        <nuxt-link class="Header-LogoLink Link" to="/">{{logo}}</nuxt-link>
                    </div>
                    <div class="Header-Logout">
                        <button class="Link">Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            logo: 'СОЦИАЛЬНАЯ СЕТЬ'
        };
    }
};
</script>
