<template>
    <div class="Sort">
        <span class="Sort-Label">Сортировать по:</span>
        <ul class="Sort-List">
            <li class="Sort-Item">
                <Link
                    :className="{ 'is-active': this.sortValue === 'date' }"
                    :text="`дате ${getDateEmoji}`"
                    :click="() => {sort('date', -sortDirection)}"
                />
            </li>
            <li class="Sort-Item">
                <Link
                    :className="{ 'is-active': this.sortValue === 'likesLength' }"
                    :text="`популярности ${getLikesEmoji}`"
                    :click="() => {sort('likesLength', -sortDirection)}"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import Link from '../Link/Link.vue';

export default {
    props: {
        sortValue: String,
        sortDirection: Number,
        sort: Function
    },
    components: {
        Link
    },
    computed: {
        getDateEmoji() {
            if (this.sortValue === 'date') {
                return this.sortDirection === 1 ? '👆' : '👇';
            } else {
                return '';
            }
        },
        getLikesEmoji() {
            if (this.sortValue === 'likesLength') {
                return this.sortDirection === 1 ? '👆' : '👇';
            } else {
                return '';
            }
        }
    }
};
</script>
