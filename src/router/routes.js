import personView from "@/views/person/PersonView.vue"
import personChildren from "@/router/personChildren"
import workStationChildren from "@/router/workStationChildren"
import workStation from "@/views/workStation/WorkStationView.vue"
import about from "@/views/AboutView.vue"
import equipment from '@/views/equipment/index.vue'
import check from '@/views/check/checkView.vue'
import system from '@/views/system/index.vue'
const routes = [
    {
        path: 'person',
        name: 'person',
        component: personView,
        children: personChildren,
        meta:{
            icon: 'Box'
        }
    },
    {
        path: 'workStation',
        name: 'workStation',
        component: workStation,
        children: workStationChildren,
        meta:{
            icon: 'Printer'
        }
    },
    {
        path: 'equipment',
        name: 'equipment',
        component: equipment,
        meta:{
            icon: 'Setting'
        }
    },
    {
        path: 'check',
        name: 'check',
        component: check,
        meta:{
            icon: 'Football'
        },
        children:[
            {path:'checkStation',name:'checkStation',component:() => import('@/views/check/checkStation.vue'),meta:{icon:'Setting',name:'点检工位'}},
            {path:'checkEquipment',name:'checkEquipment',component:() => import('@/views/check/checkEquipment.vue'),meta:{icon:'Setting',name:'点检设备'}},
            {path:'checkForm',name:'checkForm',component:() => import('@/views/check/checkForm.vue'),meta:{icon:'Football',name:'点检报表'}},
            {path:'checkItem',name:'checkItem',component:() => import('@/views/check/checkItem.vue'),meta:{icon:'Football',name:'点检项目'}},
            {path:'checkVersion',name:'checkVersion',component:() => import('@/views/check/checkVersion.vue'),meta:{icon:'Football',name:'点检版本'}},
        ]
    },
    {
        path: 'system',
        name: 'system',
        component: system,
        meta:{
            icon: "Football"
        },
        children:[
            {path:'linelist',name:'linelist',component:() => import('@/views/system/linelist.vue'),meta:{icon:'Football',name:'生产线'}},
        ]
    },
    {
        path: 'about',
        name: 'about',
        component: about,
        meta:{
            icon: 'Football'
        }
    },   
]
export default routes