<template>
    <div class="AddPost Piece">
        <div class="AddPost-Field">
            <InputText
                :type="'text'"
                :name="'add_post'"
                :placeholder="'Введите текст сообщения'"
                :value="this.$store.state.myPage.addPostInputValue"
                :change="(value) => { this.$store.commit('CHANGE_ADD_POST_INPUT_VALUE', value) }"
            />
        </div>
        <div class="AddPost-Button">
            <button
                class="Button"
                type="button"
                @click="() => { this.$store.dispatch('addPost') }"
            >Отправить</button>
        </div>
    </div>
</template>

<script>
import InputText from '../InputText/InputText.vue';

export default {
    components: {
        InputText
    }
};
</script>
