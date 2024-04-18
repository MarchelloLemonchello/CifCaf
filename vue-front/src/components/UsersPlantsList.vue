<script setup>
import {reactive} from 'vue';
import UsersPlant from './UsersPlant.vue';

const props = defineProps({
  props: Object
})
</script>

<template>
  <div class="users-plants">
    <div class="users-plants__control flex">
      <select class="users-plants__select">
        <option value='name'>По названию</option>
        <option value='watering'>Ближайший полив</option>
      </select>
      <button 
        class="btn-reset users-plants__done-btn"
        @click="$router.push('/garden')"
      >
        Добавить
      </button>
    </div>
    <ul class="list-reset users-plants__list" v-if="true">
      <UsersPlant v-for="plant in props.props" :key="plant.id" :plant="plant"/>
    </ul>
  </div>
</template>

<style>
.users-plants {
  padding: 35px 70px;
  margin-bottom: 50px;
  background-color: var(--form-1);
  border-radius: 20px;
}

.users-plants__control {
  align-items: center;
  justify-content: space-between;
  padding: 14px 25px;
  background-color: var(--txt-1);
  border-radius: 14px;
}

.users-plants__list {
  margin-top: 45px;
}

.users-plants__list li:not(:last-child) {
  margin-bottom: 25px;
}

.users-plants__done-btn {
  padding: 10px 60px;
  color: var(--txt-4);
  background-color: var(--form-2);
  border-radius: 14px;
  font-size: 20;
  transition: all .2s ease-in-out;
}

.users-plants__done-btn:hover {
  color: var(--txt-2);
  background-color: var(--form-3);
}

.users-plants__select {
  padding: 10px 20px;
  color: var(--txt-1);
  background-color: var(--bg-2);
  border-radius: 20px;
}
</style>