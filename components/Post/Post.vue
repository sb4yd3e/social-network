<template>
    <article class="Post Piece">
        <header class="Post-Header">
            <h3 class="Post-Name h5">{{userName}}</h3>
            <time class="Post-Time">{{time}}</time>
        </header>
        <p class="Post-Text">{{text}}</p>
    </article>
</template>

<script>
export default {
    props: {
        userName: String,
        time: String,
        text: String
    }
};
</script>
