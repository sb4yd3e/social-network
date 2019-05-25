<template>
    <div class="Profile">
        <img class="Profile-Photo" :src="photo" alt="Фото профиля">
        <table class="Profile-Table">
            <tr class="Profile-Row">
                <td class="Profile-Cell">Имя:</td>
                <td class="Profile-Cell">{{firstName}}</td>
            </tr>
            <tr class="Profile-Row">
                <td class="Profile-Cell">Фамилия:</td>
                <td class="Profile-Cell">{{lastName}}</td>
            </tr>
            <tr class="Profile-Row">
                <td class="Profile-Cell">Email:</td>
                <td class="Profile-Cell">{{email}}</td>
            </tr>
            <tr class="Profile-Row" v-if="canChange">
                <td class="Profile-Cell">
                    <nuxt-link class="Link" :to="'/editProfile'">Изменить</nuxt-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        firstName: String,
        lastName: String,
        email: String,
        photo: String,
        canChange: Boolean,
    }
};
</script>
