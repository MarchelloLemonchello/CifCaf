<script setup>
import { reactive , onMounted } from 'vue';
import axios from 'axios';
import UserBoard from '@/components/UserBoard.vue';
import UsersPlantsList from '@/components/UsersPlantsList.vue';
import TheCalendar from '@/components/TheCalendar.vue';

const token = JSON.parse(localStorage.getItem('plantToken'))
// console.log(token);

const usersPlantsArray = reactive([])

onMounted( () => {
  try {
    plansListUpdate()
  } catch (err) {
    console.log(err);
  }
})

async function plansListUpdate() {
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_API}UserPlant/${token}/GetUserPlants`)
    usersPlantsArray.value = data;
    // console.log(usersPlantsArray);
}

</script>

<template>
  <div class="flex user__wrapper">
    <UserBoard/>
    <TheCalendar/>
  </div>
  <UsersPlantsList :props="usersPlantsArray.value"/>
</template>

<style>
.user__wrapper {
  justify-content: space-between;
  padding-bottom: 80px;
  margin-bottom: 80px;
  border-bottom: 2px solid #FFF ;
}
</style>