import personEdit from "@/views/person/PersonEdit.vue";
import personList from "@/views/person/PersonList.vue";
const personChildren = [
    {
        path: 'personList',
        name: 'personList',
        component: personList,
    },
    {
        path: 'personEdit',
        name: 'personEdit',
        component: personEdit,
    },
]
export default personChildren