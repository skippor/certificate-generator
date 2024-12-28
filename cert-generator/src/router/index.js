import { createRouter, createWebHashHistory } from 'vue-router'

import CertRoot from '../views/CertRoot.vue'
import CertView from '../views/CertView.vue'
import CertIssue from '../views/CertIssue.vue'
import CertRequest from '../views/CertRequest.vue'
import CertImport from '../views/CertImport.vue'
import CertConvert from '../views/CertConvert.vue'


const routes = [
    {
        path: '/',
        redirect: '/cert/view'
    },
    {
        path: '/cert/root',
        component: CertRoot
    },
    {
        path: '/cert/view',
        component: CertView
    },
    {
        path: '/cert/issue',
        component: CertIssue
    },
    {
        path: '/cert/request',
        component: CertRequest
    },
    {
        path: '/cert/import',
        component: CertImport
    },
    {
        path: '/cert/convert',
        component: CertConvert
    }
]

const Router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default Router