<template>
  <div class="mainBoard">
    <div class="maiMaiDXImg">
      <img src="../img/maimaidxex.jpg" alt="MaiMaiPicture">
    </div>
    <login></login>
  </div>
</template>

<script setup lang="ts">
import Login from "@/components/login.vue";
</script>

<style lang="scss">
.mainBoard {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  .maiMaiDXImg {
    display: flex;
    margin-top: 0.5em;
    margin-bottom: 1em;
    justify-content: center;
    img{
      height: 13em;
      width: 52em;
    }
  }

}

</style>