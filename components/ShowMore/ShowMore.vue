<template>
    <div class="ShowMore">
        <Button :text="text" :click="click" />
    </div>
</template>

<script>
import Button from '../Button/Button.vue';

export default {
    components: {
        Button
    },
    props: {
        text: String,
        click: Function
    },
    data: () => ({
        dropdownVisible: false
    }),
    computed: {
        getLikeText() {
            return this.likes.find(item => item._id === this.currentUserId)
                ? `❤️ ${this.likes.length}`
                : `🖤 ${this.likes.length}`;
        }
    }
};
</script>
