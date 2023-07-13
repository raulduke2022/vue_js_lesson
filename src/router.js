import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/coaches',
        },
        {
            path: '/coaches', component: () => import("./pages/coaches/CoachesList.vue"),
        },
        {
            path: '/coaches/:id',
            component: () => import("./pages/coaches/CoachDetail.vue"),
            props: true,
            children: [
                {
                    path: 'contact', component: () => import("./pages/coaches/ContactCoach.vue"),
                    props: true,
                },
            ]
        },
        {
            path: '/register', component: () => import("./pages/coaches/CoachRegistration.vue"),
        },
        {
            path: '/requests', component: () => import("./pages/requests/RequestsRecieved.vue"),
        },
        {
            path: '/:notFound(.*)', component: () => import("./pages/NotFound.vue"),
        },
    ]
})

export default router