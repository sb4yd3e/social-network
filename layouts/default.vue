<template>
    <div class="Layout" v-if="$store.state.layout.inited">
        <div class="Container">
            <div v-if="$store.state.layout.user.status" class="Layout-Body">
                <div class="Layout-Nav">
                    <Nav :signOut="signOut" :photo="$store.state.layout.user.photo" :nav="nav"/>
                </div>
                <div class="Layout-Content">
                    <main class="Layout-Main">
                        <nuxt/>
                    </main>
                </div>
            </div>
            <div v-else class="Layout-Auth">
                <Button text="Войти" :click="signIn"/>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav/Nav.vue';
import Button from '../components/Button/Button.vue';

export default {
    components: {
        Nav,
        Button
    },
    data() {
        return {
            nav: [
                {
                    name: 'Моя страница',
                    url: '/'
                },
                {
                    name: 'Новости',
                    url: '/feed'
                },
                {
                    name: 'Пользователи',
                    url: '/users'
                }
            ]
        };
    },
    methods: {
        signIn() {
            gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(data => {
                    window.location.reload();
                });
        },
        signOut() {
            gapi.auth2
                .getAuthInstance()
                .disconnect()
                .then(() => {
                    window.location.reload();
                });
        }
    },
    mounted() {
        gapi.load('auth2', () => {
            gapi.auth2
                .init({
                    client_id:
                        '702949505387-ik3m53aakhun7cppl5h72g9us21eg8me.apps.googleusercontent.com'
                })
                .then(() => {
                    this.$store.dispatch('fetchLayout', {
                        user: gapi.auth2.getAuthInstance().currentUser.get().w3
                    });
                });
        });
    }
};
</script>