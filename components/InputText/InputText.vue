<template>
    <div class="InputText">
        <div class="InputText-Header" v-if="label">
            <label class="InputText-Label">{{label}}</label>
        </div>
        <div class="InputText-Inner">
            <input
                class="InputText-Input"
                :type="type"
                :name="name"
                :placeholder="placeholder"
                :autocomplete="autocomplete ? 'on' : 'off'"
                v-model="model"
            >
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
        autocomplete: Boolean,
        change: Function
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.change(value, this.name);
            }
        }
    }
};
</script>