<template>
  <div class="nav-bar">
    <div class="button">
      <el-icon><Calendar /></el-icon>
    </div>
    <div class="button rotate">
      <el-icon><Ticket /></el-icon>
    </div>
    <div class="menu" @click="isOpen = !isOpen" :class="{ active: isOpen }">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
    <div class="button">
      <el-icon><Search /></el-icon>
    </div>
    <div class="button">
      <el-icon><Location /></el-icon>
    </div>
  </div>
  <div class="nav-menu-list" :class="[isOpen ? 'active' : 'inactive']">
    <div class="list-button">
      <span>VISIT</span> <el-icon><DArrowRight class="list-icon" /></el-icon>
    </div>
    <div class="list-button">
      <span>LEARN</span> <el-icon><DArrowRight class="list-icon" /></el-icon>
    </div>
    <div class="list-button">
      <span>SUPPORT</span> <el-icon><DArrowRight class="list-icon" /></el-icon>
    </div>
    <div class="list-button">
      <span>ABOUT</span> <el-icon><DArrowRight class="list-icon" /></el-icon>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
@import '@/assets/nav.scss';
</style>
