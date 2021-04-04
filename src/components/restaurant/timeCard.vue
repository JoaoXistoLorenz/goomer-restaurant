<template>
    <div style="width: 100%;">
        <template v-if="times == false">
            <h3 class="title text-center">Este restaurante não possui horário de atendimento!</h3>
        </template>
        <template v-else>
            <b-row >
                <b-col v-for="time in times" cols="12" :key="''+time[0].horario_semana">
                    <b-table :key="'time'" small  striped :items="time" 
                        :fields="[ 
                            {key:'horario_inicio', label:day(time[0].horario_semana), thStyle:'width:100px;'},
                            {key:'horario_fim', label:''}
                        ]"
                    ></b-table>
                </b-col>
            </b-row>
        </template>
    </div>
</template>
<script>

export default {
    name: "TimeCard",
    props: [
       'times'
    ],
    mounted(){},
    methods:{
        day (day) {
            switch (day) {
                case 0:
                    return 'Domingo'
                case 1:
                    return 'Segunda'
                case 2:
                    return 'Terça'
                case 3:
                    return 'Quarta'
                case 4:
                    return 'Quinta'
                case 5:
                    return 'Sexta'
                case 6:
                    return 'Sábado'
                default:
                    return 'Não existe esse dia!'
            }
        }
    }
}
</script>
<style scoped>
    .title{
        color: #404040c2;
        font-family: normal normal medium 20px;
        font-size: 20px;
        margin-left: auto;
        margin-right: auto;
    }
</style>