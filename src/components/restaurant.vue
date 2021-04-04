<template>
    <div style="width:100%">
        <b-row class="mt-5" style="width:100%">
            <b-col cols="12" lg="8" xl="8">
                <b-row class="ml-5 margin-mobile">
                    <b-col cols="12" sm="4" md="3" lg="4" xl="3" style="height:100%">
                        <div>
                            <b-img class="container-img" fluid :src="restaurant.restaurante_url" />
                        </div>
                    </b-col>
                    <b-col fluid="sm" cols="12" sm="8" md="8" lg="8" xl="8" class="info-restaurant">
                        <h1 class="h2 title">
                            {{restaurant.restaurante_nome}}
                        </h1>
                        <p class="text">{{restaurant.restaurante_descricao}}</p>
                        <b-button variant="light" class="back" @click="visibleTime = true">Horários de atendimento</b-button>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" lg="4" xl="4" class="none">
                <div class="text-right" style="width:70%; margin: auto; ">
                    <b-button variant="light" class="back" @click="back"><font-awesome-icon class="float-right" icon="chevron-left" /></b-button>
                </div>
            </b-col>
        </b-row>
        <b-row style="width:100%">
            <b-col cols="12" sm="12" lg="8" xl="8">
                <b-row class="mt-4 ml-5 margin-mobile">
                    <b-col>
                        <b-button-group style="width:100%">
                            <b-button variant="light" class="search-input-but none-input" disabled>Buscar no cardápio</b-button>
                            <b-form-input id="`type-search`" class="search-input"  type="search" v-model="search"></b-form-input>
                        </b-button-group>
                    </b-col>
                </b-row>
                <b-row class="mt-4 ml-5 margin-mobile">
                    <b-col  style="width:100%">
                        <b-button variant="light" class="button-colapse" :class="visibleLunch ? null : 'collapsed'" :aria-expanded="visibleLunch ? 'true' : 'false'" aria-controls="collapse-1" @click="visibleLunch = !visibleLunch">
                            Almoços <font-awesome-icon class="float-right" :icon="visibleLunch ? 'chevron-down' : 'chevron-right'" />
                        </b-button>
                        <b-collapse id="collapse-1" v-model="visibleLunch" class="mt-2">
                           <b-row>
                                <template v-for="lunch in lunchs" >
                                    <b-col cols="12" sm="12" md="6" lg="12" xl="6" :key="'lunch' + lunch.produto_id" class="mt-3">
                                        <MiniCardRestaurant @openCardRestaurant="openCardRestaurant($event)" :product="lunch"></MiniCardRestaurant>
                                    </b-col>
                                </template>
                            </b-row>
                        </b-collapse>
                    </b-col>
                </b-row>
                <b-row class="mt-3 ml-5 margin-mobile">
                    <b-col  style="width:100%">
                        <b-button variant="light" class="button-colapse" :class="visibleDrinks ? null : 'collapsed'" :aria-expanded="visibleDrinks ? 'true' : 'false'" aria-controls="collapse-2" @click="visibleDrinks = !visibleDrinks">
                            Bebidas <font-awesome-icon class="float-right" :icon="visibleDrinks ? 'chevron-down' : 'chevron-right'" />
                        </b-button>
                        <b-collapse id="collapse-2" v-model="visibleDrinks" class="mt-2">
                            <b-row>
                                <template v-for="drink in drinks" >
                                    <b-col cols="12" sm="12" md="6" lg="12" xl="6" :key="'drink' + drink.produto_id" class="mt-3">
                                        <MiniCardRestaurant @openCardRestaurant="openCardRestaurant($event)" :product="drink"></MiniCardRestaurant>
                                    </b-col>
                                </template>
                            </b-row>
                        </b-collapse>
                    </b-col>
                </b-row>
                <b-row class="mt-3 ml-5 margin-mobile">
                    <b-col  style="width:100%">
                        <b-button variant="light"  class="button-colapse" :class="visibleDessert ? null : 'collapsed'" :aria-expanded="visibleDessert ? 'true' : 'false'" aria-controls="collapse-3" @click="visibleDessert = !visibleDessert">
                            Sobremesas <font-awesome-icon class="float-right" :icon="visibleDessert ? 'chevron-down' : 'chevron-right'" />
                        </b-button>
                        <b-collapse id="collapse-3" v-model="visibleDessert" class="mt-2">
                            <b-row>
                                <template v-for="dessert in desserts" >
                                    <b-col cols="12" sm="12" md="6" lg="12" xl="6" :key="'dessert' + dessert.produto_id" class="mt-3">
                                        <MiniCardRestaurant @openCardRestaurant="openCardRestaurant($event)" :product="dessert"></MiniCardRestaurant>
                                    </b-col>
                                </template>
                            </b-row>
                        </b-collapse>
                    </b-col>
                </b-row>
                <b-row class="mt-3 mb-2 ml-5 margin-mobile">
                    <b-col  style="width:100%">
                        <b-button variant="light" class="button-colapse" :class="visibleFollow ? null : 'collapsed'" :aria-expanded="visibleFollow ? 'true' : 'false'" aria-controls="collapse-4" @click="visibleFollow = !visibleFollow">
                            Acompanhamento <font-awesome-icon class="float-right" :icon="visibleFollow ? 'chevron-down' : 'chevron-right'" />
                        </b-button>
                        <b-collapse id="collapse-4" v-model="visibleFollow" class="mt-2">
                            <b-row>
                                <template v-for="follow in follows" >
                                    <b-col cols="12" sm="12" md="6" lg="12" xl="6" :key="'follow' + follow.produto_id" class="mt-3">
                                        <MiniCardRestaurant @openCardRestaurant="openCardRestaurant($event)" :product="follow"></MiniCardRestaurant>
                                    </b-col>
                                </template>
                            </b-row>
                        </b-collapse>
                    </b-col>
                </b-row>
            </b-col>
            <b-col fluid="sm" cols="12" lg="4" xl="4" style="width:100%" class="none">
                <div class="mt-4 mb-4" style="height:92%; width:70%; margin: auto; background:#E6E6E6 "></div>
            </b-col>
        </b-row>
        <b-row class="mt-3 mb-3" style="width:100%">
            <div>
                <template v-if="visible">
                    <b-modal id="modal-center" size="lg" :visible="visible" centered hide-footer no-close-on-backdrop @hide="visible =  false">
                      <template >
                          <BigCardProduct :product="product"> </BigCardProduct>
                      </template>
                    </b-modal>
                </template>
            </div>  
            <div>
                <template v-if="visibleTime">
                    <b-modal id="modal-times" size="lg" :visible="visibleTime" centered hide-footer no-close-on-backdrop @hide="visibleTime =  false">
                      <template>
                          <TimeCard :times="dates"></TimeCard>
                      </template>
                    </b-modal>
                </template>
            </div>  
        </b-row>
    </div>
