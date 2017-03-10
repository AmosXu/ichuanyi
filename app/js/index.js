require('../css/base.scss');
require('../css/swiper.min.scss');
require('../css/app.scss');
import Swiper from '../js/swiper.min.js';
import Vue from 'vue';
import axios from 'axios';
import ImagePerview from '../components/ImagePreview.vue';

new Vue({
    el: '#page',
    data: {
        banners: "",
        inSeason: "",
        buyBlockLeft: "",
        buyBlockRight: "",
        suitTabs: "",
        modules: "",
        choicenessList: ""
    },
    filters: {
        addDomain: function (value) {
          if (!value) return ''
          return 'https://image1.ichuanyi.cn/' + value
        }
    },
    created:function(){
        axios.get('http://127.0.0.1:9977/ichuanyi/resource/aa.json').then(function(data){
            data = data['data']['data'];
            this.banners = data['banner'];
            this.inSeason = data['inSeason'];
            this.buyBlockLeft = data['buyBlockList'][0];
            this.buyBlockRight = [data['buyBlockList'][1], data['buyBlockList'][2]];
            this.suitTabs = data['suitTabs'];
            this.modules = data['modules'];
        }.bind(this)).then(function(){
            var mySwiper = new Swiper ('.banner', {
                autoplay: 3000,
                loop: true,
                lazyLoading : true,
                autoplayDisableOnInteraction: false,
                pagination: '.swiper-pagination'
            })       
            var mySwiper = new Swiper ('.swiper-container-module', {
                lazyLoading : true,
                slidesPerView: 2.5,
                spaceBetween: 10
            })
        })

        axios.get('http://127.0.0.1:9977/ichuanyi/resource/bb.json').then(function(data){
            this.choicenessList = data['data']['data']['result'];
        }.bind(this))
    },
    mounted: function () {
        this.$nextTick(function () {
            window.addEventListener('scroll', function() {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if(document.documentElement.scrollHeight - 10 < document.documentElement.clientHeight + scrollTop ) {
                    //loading
                }  
            })
        })
    },
    methods: {

    },
    components: {
        'image-preview': ImagePerview
    }
})  

