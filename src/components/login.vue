<template>
  <div class="login">
    <div class="tips">
      <h1>登录</h1>
      <a>需要登陆，请输入access code。</a>
      <div class="input">
        <n-input v-model:value="aimeCard" class="aimeInput" type="text" placeholder="Access Code"/>
      </div>
      <n-button type="success" @click="openURL('/dashboard')">
        登录
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {aimeCard} from "@/components/ts/useStorage";
import {NInput,NButton} from 'naive-ui'
function openURL(url: string) {
  window.open(url)
}

console.log(aimeCard.value);
</script>

<style lang="scss">
.login {
  width: 50em;
  display: flex;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  padding: 1em;

  .tips {
    width: 100%;

    h1 {
      font-size: 2em;
    }

    a {
      font-size: 1.5em;
    }

    .input {
      padding-top: 1em;
      padding-bottom: 1em;
      width: 100%;
      .aimeInput{
        width:25em;
      }

    }

  }
}
</style>