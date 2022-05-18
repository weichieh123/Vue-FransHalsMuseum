<template>
  <div class="nav">
    <div class="button">
      <el-icon><Calendar /></el-icon>
    </div>
    <div class="button rotate">
      <el-icon><Ticket /></el-icon>
    </div>
    <div class="menu" @click="isOpen = !isOpen" :class="{active: isOpen}">
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
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 52px;
  height: 100vh;
  background-color: $color_dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include desktop {
    height: 52px;
    width: 100vw;
    flex-direction: row;
    justify-content: space-around;
  }
  .button {
    color: $color_yellow;
    width: 24px;
    padding: 10px;
    margin: 5px 0;
    box-sizing: content-box;
    cursor: pointer;
    &.rotate {
      transform: rotate(-45deg);
    }
  }
  .menu {
    width: 49px;
    height: 49px;
    background-color: $color_yellow;
    position: relative;
    border-radius: 100%;
    border: 5px solid $color_dark;
    margin-right: -10px;
    cursor: pointer;
    .line {
      display: block;
      position: absolute;
      background-color: $color_dark;
      width: 30px;
      height: 3.5px;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.4s ease;
      &.line1 {
        transform: translateY(-8px);
      }
      &.line3 {
        transform: translateY(8px);
      }
    }
    &.active {
      .line1 {
        transform: rotate(-45deg);
      }
      .line2 {
        transform: translateX(-20px) rotate(360deg);
        opacity: 0;
      }
      .line3 {
        transform: rotate(45deg);
      }
    }
  }
}
</style>
