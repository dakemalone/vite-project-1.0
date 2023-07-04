<template>
  <el-row id="personList">
    <el-scrollbar max-height="560px">
      <PersonTable></PersonTable>
    </el-scrollbar>
    <el-button style="width: 100%" text @click="dialogVisible = true">
      添加人员
    </el-button>
    <el-dialog v-model="dialogVisible" title="添加人员" width="40%">
      <PersonForm></PersonForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </el-row>
</template>

<script>
import { reactive, ref } from "vue";
import PersonForm from "@/components/PersonForm.vue";
import PersonTable from "@/components/tables/personTable.vue";

export default {
  name: "PersonList",
  components: { PersonForm, PersonTable },
  data() {
    return {
      checked: false,
      dataJson: [],
    };
  },
  setup() {
    let person = reactive({
      name: "",
      password: "",
      gender: "",
      age: "",
      factory: "",
      department: "",
      role: "",
      email: "",
      telephone: "",
      createTime: "",
    });
    const handleEdit = (index, row) => {
      console.log(index, row);
    };
    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    const dialogVisible = ref(false);
    return {
      person,
      handleDelete,
      handleEdit,
      dialogVisible,
    };
  },
};
</script>

<style scoped>
.el-table {
  min-height: 70vh;
}
</style>
