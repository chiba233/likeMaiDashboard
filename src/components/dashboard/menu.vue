<template>
  <div class="menuBox">
    <div class="homeSelect">
      <img src="../../img/menu/menu_home_on.png" v-if="menuSelect==0" alt="home_on" @click="menuSelectFun(0)">
      <img src="../../img/menu/menu_home.png" v-if="menuSelect!==0" alt="home" @click="menuSelectFun(0)">
    </div>
    <div class="playData">
      <img src="../../img/menu/menu_playerdata.png" v-if="menuSelect!==1" alt="playData" @click="openURL('/dashboard/playdata')">
    </div>
  </div>
</template>


<script setup lang="ts">
import {menuSelect} from "@/components/ts/useStorage";
import {openURL} from "@/components/ts/normal";
import {menuSelectFun} from "@/components/ts/normal";

</script>


<style scoped lang="scss">
.menuBox {
  height: 10em;
  width: 30em;
  padding: 2em;
  .homeSelect{
    img{
      width: 6em;
      height: 3.8em;
    }
  }
}
</style>