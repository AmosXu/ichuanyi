require('../css/base.scss');
require('../lib/swiper.min.scss');
require('../css/app.scss');
import Vue from 'vue';
import axios from 'axios';
import Swiper from '../lib/swiper.min.js';
import ImagePerview from '../components/ImagePreview.vue';
import SwiperContainer from '../components/SwiperContainer.vue';
import Choiceness from '../components/Choiceness.vue';

Vue.filter('addDomain', (value) => {
    if (!value) return ''
    return 'https://image1.ichuanyi.cn/' + value
})

new Vue({
    el: '#page',
    data: {
        banners: {},
        inSeason: {},
        buyBlockLeft: "",
        buyBlockRight: "",
        suitTabs: {},
        modules: "",
        choicenessList: [],
        fromPageId: 0,
        pageSize: 20,
        page: 1,
        pageCount: "",
        isLoading: false
    },
    created() {
        axios.get('/api?method=index.getHomeData').then( data => {
            data = data.data.data
            this.banners = data.banner
            this.inSeason = data.inSeason
            this.buyBlockLeft = data.buyBlockList[0]
            this.buyBlockRight = [data.buyBlockList[1], data.buyBlockList[2]]
            this.suitTabs = data.suitTabs
            this.modules = data.modules
        }).then( ()=> {
            new Swiper('.banner', {
                autoplay: 3000,
                loop: true,
                lazyLoading : true,
                autoplayDisableOnInteraction: false,
                pagination: '.swiper-pagination'
            })
        })

        this.getChoicenessList(this.fromPageId, this.pageSize, this.page++);
    },
    mounted() {
        this.$nextTick( () =>
            window.addEventListener('scroll', () => {
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                if(document.documentElement.scrollHeight - 10 < document.documentElement.clientHeight + scrollTop) {
                    this.getChoicenessList(this.fromPageId, this.pageSize, this.page++);
                }  
            })
        )
    },
    methods: {
        getChoicenessList(fromPageId, pageSize, page) {
            if(!this.isLoading && (this.pageCount >= page || this.pageCount == '')) {
                this.isLoading = true
                axios.get(`/api?fromPageId=${fromPageId}&pageSize=${pageSize}&viewUserId=&method=index.getChoicenessList&page=${page}`).then( (data) => {
                    this.pageCount = Math.ceil(data['data']['data']['total'] / pageSize)
                    let result = data.data.data.result
                    result['length'] = pageSize
                    result = [].slice.call(result)
                    result = result.filter( item => item )
                    this.choicenessList = this.choicenessList.concat(result)
                    this.isLoading = false
                })
            }
        }
    },
    components: {
        'image-preview': ImagePerview,
        'swiper-container': SwiperContainer,
        'choiceness': Choiceness
    }
})  