</template>
<script>
import _ from 'lodash'
import MiniCardRestaurant from  './product/miniCardProduct.vue'
import BigCardProduct from  './product/BigCardPruduct'
import TimeCard from './restaurant/timeCard'
export default {
    components:{
        MiniCardRestaurant,
        BigCardProduct,
        TimeCard
    },
    data() {
        return{
            id: 0,
            dates: false,
            visibleTime: false,
            visibleLunch: true,
            visibleDrinks: false,
            visibleDessert: false,
            visibleFollow: false,
            visible: false,
            lunchs: [],
            drinks: [],
            desserts: [],
            follows: [],
            restaurant: Object,
            products: [],
            allProducts: [],
            search: '',
            product: []
        }
    },
    mounted(){
        this.getId()
        this.executeRequest()
    },
    watch:{
        'search': 'filter' 
    },
    methods:{
        back () {
            this.$router.push(`/`)
        },
        getId () {
            this.id = this.$route.params.id
        },
        executeRequest () {
            this.$http.get(`/restaurant/${this.id}`).then(res => {
				this.restaurant = res.data
			})
            
            this.$http.get(`/times/${this.id}`).then(res => {
                if (res.data.length > 0) {
				    this.dates = _.groupBy(res.data, (date) => {
                        return date.horario_semana
                    })
                }
			})
            
            this.$http.get(`/restaurant/products/${this.id}`).then(res => {
				this.allProducts = res.data
				this.products = _.cloneDeep(this.allProducts)
                this.filterCentral()
			})
        },
        filter (val) {
            val.toLowerCase()
            if (val == '') {
                this.products = _.cloneDeep(this.allProducts)
            } else {
                let aux = []
                _.forEach(this.allProducts, function(obj){ 
                    if (obj.produto_nome.toLowerCase().match(val)) {
                        aux.push(obj)
                    }
                })
                this.products = _.cloneDeep(aux)
            }
            this.filterCentral()

            this.visibleLunch = true
            this.visibleDrinks = true
            this.visibleDessert = true
            this.visibleFollow = true
        },
        filterCentral() {
            this.filterLunch()
            this.filterDrinks()
            this.filterDessert()
            this.filterFollow()
        },
        filterLunch () {
            this.lunchs = _.filter(this.products, (product) => {
                return product.produto_tipo == 1
            })
        },
        filterDrinks () {
            this.drinks = _.filter(this.products, (product) => {
                return product.produto_tipo == 2
            })
        },
        filterDessert () {
            this.desserts = _.filter(this.products, (product) => {
                return product.produto_tipo == 3
            })
        },
        filterFollow () {
            this.follows = _.filter(this.products, (product) => {
                return product.produto_tipo == 4
            })
        },
        openCardRestaurant (product) {
            this.product = product
            this.visible = true
        }
    },
}
</script>
<style scoped>
    .button-colapse {
        width: 100%;
        background-color: #fff;
        border:0px;
        box-shadow: 0px;
        border-bottom:1px solid #404040;
        text-align: left;
        border-radius: 0px;
        font: normal 16px;
        font-weight: 500;
        letter-spacing: 0px;
        color: #404040;
        opacity: 1;
    }
    
    .button-colapse:hover {
         width: 100%;
        background-color: #fff;
        border:0px;
        box-shadow: 0px;
        border-bottom:1px solid #404040;
        text-align: left;
        border-radius: 0px;
        font: normal 16px;
        font-weight: 500;
        letter-spacing: 0px;
        color: #404040;
        opacity: 1;
    }

    .container-img{
        object-fit: cover;
        width:100%;
        max-height:150px;
        height: auto;
        background: transparent 0% 0% no-repeat padding-box;
        opacity: 1;
    }

    .search-input{
        width: 100%;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
        background: #E6E6E6 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 4px #00000029;
        border-top: white;
        border-left: white;
        opacity: 1;
        border-radius: 0px 20px 20px 0px;
        padding-left:35px;
        font-weight: 500;
        color:000
    }

    .search-input-but{
        height: 39px;
        background: #FBFBFB 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 4px #00000029;
        border-top: white;
        opacity: 1;
        border-radius: 20px 0px 0px 20px;
        padding-left:35px;
        font-weight: 500;
        color:000
    }

    .title{
        color: #404040c2;
        font-family: normal normal medium 24px Montserrat;
        font-size: 24px;
        height: 29px;
        margin-left: auto;
        margin-right: auto;
    }

    .text{
        color: #404040c2;
        font-family: normal normal medium 16px Montserrat;
        font-size: 16px;
        letter-spacing: 0px;
        opacity: 1;
    }
    
    .back {
        color: #fff;
        background: #009CA3;
        border: #009CA3;
    }


    @media screen and (max-width: 992px) {
        .none {
            display: none;
        }
        .margin-mobile {
            margin-left: 20px !important;
        }
    }

    @media screen and (max-width: 574px) {
        .info-restaurant{
            margin-top: 10px
        }
        .container-img{
            max-height:300px;
        }
        .none-input {
            display: none;
        }
        .search-input { 
            border-radius: 20px;
        }
        .text {
            text-align: justify;
        }
    }

    @media screen and (max-width: 500px) {
        .col {
            padding-left: 0px !important;
            padding-right: 0px !important;
        }
    }

    @media screen and (min-width: 1600px) { 
        .container-img{
            max-height:200px;
        }
    }
</style>