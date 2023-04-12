import personView from "@/views/person/PersonView.vue";
import personChildren from "@/router/personChildren";
import workStationChildren from "@/router/workStationChildren";
import workStation from "@/views/workStation/WorkStationView.vue"
import about from "@/views/AboutView.vue"
const homeChildren = [
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
        path: 'workStation',
        name: 'workStation',
        component: workStation,
        children: workStationChildren,
        meta:{
            icon: 'Printer'
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
        path: 'workStation',
        name: 'workStation',
        component: workStation,
        children: workStationChildren,
        meta:{
            icon: 'Printer'
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
        path: 'workStation',
        name: 'workStation',
        component: workStation,
        children: workStationChildren,
        meta:{
            icon: 'Printer'
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
        path: 'about',
        name: 'about',
        component: about,
        meta:{
            icon: 'Football'
        }
    },
    
]
export default homeChildren