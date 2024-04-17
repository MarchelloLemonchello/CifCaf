<script setup>
import UserBoard from '@/components/UserBoard.vue';
import UsersPlantsList from '@/components/UsersPlantsList.vue';
</script>

<template>
  <div class="flex user__wrapper">
    <UserBoard/>
  </div>
  <UsersPlantsList/>
</template>

<style>
.user__wrapper {
  justify-content: space-between;
  padding-bottom: 80px;
  margin-bottom: 80px;
  border-bottom: 2px solid #FFF ;
}
</style>