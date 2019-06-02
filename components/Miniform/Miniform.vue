<template>
    <form class="Miniform" action method autocomplete="off" novalidate :submit="submit">
        <div class="Miniform-Field">
            <InputText
                :type="'text'"
                :name="'add_post'"
                :value="value"
                :change="change"
                :autocomplete="false"
                :placeholder="placeholder"
            />
        </div>
        <div class="Miniform-Button">
            <Button :text="buttonText" :type="'submit'" :click="submit"/>
        </div>
    </form>
</template>

<script>
import InputText from '../InputText/InputText.vue';
import Button from '../Button/Button.vue';

export default {
    props: {
        value: String,
        change: Function,
        submit: Function,
        placeholder: String,
        buttonText: String
    },
    components: {
        InputText,
        Button
    }
};
</script>
