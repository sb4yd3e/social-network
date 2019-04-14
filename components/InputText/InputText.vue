<template>
    <div class="InputText">
        <div class="input-text">
            <div class="input-text__header" v-if="label">
                <label class="input-text__label">{{label}}</label>
            </div>
            <div class="input-text__inner">
                <input
                    class="input-text__input"
                    :type="type"
                    :name="name"
                    :placeholder="placeholder"
                    v-model="model"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        type: String,
        name: String,
        value: String,
        placeholder: String,
        change: Function
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.change(value);
            }
        }
    }
};
</script>