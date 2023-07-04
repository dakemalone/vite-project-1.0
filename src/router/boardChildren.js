import SMTBoard from "@/views/board/SMTBoard.vue";
import KittingBoard from "@/views/board/KittingBoard.vue";
import HUDBoard from "@/views/board/HUDBoard.vue";

const boardChildren = [
    {
        path: 'kittingBoard',
        name: 'K仓看板',
        component: KittingBoard,
    },
    {
        path: 'SMTBoard',
        name: 'SMT看板',
        component: SMTBoard,
    },
    {
        path: 'HUDBoard',
        name: 'HUD看板',
        component: HUDBoard
    }
]
export default boardChildren