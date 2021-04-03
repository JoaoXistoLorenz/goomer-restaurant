<template>
    <div style="max-width: 100%; margin:auto">
        <div style="max-height:150px">
            <b-img class="img" :src="product.produto_url"></b-img>
        </div>
        <div>
            <div class="name mt-4">
                {{product.produto_nome}}
            </div>
            <div>
                <b-row style="width:100%">
                    <b-col cols="12" sm="9" md="9" lg="9" xl="9" class="pr-0">
                        <p class="text mt-2">
                            {{product.produto_descricao}}
                        </p>
                    </b-col>
                    <b-col cols="12" sm="3" md="3" lg="3" xl="3" class="text-right pr-0 mt-5 mt-sm-0">
                        <p class="value">
                            R${{product.produto_promocao_ativa ? product.produto_preco_promocao.toFixed(2) : product.produto_preco.toFixed(2)}}
                        </p>
                    </b-col >
                    <b-col class="pr-0 pt-0" cols="12" >
                        <hr class="pt-0 mt-0">
                    </b-col>
                </b-row>
            </div>
            <div style="width:100%">
                <b-input-group class="float-left btn-group btn-mob">
                    <b-input-group-prepend>
                      <b-button variant="light" class="input-number" @click="subtract">-</b-button>
                    </b-input-group-prepend>
                        <b-form-input type="text" class="input-number input-center" :value="inputNumber" min="1" disabled></b-form-input>
                    <b-input-group-append>
                      <b-button variant="light" class="input-number" @click="add">+</b-button>
                    </b-input-group-append>
                </b-input-group>
                <b-button variant="light" class="back float-right btn-add">Adicionar <span class="ml-sm-4">R${{result}}</span></b-button>

            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "BigCardProduct",
    props: [
       'product'
    ],
    data () {
        return{
            inputNumber: 1,
            value: this.product.produto_promocao_ativa ? this.product.produto_preco_promocao.toFixed(2) : this.product.produto_preco.toFixed(2),
            result: this.product.produto_promocao_ativa ? this.product.produto_preco_promocao.toFixed(2) : this.product.produto_preco.toFixed(2)
        }
    },
    methods:{
        subtract () {
            this.inputNumber = this.inputNumber > 1 ? this.inputNumber - 1 : 1
            this.calc()
        },
        add () {
            this.inputNumber = this.inputNumber + 1
            this.calc()
        },
        calc () {
            this.result = (this.inputNumber * this.value).toFixed(2)
        }
    }
}
</script>
<style scoped>
    .btn-group {
        width:150px
    }
    .btn-add {
        min-width: 97px !important;
    }
    .img {
        object-fit: cover;
        max-height: 150px;
        width: 100%;
        height: auto;
    }
    .name {
        font: normal normal medium 24px/29px Montserrat;
        font-size: 24px;
        letter-spacing: 0px;
        color: #404040;
        opacity: 1;
    }
    .text {
        text-align:justify;
        font: normal normal medium 16px/19px Montserrat;
        font-size: 14px;
        letter-spacing: 0px;
        color: #404040;
        opacity: 1;
    }
    .value {
        position:absolute;
        bottom:0;
        right:0;
        font: normal normal medium;
        font-size: 24px;
        letter-spacing: 0px;
        color: #009CA3;
        opacity: 1;
    }
    .back {
        color: #fff;
        background: #009CA3;
        border: #009CA3;
    }
    .input-number {
        background: #FFFFFF;
        border: 1px solid #E6E6E6;
        border-radius: 4px;
        opacity: 1;
        color: #009CA3;
        width: 40px;
        max-width: 50px;
    }
    .input-center {
        text-align: center;
    }
    .form-control:disabled {
        background: #FFFFFF;
    }
    @media screen and (max-width: 420px) {

        .btn-add {
            min-width: 100% !important;
            margin-top: 20px;
        }
        .btn-mob {
            width: 100% !important;
        }
        .input-number {
            
            max-width: 100%;
        }
    }
</style>