import workStationEdit from "@/views/workStation/workStationEdit.vue";
import workStationList from "@/views/workStation/workStationList.vue";
const workStationChildren = [
    {
        path: 'workStationEdit',
        name: 'workStationEdit',
        component: workStationEdit,
    },
    {
        path: 'workStationList',
        name: 'workStationList',
        component: workStationList,
    }
]
export default workStationChildren