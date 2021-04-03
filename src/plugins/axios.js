import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:8080/',
            /* headers: {
                "Authorization": "abc123",
            } */
        })
    }
})