<template>
<div id="workStationEdit">
    <h2>work edit</h2>
    <h1>{{ store.asideWidth }}</h1>
</div>
</template>

<script>
import { useCounterStore } from '@/store/index'
export default {
    name: "workStationEdit",
    setup() {
        const store = useCounterStore();
        console.log(store.asideWidth)
        return {
            store
        }
    }
}
</script>

<style scoped>

</style>