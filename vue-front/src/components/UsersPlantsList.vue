<script setup>
import {computed, reactive , ref} from 'vue';
import UsersPlant from './UsersPlant.vue';

const props = defineProps({
  props: Array,
  plansListUpdate: Function
})

const nowTime = ref(Date.parse(new Date())) 

const updateNowTime = () => {
  nowTime.value = Date.parse(new Date())
}
const timeUpdate = () => {
  nowTime.value = Date.parse(new Date())
  console.log('время обновлено');
}

setInterval(timeUpdate, 60000);

const onChangeSelect = (event) => {
  sortType.value = event.target.value
}

const sortType = ref('name')


console.log(props.props);

const sortPlants = computed(()=>{
  if (props.props==undefined) {
    return []
  }
  const sortArr = props.props
  if (sortType.value=='watering') {
    return sortArr.sort((a,b)=>a.nextWateringTime-b.nextWateringTime)
  } 
  if (sortType.value=='name') { 
    console.log('по имени');   
    function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
    console.log( sortArr.sort(compare));
    return sortArr.sort(compare)
  }
  return sortArr
})

const isOpen = ref(false)
const modalInfo = reactive({
  name: '',
  description: '',
  image: '',
  day: 0,
  hour: 0,
  minutes: 0
})
const closeFunction = () => isOpen.value = false
const openFunction = () => isOpen.value = true
const addInfoAndOpen = (plant) => {
  // console.log(plant);
  const timeInterval = plant.nextWateringTime - plant.lastWateringTime
  console.log(timeInterval);
  modalInfo.name = plant.plantName
  modalInfo.description = plant.plantDescription
  modalInfo.image = plant.plantImage
  modalInfo.minutes = Math.floor(((timeInterval%86400)%3600)/60)
  modalInfo.hour = Math.floor((timeInterval%86400)/3600)
  modalInfo.day = Math.floor(timeInterval/86400)
  console.log(modalInfo);
  openFunction()
}


console.log(isOpen.value);

</script>

<template>
  <div class="users-plants">
    <div class="users-plants__control flex">
      <select @change="onChangeSelect" class="users-plants__select">
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
      <UsersPlant 
        v-for="plant in sortPlants" 
        :key="plant.id" 
        :plant="plant"
        :plansListUpdate="plansListUpdate"
        :nowTime="nowTime"
        :updateNowTime="updateNowTime"
        :addInfoAndOpen="addInfoAndOpen"
      />
    </ul>
  </div>
  <div class="modal" :class="{'open': isOpen==true}" @click="closeFunction">
    <div class="flex modal__box">
      <!-- <button class="btn-reser modal__btn">x</button> -->
      <img :src="modalInfo.image" alt="">
      <div class="modal__wrapper">
        <h3> {{ modalInfo.name }}</h3>
        <p>{{ modalInfo.description }}</p>
        <p>Тайминг полива :</p>
        <ul>
          <li>Дней: {{modalInfo.day}}</li>
          <li>Часов: {{modalInfo.hour}}</li>
          <li>Минут: {{modalInfo.minutes}}</li>
        </ul>
      </div>
    </div>
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

.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.5);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all .2s ease-in-out
;
}

.modal__box {
  position: relative;
  padding: 30px;
  margin-top: 250px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 0;
  /* text-align: center; */
  width: 700px;
  height: 300px;
  column-gap: 30px;
  background-color: var(--txt-1);
  border-radius: 20px;
  box-shadow: 1px 1px 32px -7px rgba(0,0,0,0.75);
  cursor: default;
  transform: scale(0);
  transition: all .4 ease-in-out;
}

.modal__btn {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #dfdfdf;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.modal__btn:hover {
  background-color: #b1b1b1;
}

.open {
  opacity: 1;
  visibility: visible
}

.open .modal__box{
  transform: scale(1);
}

.modal__box img{
  width: 200px;
  /* height: 300px; */
  object-fit: cover;
  border-radius: 10px;
}
</style>