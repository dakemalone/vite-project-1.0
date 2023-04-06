<template>
    <el-scrollbar max-height="200px">
        <div style="margin: 20px"/>
        <el-form
                :label-position="labelPosition"
                :model="formLabelAlign"
                label-width="100px"
                style="max-width: 460px;"
        >
            <el-form-item>
                <el-col :span="8">
                    <el-form-item :label="person.name.key">
                        <el-input v-model="person.name.value" placeholder="请输入你的姓名"/>
                    </el-form-item>
                </el-col>
                <el-col :span="1">
                    <div/>
                </el-col>
                <el-col :span="6">
                    <el-form-item :label="person.age.key"
                                  :rules="[
                                      {required:true,message: 'age is required'},
                                      {type: 'number',message: 'age must be a number'}
                                  ]"
                    >
                        <el-input v-model.number="person.age.value" placeholder="请输入你的年龄"/>
                    </el-form-item>
                </el-col>
                <el-col :span="1">
                    <div/>
                </el-col>
                <el-col :span="8">
                    <el-form-item :label="person.gender.key">
                        <el-radio-group v-model="person.gender.value">
                            <el-radio label="男"/>
                            <el-radio label="女"/>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-col :span="11">
                    <el-form-item :label="person.factory.key">
                        <el-select v-model="person.factory.value" placeholder="请选择工厂">
                            <el-option-group>
                                <el-option label="smt">smt</el-option>
                                <el-option label="hud">hud</el-option>
                                <el-option label="cms">cms</el-option>
                            </el-option-group>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="2">
                    <div/>
                </el-col>
                <el-col :span="11">
                    <el-form-item :label="person.department.key">
                        <el-select v-model="person.department.value" placeholder="请选择部门">
                            <el-option-group>
                                <el-option label="ipqc">ipac</el-option>
                                <el-option label="打螺丝">daluosi</el-option>
                                <el-option label="inputwhite">滴白胶</el-option>
                            </el-option-group>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item :label="person.role.key">
                <el-checkbox-group v-model="person.role.value">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item :label="person.email.key">
                <el-input v-model="person.email.value"/>
            </el-form-item>
            <el-form-item :label="person.telephone.key">
                <el-input v-model="person.telephone.value"/>
            </el-form-item>
        </el-form>
    </el-scrollbar>
</template>

<script>
import {reactive} from 'vue'
import person from "@/pojo/person";

export default {
    setup() {
        const labelPosition = 'top'
        const formLabelAlign = reactive({
            name: '',
            region: '',
            type: '',
        })
        return {
            labelPosition,
            formLabelAlign,
            person,
        }
    }
}
</script>
