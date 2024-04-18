<script setup>
import { onMounted , ref , reactive } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const id = route.params.category

const name = ref('')
const plantsArr = reactive([])

onMounted(async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_API}Category/getCategory/${id}`)
    name.value = data.name;
    const arr = await axios.get(`${import.meta.env.VITE_BASE_API}Category/getPlantsByCategory/${id}`)
    plantsArr.value = arr.data

  } catch (err) {
    console.log(err);
  }
})
</script>

<template>    
  <h2 class="garden__title">
    {{ name }}
  </h2>
  <ul class="list-reset flex garden-plants__list">
    <li 
      class="flex garden-plants__item"
      v-for="plant in plantsArr.value"
      :key="plant.id"
    >
      <img :src="plant.image" alt="">
      <div class="flex garden-plants__wrapper">
        <h3>
          {{ plant.name }}
        </h3>
        <p>
          {{ plant.wateringTime }}
        </p>
      </div>
      <button class="btn-reset garden-plants__btn">
        Добавить
      </button>
    </li>
  </ul>
</template>

<style>
.garden__title {
  margin: 0;
  margin-bottom: 80px;
  padding-bottom: 30px;
  color: var(--txt-1);
  font-size: 40px;
  letter-spacing: 2px;
  border-bottom: solid 2px #FFF ;
}

.garden-plants__list {
  flex-direction: row;
  flex-wrap: wrap;
  padding: 55px;
  background-color: var(--form-1);
  border-radius: 20px;
  gap: 50px;
}

.garden-plants__item {
  width: 280px;
  padding: 20px 30px;
  align-items: center;
  flex-direction: column;
  background-color: var(--txt-1);
  border-radius: 20px;
  transition: all .2s ease-in-out;
}

.garden-plants__item img {
  height: 210px;
  /* width: 200px; */
}

.garden-plants__btn {
  padding: 10px 60px;
  background-color: var(--form-2);
  width: 100%;
  border-radius: 20px;
  color: var(--txt-4);
  transition: all .2s ease-in-out;
}

.garden-plants__btn:hover {
  background-color: var(--bg-2);
  color: var(--txt-1);
}

.garden-plants__wrapper {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>