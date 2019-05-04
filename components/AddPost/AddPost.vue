<template>
    <div class="AddPost Piece">
        <div class="AddPost-Field">
            <InputText :type="'text'" :name="'add_post'" :value="value" :change="change" :autocomplete="false" :placeholder="'Добавить сообщение'" />
        </div>
        <div class="AddPost-Button">
            <Button :text="'Опубликовать'" :click="submit"/>
        </div>
    </div>
</template>

<script>
import InputText from '../InputText/InputText.vue';
import Button from '../Button/Button.vue';

export default {
    props: {
        value: String,
        change: Function,
        submit: Function
    },
    components: {
        InputText,
        Button
    }
};
</script>
