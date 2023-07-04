<template>
  <div id="workStationEdit"></div>
</template>

<script>
import { useCounterStore } from "@/store/index";
export default {
  name: "workStationEdit",
  setup() {
    const store = useCounterStore();
    console.log(store.asideWidth);
    return {
      store,
    };
  },
};
</script>

<style scoped></style>
