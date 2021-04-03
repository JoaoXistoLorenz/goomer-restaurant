<template>
    <div style="width: 100%; margin:auto">
        <b-card class="mb-2 card-product" style="padding:0px;" @click="openCard">
            <b-row style="height:100%">
                <b-col fluid="sm" cols="12" style="width:100%">
                    <img class="img" :src="product.produto_url" />
                    <span v-if="product.produto_promocao_ativa == 1" class="promo">
                        <font-awesome-icon class="mr-1" icon="award" />Promo Ativa
                    </span>
                    <h3 class="product-name pl-4">{{product.produto_nome}}</h3>
                    <p class="product-desc ml-2 pl-4">{{product.produto_descricao}}</p>
                    <div v-if="product.produto_promocao_ativa == 1" class="bot-div">
                        <span class="value pl-4">R${{product.produto_preco_promocao.toFixed(2)}}</span>
                        <span class="old-value"><s>R${{product.produto_preco.toFixed(2)}}</s></span>
                    </div>
                    <div v-else class="bot-div pl-4">
                        <span class="value pl-4">R${{product.produto_preco.toFixed(2)}}</span>
                    </div>
                </b-col>
            </b-row>            
        </b-card>
    </div>
</template>
<script>

export default {
    name: "MiniCardProduct",
    props: [
       'product'
    ],
    methods:{
        openCard () {
            this.$emit('openCardRestaurant', this.product)
        }
    }
}
</script>
<style scoped>
    .img{
        max-height:113px;
        width: 113px;
        height: auto;
        padding: 1px;
        object-fit: cover;
        float:left;
    }

    .card-product {
        min-width: 100%;
        max-height: 115px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 2px 4px #00000029;
        border-radius: 4px;
        opacity: 1;
    }
    .card-product:hover {
        cursor: pointer;
        background: #009ba305;
    }
    .product-name {
        line-height: 1.3 !important;
        color: #404040c2;
        font-family: normal normal medium 24px Montserrat;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top:10px
    }
    .product-desc {
        color: #404040c2;
        font-family: normal normal medium 12px;
        padding-right:10px;
        font-size: 12px;
        max-height: 35px;
        overflow: hidden;
        margin-bottom: 8px;
    }
    .card-body {
        padding:0px
    }
    .value {
        text-align: left;
        font: normal normal medium 16px;
        letter-spacing: 0px;
        color: #009CA3;
        opacity: 1;
    }
    .old-value {
        margin-left: 5px;
        font: normal medium;
        font-size: 12px;
        letter-spacing: 0px;
        color: #989898;
        opacity: 1;
    }
    .promo {
        background: #2B0D61 0% 0% no-repeat padding-box;
        border-radius: 11px;
        opacity: 1;
        text-align: center;
        text-align: center;
        font: normal normal;
        font-size: 10px;
        padding: 5px 10px;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        float:right;
        margin-top: 8px;
        margin-right: 5px
    }

    @media screen and (max-width: 574px) {
        .text {
            text-align: justify;
        }
    }

    @media screen and (min-width: 1600px) {
        .card-product {
            max-height: 200px;
        }
        .img{
            max-height:150px;
            width: 150px;
            height: auto;
            padding: 1px;
            object-fit: cover;
            float:left;
        }
        .product-name { 
            font-size: 19px;
        }
        .product-desc {
            font-size: 14px;
            max-height: 63px;
        }
        .value {
            font: normal normal medium 16px;
            font-size: 19px;
        }
        .old-value {
            font-size: 14px;
        }
    }
</style>