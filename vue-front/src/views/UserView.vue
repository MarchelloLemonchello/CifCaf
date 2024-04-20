<script setup>
import { reactive , onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import UserBoard from '@/components/UserBoard.vue';
import UsersPlantsList from '@/components/UsersPlantsList.vue';
import TheCalendar from '@/components/TheCalendar.vue';

const token = JSON.parse(localStorage.getItem('plantToken'))
// console.log(token);

const usersPlantsArray = reactive([])
const router = useRouter()

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

const exit = () => {
  localStorage.clear('plantToken')
  router.push('/login')
}


</script>

<template>
  <div class="flex user__wrapper">
    <h2>Добро пожаловать</h2>
    <button
      class="btn-reset user__unlog-btn"
      @click="exit"
    >Выйти</button>
  </div>
  <UsersPlantsList 
    :props="usersPlantsArray.value" 
    :plansListUpdate="plansListUpdate"
  />
</template>

<style>
.user__wrapper {
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 2px solid #FFF ;
}

.user__unlog-btn {
  padding: 15px 20px;
  background-color: #c33737;
  border-radius: 20px;
  color: #FFF;
  transition: all .2s ease-in-out;
}

.user__unlog-btn:hover {
  background-color: #a73232;
  
}
</style>