<template>
    <section class="mt-2">
        <div class="d-flex item-align-center mlXxl">
            <p class="text-favorite-index me-5">{{ index }}</p>
            <img :src="img_url" class="img-favorit-template me-3">
            <p class="text-favorite-template me-5">{{ name }}</p>
            <p class="text-favorite-template me-5">{{  author_name }}</p>
            <p class="text-favorite-template me-5">{{ description }}</p>
            <p class="text-favorite-template">{{ time }}</p>
        </div>
    </section>
</template>
<script>
// | index | icon | name | author name | desc | time |
export default {
    props: {
        index: String,
        img_url: String,
        name: String,
        author_name: String,
        description: String,
        time: String
    }
}
</script>