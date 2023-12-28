<template>
  <div class="menuBox">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 10"
         preserveAspectRatio="none" style="height:10px">
      <path
          d="M0,10 v-5 q5,5 10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 v5 Z"
          fill="#7ed3ff"></path>
    </svg>
    <div class="list1">
      <div class="homeSelect">
        <img src="../../img/menu/menu_home_on.png" v-if="menuSelect===0" alt="home_on" @click="menuSelectFun(0)">
        <img src="../../img/menu/menu_home.png" v-if="menuSelect!==0" alt="home" @click="menuSelectFun(0)">
      </div>
      <div class="playData">
        <img src="../../img/menu/menu_playerdata.png" v-if="menuSelect!==1" alt="playData" @click="menuSelectFun(1)">
        <img src="../../img/menu/menu_playerdata_on.png" v-if="menuSelect=== 1" alt="playData_on"
             @click="menuSelectFun(1)">
      </div>
      <div class="friends">
        <img src="../../img/menu/menu_friend.png" v-if="menuSelect!==2" alt="friends" @click="menuSelectFun(2)">
        <img src="../../img/menu/menu_friend_on.png" v-if="menuSelect===2" alt="friends_on" @click="menuSelectFun(2)">
      </div>
      <div class="photos">
        <img src="../../img/menu/menu_photo.png" v-if="menuSelect!==3" alt="photos" @click="menuSelectFun(3)">
        <img src="../../img/menu/menu_photo_on.png" v-if="menuSelect===3" alt="photos_on" @click="menuSelectFun(3)">
      </div>
    </div>
    <div class="list2">
      <div class="recodes">
        <img src="../../img/menu/menu_record.png" v-if="menuSelect!==4" alt="record" @click="menuSelectFun(4)">
        <img src="../../img/menu/menu_record_on.png" v-if="menuSelect===4" alt="record_on" @click="menuSelectFun(4)">
      </div>
      <div class="events">
        <img src="../../img/menu/menu_map.png" v-if="menuSelect!==5" alt="record" @click="menuSelectFun(5)">
        <img src="../../img/menu/menu_map_on.png" v-if="menuSelect===5" alt="record_on" @click="menuSelectFun(5)">
      </div>
      <div class="collection">
        <img src="../../img/menu/menu_collection.png" v-if="menuSelect!==6" alt="collection" @click="menuSelectFun(6)">
        <img src="../../img/menu/menu_collection_on.png" v-if="menuSelect===6" alt="collection_on"
             @click="menuSelectFun(6)">
      </div>
      <div class="rank">
        <img src="../../img/menu/menu_ranking.png" v-if="menuSelect!==7" alt="collection" @click="menuSelectFun(7)">
        <img src="../../img/menu/menu_ranking_on.png" v-if="menuSelect===7" alt="collection_on"
             @click="menuSelectFun(7)">
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 10" preserveAspectRatio="none" style="height:10px">
      <path d="M0,0 v5 q5,5 10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 t10,0 v-5 Z" fill="#7ed3ff"></path>
    </svg>
  </div>
</template>


<script setup lang="ts">
import {menuSelect} from "@/components/ts/useStorage";
import {menuSelectFun} from "@/components/ts/normal";

</script>


<style scoped lang="scss">
.menuBox {
  display: flex;
  flex-direction: column;
  width: 28.5em;
  padding: 0.5em;

  img {
    padding-left: 0.25em;
    padding-right: 0.25em;
  }

  .list1 {
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #7ed3ff;

    img {
      padding-top: 0.5em;
      width: 6.5em;
      height: 4em;
    }
  }

  .list2 {
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #7ed3ff;

    img {
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      width: 6.5em;
      height: 4em;
    }
  }

}
</style>