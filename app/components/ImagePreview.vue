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
        },
        filters: {
            addDomain: function (value) {
              if (!value) return ''
              return 'https://image1.ichuanyi.cn/' + value
            }
        }
    }
</script>

<style>
.one-image-preview {
    overflow: hidden;
    width: 620px;
}
.one-image-preview img {
    width: 620px;
}
</style>