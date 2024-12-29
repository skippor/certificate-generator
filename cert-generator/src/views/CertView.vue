<template>
    <el-scrollbar>
        <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleDetail">详情</el-button>
                    <el-button link type="primary" size="small" @click="handleEdit">编辑</el-button>
                    <el-button link type="danger" size="small" @click="handleDelete">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'

const handleDetail = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, handleDetail',
    type: 'success',
  })
}

const handleEdit = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, handleEdit',
    type: 'warning',
  })
}

const handleDelete = () => {
    ElMessageBox.confirm(
        'handleDelete. Continue?',
        'handleDelete',
        {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        }
    )
    .then(() => {
        ElMessage({
            type: 'success',
            message: 'Delete completed',
        })
    })
    .catch(() => {
        ElMessage({
            type: 'info',
            message: 'Delete canceled',
        })
    })
}

import { ref } from 'vue'

const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 10 }).fill(item))
</script>

<style scoped>

</style>
