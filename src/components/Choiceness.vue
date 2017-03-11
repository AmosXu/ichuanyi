<template>
    <div class="choiceness">
        <a :href="choiceness.link">
            <img class="goods-img" :src="choiceness.image" alt="">
        </a>
        <div class="shopper-info">
            <a :href="choiceness.shopKeeperLink"><img :src="choiceness.avatar | addDomain" alt="" class="shopper-img"></a>
            <span class="shopper-name" v-text="choiceness.username"></span>
            <div class="addlike-wrap">
                <span class="collect-count-num" v-text="choiceness.collectCount"></span>
                <span class="collect-icon love-icon"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'choiceness',
        props: {
            choiceness: { }
        }
    }
</script>

<style lang="sass">
.choiceness {
    .goods-img {
        display: block;
        width: 100%;
    }
    .shopper-info {
        width: 290px;
        padding-top: 8px;
        padding-bottom: 4px;
        padding-left: 10px;
        padding-right: 10px;
        overflow: hidden;
        box-sizing: border-box;

        .shopper-img {
            float: left;
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50px;
        }
        .shopper-name {
            position: relative;
            float: left;
            margin-top: 11px;
            margin-left: 3px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 120px;
        }
    }
}
</style>