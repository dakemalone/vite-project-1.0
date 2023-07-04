import workStationEdit from "@/views/workStation/workStationEdit.vue";
import workStationList from "@/views/workStation/workStationList.vue";
const workStationChildren = [
    {
        path: 'workStationEdit',
        name: '工单列表',
        component: workStationEdit,
    },
    {
        path: 'workStationList',
        name: '每日WIP',
        component: workStationList,
    }
]
export default workStationChildren