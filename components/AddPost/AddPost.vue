<template>
    <form class="AddPost" action method autocomplete="off" novalidate :submit="submit">
        <div class="AddPost-Field">
            <InputText
                :type="'text'"
                :name="'add_post'"
                :value="value"
                :change="change"
                :autocomplete="false"
                :placeholder="'Добавить новость'"
            />
        </div>
        <div class="AddPost-Button">
            <Button :text="'Опубликовать'" :type="'submit'" :click="submit"/>
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
        submit: Function
    },
    components: {
        InputText,
        Button
    }
};
</script>
