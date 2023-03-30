import personView from "@/views/person/PersonView.vue";
import personChildren from "@/router/personChildren";
import workStationChildren from "@/router/workStationChildren";
import workStation from "@/views/workStation/WorkStation.vue"
// import about from "@/views/AboutView.vue"
const homeChildren = [
    {
        path: 'person',
        name: 'person',
        component: personView,
        children: personChildren
    },
    {
        path: 'workStation',
        name: 'workStation',
        component: workStation,
        children: workStationChildren
    },
    // {
    //     path: 'about',
    //     name: 'about',
    //     component: about,
    // }
]
export default homeChildren