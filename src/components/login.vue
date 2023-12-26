<template>
  <div class="login">
    <div class="tips">
      <h1>登录</h1>
      <a>测试,如果需要登陆请输入access code。</a>
      <div class="input">
        <n-input v-model:value="aimeCard" class="aimeInput" type="text" placeholder="基本的 Input"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {aimeCard} from "@/components/ts/useStorage";
import {NInput} from 'naive-ui'

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