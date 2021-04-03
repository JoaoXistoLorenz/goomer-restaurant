<template>
    <div style="width: 96%; margin-left:2%; margin-right:2%">
        <div class="circle text-center fechado">
            <div class="fechado-text">Fechado</div>
        </div>
        <b-card class="mb-2 card-restaurant" @click="redirect()">
            <b-row style="height:100%">
                <b-col fluid="sm" cols="4"  style="height:100%">
                    <img class="img" :src="restaurante.restaurante_url" />
                </b-col>
                <b-col fluid="sm" cols="8">
                    <h3 class="restaurant-name mb-2">{{restaurante.restaurante_nome}}</h3>
                    <p class="restaurant-end">{{restaurante.restaurante_endereco}}</p>
                </b-col>
            </b-row>            
        </b-card>
    </div>
</template>
<script>

export default {
    name: "MiniCardRestaurant",
    props: [
       'restaurante'
    ],
    mounted(){},
    methods:{
        redirect() {
            this.$router.push(`/restaurant/${this.restaurante.restaurante_id}`)
        }
    }
}
</script>
<style scoped>
    .card-body {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        height: 100px
    }
    .img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .circle {
        height: 40px;
        width: 40px;
        background: #B5ABD4;
        border-radius: 100px;
        border: 1px solid #B5ABD4;
        position: absolute;
        top: -15%;
        right: 1.5%;
        z-index:9999;
        color:#fff;
        font-size: 9px;
    }
    .card-restaurant {
        width: 100%;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 4px #00000029;
        border-radius: 4px;
        opacity: 1;
    }
    .card-restaurant:hover {
        cursor: pointer;
        background: #009ba305;
    }
    .aberto {
        background: #2B0D61;
        border: 1px solid #2B0D61;
    }
    .aberto-text {
        margin-top: 17%;
    }
    .fechado {
        background: #B5ABD4;
        border: 1px solid #B5ABD4;
    }
    .fechado-text {
        margin-top: 32%;
    }
    .restaurant-name {
        color: #404040c2;
        font-family: normal normal medium 24px Montserrat;
        font-size: 16px;
        margin-top: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .restaurant-end {
        color: #404040c2;
        font-family: normal normal medium 24px Montserrat;
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media screen and (min-width: 1600px) {
        .card-body {
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 5px;
            height: 130px
        }
    }
</style>