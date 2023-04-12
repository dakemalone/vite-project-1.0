<template>
  <el-row id="personList">
    <h2>person list</h2>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Name" width="180">
        <template #default="scope">
          <el-popover
            effect="light"
            placement="top"
            trigger="hover"
            width="auto"
          >
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="Age"></el-table-column>
      <el-table-column label="School"></el-table-column>
      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
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

export default {
  name: "PersonList",
  components: { PersonForm },
  data() {
    return {
      checked: false,
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

    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    return {
      person,
      tableData,
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
