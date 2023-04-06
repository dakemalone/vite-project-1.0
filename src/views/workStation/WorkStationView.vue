<template>
<div id="workStation">
    <span>work station</span>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "WorkStation",
    setup(){
        let arr = [1,2,3,4,];
        return {
            arr
        }
    }
}
</script>

<style scoped>

</style>