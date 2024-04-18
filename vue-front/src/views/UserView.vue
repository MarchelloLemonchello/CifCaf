<script setup>
import { reactive } from 'vue';
import UserBoard from '@/components/UserBoard.vue';
import UsersPlantsList from '@/components/UsersPlantsList.vue';
import TheCalendar from '@/components/TheCalendar.vue';

const actor = '7ac7b5ac-b281-48a7-8293-b0052646723f'

const usersPlantsArr = reactive([
  {
    id: 0,
    plantName: 'кактус',
    plantDescription: 'описание',
    plantImage: 'https://s.pfst.net/2011.09/7819528363cecf78a31e70166bb8cdbff95739da27_b.jpg',
    lastWateringTime: 1713455576,
    nextWateringTime: 1713455756,
    prog: 45
  },
  {
    id: 2,
    plantName: 'фикус',
    plantDescription: 'описание',
    plantImage: 'https://s.pfst.net/2011.09/7819528363cecf78a31e70166bb8cdbff95739da27_b.jpg',
    lastWateringTime: 1713454576,
    nextWateringTime: 1713456756,
    prog: 35
  },
  {
    id: 3,
    plantName: 'камень',
    plantDescription: 'описание',
    plantImage: 'https://s.pfst.net/2011.09/7819528363cecf78a31e70166bb8cdbff95739da27_b.jpg',
    lastWateringTime: 1713445576,
    nextWateringTime: 1713465756,
    prog: 50
  }
])

</script>

<template>
  <div class="flex user__wrapper">
    <UserBoard/>
    <TheCalendar/>
  </div>
  <UsersPlantsList :props="usersPlantsArr"/>
</template>

<style>
.user__wrapper {
  justify-content: space-between;
  padding-bottom: 80px;
  margin-bottom: 80px;
  border-bottom: 2px solid #FFF ;
}
</style>