<template>
  <el-container class="layout-cert-generator" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu router :default-openeds="['1']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Postcard /></el-icon>证书管理
            </template>
            <el-menu-item index="/cert/root" >根证书</el-menu-item>
            <el-menu-item index="/cert/view" >证书列表</el-menu-item>
            <el-menu-item index="/cert/issue" >证书签发</el-menu-item>
            <el-menu-item index="/cert/request" >证书请求</el-menu-item>
            <el-menu-item index="/cert/import" >证书导入</el-menu-item>
            <el-menu-item index="/cert/convert" >证书转换</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>UTF8</el-dropdown-item>
                <el-dropdown-item>GBK</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>编码</span>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, Postcard, Setting } from '@element-plus/icons-vue'
</script>

<style scoped>
html,body{
  padding: 0;
  margin: 0;
}

.layout-cert-generator .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-cert-generator .el-aside {
  color: var(--el-text-color-primary);
}
.layout-cert-generator .el-menu {
  border-right: none;
}
.layout-cert-generator .el-main {
  padding: 0;
}
.layout-cert-generator .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
