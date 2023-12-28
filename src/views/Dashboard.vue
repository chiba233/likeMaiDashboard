<template>
  <div class="backBody">
    <div class="title">
      <Title></Title>
    </div>
    <div class="menu">
      <Menu></Menu>
    </div>
    <div>
      <Botton></Botton>
    </div>
  </div>
</template>


<script setup lang="ts">

import Title from "@/components/dashboard/title.vue";
import Menu from "@/components/dashboard/menu.vue";
import Botton from "@/components/dashboard/bottom.vue";
</script>
```
<style>
.backBody {
  width: 100%;
  height: 100%;
  background-color: #51bcf3;
  flex-direction: column;
  display: flex;

  .title {
    display: flex;
    justify-content: center;
  }

  .menu {
    display: flex;
    justify-content: center;
  }

}
</style>
