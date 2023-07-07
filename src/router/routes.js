import IndexBoard from "@/views/board/IndexBoard.vue"
import workStationChildren from "@/router/workStationChildren"
import workStation from "@/views/workStation/WorkStationView.vue"
import about from "@/views/AboutView.vue"
import equipment from '@/views/equipment/index.vue'
import check from '@/views/check/checkView.vue'
import system from '@/views/system/index.vue'
import boardChildren from "./boardChildren"
import material from '@/views/material/MaterialView.vue'
import jig from '@/views/jig/index.vue'
const routes = [
    {
        path: 'board',
        name: '可视化看板',
        component: IndexBoard,
        children: boardChildren,
        meta:{
            icon: 'Box'
        }
    },
    {
        path: 'workStation',
        name: '投入产出',
        component: workStation,
        children: workStationChildren,
        meta:{
            icon: 'Printer'
        }
    },
    {
        path: 'equipment',
        name: '生产效率',
        component: equipment,
        meta:{
            icon: 'Setting'
        },
        children: [
            {
                path: 'spendTime',
                name: '过站时长',
                component: () => import('@/views/equipment/spendTime.vue')
            },
            {
                path: 'employeePerformance',
                name: '员工绩效',
                component: () => import('@/views/equipment/employeePerformance.vue')
            },
            {
                path: 'statitonData',
                name: '过站数据',
                component: () => import('@/views/equipment/stationData.vue')
            }
        ]
    },
    {
        path: 'check',
        name: '品质质量',
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
        name: '产品历史',
        component: system,
        meta:{
            icon: "Football"
        },
        children:[
            {path:'linelist',name:'linelist',component:() => import('@/views/system/linelist.vue'),meta:{icon:'Football',name:'生产线'}},
        ]
    },
    {
        path: 'material',
        name: '物料明细',
        component: material,
        meta: {
            icon: 'Football'
        },
        children: [
            {
                path: 'materialBoard',
                name: '物料看板',
                component: () => import('@/views/material/materialBoard.vue')
            },
            {
                path: 'orderMaterial',
                name: '工单物料',
                component: () => import('@/views/material/orderMaterial.vue')
            },
            {
                path: 'materialList',
                name: '物料清单',
                component: () => import('@/views/material/materialList.vue')
            },
            {
                path: 'warehouseHistory',
                name: '大仓发料历史',
                component: () => import('@/views/material/warehouseHistory.vue')
            }
        ]
    },
    {
        path: 'jig',
        name: '夹具',
        component: jig,
        meta: {
            icon: 'Setting'
        },
        children: [
            {
                path: 'jigList',
                name: '治具清单',
                component: () => import('@/views/jig/jigList.vue')
            },
            {
                path: 'jigHistory',
                name: '治具履历',
                component: () => import('@/views/jig/jigHistory.vue')
            },
            {
                path: 'jigDetail',
                name: '治具保养明细',
                component: () => import('@/views/jig/jigDetail.vue')
            }
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