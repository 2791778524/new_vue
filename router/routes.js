import Dom from '../components/test.vue'
export default [
    {
        path:'/home',
        component: Dom,
        children:[
            {
                path:'name',
                component: () => import('../components/name.vue')
            },
            {
                path:'age',
                component: () => import('../components/age.vue')
            }
        ]
    },
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue')
    }
]