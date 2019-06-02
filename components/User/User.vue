<template>
    <nuxt-link class="User" :to="href">
        <div class="User-PhotoWrapper">
            <img class="User-Photo" :src="photo" alt="Фото пользователя">
        </div>
        <div class="User-Info">
            <h3 class="User-Name h5">{{fullName}}</h3>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        href: String,
        _id: String,
        photo: String,
        fullName: String,
        firstName: String,
        lastName: String
    }
};
</script>
