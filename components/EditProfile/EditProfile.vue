<template>
    <form class="EditProfile" action method autocomplete="off" novalidate>
        <InputText
            :type="'text'"
            :label="'Имя'"
            :name="'firstName'"
            :value="firstName"
            :change="change"
            :autocomplete="false"
        />
        <InputText
            :type="'text'"
            :label="'Фамилия'"
            :name="'lastName'"
            :value="lastName"
            :change="change"
            :autocomplete="false"
        />
        <InputText
            :type="'text'"
            :label="'Email'"
            :name="'email'"
            :value="email"
            :change="change"
            :autocomplete="false"
        />
        <Button :text="'Сохранить'" :type="'submit'" :click="submit"/>
    </form>
</template>

<script>
import InputText from '../InputText/InputText.vue';
import Button from '../Button/Button.vue';

export default {
    props: {
        email: String,
        firstName: String,
        lastName: String,
        change: Function,
        submit: Function
    },
    components: {
        InputText,
        Button
    }
};
</script>
