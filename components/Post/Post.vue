<template>
    <article class="Post">
        <nuxt-link class="Post-Header" :to="link">
            <div class="Post-PhotoWrapper">
                <img class="Post-Photo" :src="creator.photo" alt="Фото автора поста" />
            </div>
            <div class="Post-Info">
                <h3 class="Post-Name h5">{{creator.fullName}}</h3>
                <time class="Post-Date">{{new Date(date).toLocaleString()}}</time>
            </div>
        </nuxt-link>
        <div class="Post-Body">
            <p class="Post-Text">{{text}}</p>
        </div>
        <footer class="Post-Footer">
            <div class="Post-FooterItem">
                <div @mouseenter="dropdownVisible = true" @mouseleave="dropdownVisible = false">
                    <Link :text="getLikeText" :click="() => {like(_id, currentUserId)}" />
                    <div class="Post-Dropdown" v-if="dropdownVisible && !!this.likes.length">
                        <div class="Post-DropdownInner">
                            <ul class="Post-DropdownList">
                                <li
                                    class="Post-DropdownItem"
                                    v-for="likeItem in this.likes.filter((item, i) => i < 4)"
                                    :key="likeItem._id"
                                >
                                    <nuxt-link
                                        class="Link"
                                        :to="$store.state.layout.user._id === likeItem._id ? '/' : `/users/${likeItem._id}`"
                                    >
                                        <img
                                            class="Post-DropdownImg"
                                            :src="likeItem.photo"
                                            :title="likeItem.fullName"
                                            :alt="likeItem.fullName"
                                        />
                                    </nuxt-link>
                                </li>
                                <li
                                    class="Post-DropdownItem"
                                    v-if="this.likes.length > 4"
                                >+{{this.likes.length - 4}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Post-FooterItem">
                <Link
                    v-if="creator._id === currentUserId"
                    :text="'Удалить'"
                    :click="() => {remove(_id)}"
                />
            </div>
        </footer>
    </article>
</template>

<script>
import Link from '../Link/Link.vue';

export default {
    components: {
        Link
    },
    props: {
        link: String,
        _id: String,
        currentUserId: String,
        date: String,
        text: String,
        creator: Object,
        likes: Array,
        like: Function,
        remove: Function
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
