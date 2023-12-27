<template>
  <div class="main">
    <div class="title">
      <img src="../../img/logo.png" alt="logo">
    </div>
    <div class="setButton" @click="openURL('https://baidu.com/')">
      <img src="../../img/btn_setting.png" alt="setting">
    </div>
  </div>
</template>

<script setup lang="ts">
function openURL(url: string) {
  window.open(url)
}

</script>

<style lang="scss">
.main {
  display: flex;
  padding-top: 2em;
  justify-content: center;

  .title {
    position: absolute;

    img {
      height: 5em;
      width: 15em;
    }
  }

  .setButton {
    width: 25em;
    height: 5em;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;

    img {
      height: 2em;
      width: 2em;
    }
  }
}


</style>