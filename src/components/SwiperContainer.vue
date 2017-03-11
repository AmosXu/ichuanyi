<template>
<div class="swiper-container-module swiper-container">
    <div class="swiper-wrapper">
        <div v-for="item in items" class="swiper-slide">
            <a :href="item.link"><img :src="item.image | addDomain" alt=""></a>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'swiper-container',
        props: {
            items: { }
        },
        mounted() {
            this.$nextTick( () =>
                new Swiper('.swiper-container-module', {
                    lazyLoading : true,
                    slidesPerView: 2.5,
                    spaceBetween: 10
                })
            )
        }
    }
</script>

<style lang="sass">
.swiper-container {
    clear: both;
    overflow: hidden;
    height: 100%;
    width: 100%;

    .swiper-wrapper {
        border: 0;

        .swiper-slide img {
            display: block;
            width: 100%;
        }
    }
}
</style>