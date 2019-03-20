<template>
    <header class="Header">
        <div class="Header-Inner">
            <div class="Header-Container Container">
                <div class="Header-Logo">
                    <nuxt-link class="Header-LogoLink" to="/">social network.</nuxt-link>
                </div>
                <div class="Header-UserBlock">
                    <div class="Header-SingIn">

                    </div>
                    <div class="Header-User">
                        
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
            dropdownVisibility: false,
        };
    }
};
</script>

<style>
@import './Header.css';
</style>

