<template>
    <div>
        <div class="div-title text-center">
            <h1 class="title h2">Bem-vindo ao Lista Rango</h1>
        </div>
        <div class="mb-5" style="width:100%">
            <b-form-input id="`type-search`" class="search-input"  type="search" v-model="search" placeholder="Buscar estabecimento"></b-form-input>
        </div>
        <b-row class="div-container-mini-card">
            <template v-for="rest in restaurants" >
                <b-col cols="12" sm="12" md="6" lg="6" xl="4" :key="'res' + rest.restaurante_id" class="m-fix">
                    <MiniCardRestaurant :restaurante="rest"></MiniCardRestaurant>
                </b-col>
            </template>
        </b-row>
    </div>
</template>
<script>
import MiniCardRestaurant from  './restaurant/miniCardRestaurant'
import _ from 'lodash'

export default {
    components:{
        MiniCardRestaurant
    },
    data() {
        return{
            interval: '',
            allRestaurants: [],
            restaurants: [],
            search: ''
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    mounted() {
        this.getRestaurants()
        this.interval = setInterval(() => {
            this.getRestaurants()
        }, 60000);
    },
    watch:{
        'search': 'filter' 
    },
    methods:{
        filter (val) {
            val.toLowerCase()
            if (val == '') {
                this.restaurants = _.cloneDeep(this.allRestaurants)
            } else {
                let aux = []
                _.forEach(this.allRestaurants, function(obj){ 
                    if (obj.restaurante_nome.toLowerCase().match(val)) {
                        aux.push(obj)
                    }
                })
                this.restaurants = _.cloneDeep(aux)
            }
        },
        getRestaurants() {
            this.$http.get('/restaurants').then(res => {
				this.allRestaurants = _.sortBy(res.data, (val) =>{return val.restaurante_aberto}).reverse()
                this.restaurants = _.cloneDeep(this.allRestaurants)
			})
        }
    }
}
</script>
<style scoped>
    .div-title{
        margin-top:25px;
        margin-bottom:30px;
        width:100%
    }
    .title{
        color: #404040c2;
        font-family: normal normal medium 24px Montserrat;
        font-size: 24px;
        height: 29px;
        margin-left: auto;
        margin-right: auto;
    }
    .search-input{
        width: 840px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
        background: #FBFBFB 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 4px #00000029;
        border-top: white;
        opacity: 1;
        border-radius: 20px;
        padding-left:35px;
        font-weight: 500;
        color:000
    }
    .div-container-mini-card{
        width: 90%;
        margin-right: auto;
        margin-left: auto
    }
    .mini-card {
        margin-bottom: 30px;
    }
    .m-fix {
        margin-top: 1.5rem !important
    }
    
    @media screen and (max-width: 1100px) {
        .search-input{
            width:90%
        }
    }

    @media screen and (max-width: 450px) {
        .div-container-mini-card {
            width: 100%;
        }
    }

    @media screen and (min-width: 1600px) {
        .m-fix {
            margin-top: 2rem !important
        }
    }

    @media screen and (min-width: 1660) {
        .div-container-mini-card {
            width: 70%;
        }
    }
</style>