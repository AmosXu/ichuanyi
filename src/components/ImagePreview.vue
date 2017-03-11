<template>
    <div class="one-image-preview">
        <img :src=" src | addDomain" alt="">
    </div>
</template>

<script>
    export default {
        name: 'image-preview',
        props: {
            src: {
              type: String
            }
        }
    }
</script>

<style lang="sass">
.one-image-preview {
    overflow: hidden;
    width: 620px;

    img {
        display: block;
        width: 100%;
    }
}
</style>