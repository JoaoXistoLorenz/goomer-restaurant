import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'
import Restaurant from './components/restaurant'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            component: Index

        },
        {
            path: "/restaurant/:id",
            component: Restaurant

        }
    ]
})
