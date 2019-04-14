<template>
    <div class="Aside Piece">
        <nav class="Aside-Nav">
            <div class="Aside-PhotoWrapper">
                <img class="Aside-Photo" :src="photo" alt="Фото профиля">
            </div>
            <ul class="Aside-List">
                <li class="Aside-Item" v-for="(item, index) in nav.list" :key="index">
                    <nuxt-link class="Link" :to="item.url">{{item.name}}</nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photo: '/images/photo-placeholder.jpg',
            nav: {
                list: [
                    {
                        name: 'Моя страница',
                        url: '/'
                    },
                    {
                        name: 'Новости',
                        url: '/feed'
                    },
                    {
                        name: 'Друзья',
                        url: '/friends'
                    },
                    {
                        name: 'Профиль',
                        url: '/profile'
                    }
                ]
            }
        };
    }
};
</script>
