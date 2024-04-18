<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  plant: {
    type: Object
  }
})
  const nextWateringTime = new Date(props.plant.nextWateringTime*1000).toLocaleString("ru-RU")
  // const nowTime = new Date()
  // const progress = (Date.parse(nowTime) - (props.plant.lastWateringTime*1000)) / ((props.plant.nextWateringTime - props.plant.lastWateringTime)*1000)
  // console.log(progress);

</script>

<template>
  <li class="flex users-plant">
    <div class="flex">
      <img :src="props.plant.plantImage" alt="">
      <p>{{ props.plant.plantName }}</p>
    </div>
    <div class="flex users-plant__progress-wrapper">
      <p> следующий полив: {{ nextWateringTime }}</p>
      <div class="users-plant__progress-bar">
        <div class="users-plant__progress-bar-filled" :style="`width: ${props.plant.prog}%;`">
        </div>
      </div>
    </div>
    <div class="flex users-plant__btn-wrapper">
      <button class="btn-reset">
        <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 0L11.8125 1.78615C11.8125 1.78615 8.9325 4.86938 6.03 8.86695C3.1275 12.8645 0 17.6488 0 22.2418C0 25.6255 1.42232 28.8706 3.95406 31.2632C6.4858 33.6558 9.91958 35 13.5 35C17.0804 35 20.5142 33.6558 23.0459 31.2632C25.5777 28.8706 27 25.6255 27 22.2418C27 17.6488 23.8725 12.8645 20.97 8.86695C19.1798 6.40936 17.2494 4.0456 15.1875 1.78615L13.5 0ZM13.5 6.65553C14.49 7.76124 15.39 8.67558 17.28 11.2697C20.0025 15.0122 22.5 19.7752 22.5 22.2418C22.5 26.9623 18.495 30.7473 13.5 30.7473C8.505 30.7473 4.5 26.9623 4.5 22.2418C4.5 19.7752 6.9975 15.0122 9.72 11.2697C11.61 8.67558 12.51 7.76124 13.5 6.65553Z" fill="#484848"/>
        </svg>
      </button>
      <button class="btn-reset">
        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.7569 0.961252L12.2445 10.25L20.6882 1.00938C20.8747 0.792124 21.0994 0.618327 21.3488 0.49841C21.5981 0.378493 21.8671 0.314927 22.1395 0.311523C22.7226 0.311523 23.2819 0.565054 23.6943 1.01634C24.1067 1.46763 24.3383 2.07971 24.3383 2.71793C24.3434 3.01296 24.2934 3.30602 24.1913 3.57913C24.0892 3.85225 23.9372 4.09965 23.7446 4.30615L15.191 13.5467L23.7446 22.9076C24.107 23.2957 24.3195 23.8211 24.3383 24.3755C24.3383 25.0138 24.1067 25.6258 23.6943 26.0771C23.2819 26.5284 22.7226 26.782 22.1395 26.782C21.8592 26.7947 21.5796 26.7435 21.3184 26.6316C21.0572 26.5198 20.8202 26.3497 20.6222 26.1322L12.2445 16.8435L3.77888 26.1082C3.59309 26.3182 3.37114 26.4858 3.12582 26.6015C2.88051 26.7171 2.6167 26.7785 2.34962 26.782C1.76644 26.782 1.20715 26.5284 0.794782 26.0771C0.382414 25.6258 0.150748 25.0138 0.150748 24.3755C0.145622 24.0805 0.195639 23.7875 0.297732 23.5143C0.399824 23.2412 0.551838 22.9938 0.744443 22.7873L9.29805 13.5467L0.744443 4.18583C0.382036 3.79782 0.169526 3.27239 0.150748 2.71793C0.150748 2.07971 0.382414 1.46763 0.794782 1.01634C1.20715 0.565054 1.76644 0.311523 2.34962 0.311523C2.87735 0.318743 3.38309 0.552164 3.7569 0.961252Z" fill="#484848"/>
        </svg>
      </button>
      <button class="btn-reset">
        <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3519 13.4593L4.42826 1.20039C4.23242 0.997028 3.99942 0.835614 3.74271 0.725461C3.48599 0.615307 3.21064 0.558594 2.93254 0.558594C2.65444 0.558594 2.37908 0.615307 2.12237 0.725461C1.86565 0.835614 1.63266 0.997028 1.43682 1.20039C1.04445 1.60692 0.824219 2.15683 0.824219 2.73004C0.824219 3.30325 1.04445 3.85317 1.43682 4.25969L11.8647 15.1083L1.43682 25.8484C1.04445 26.2549 0.824219 26.8048 0.824219 27.378C0.824219 27.9512 1.04445 28.5012 1.43682 28.9077C1.63192 29.1127 1.86459 29.2758 2.12134 29.3875C2.37809 29.4993 2.65381 29.5574 2.93254 29.5586C3.21126 29.5574 3.48699 29.4993 3.74374 29.3875C4.00048 29.2758 4.23315 29.1127 4.42826 28.9077L16.3519 16.6488C16.5657 16.4456 16.7364 16.199 16.8531 15.9245C16.9698 15.6501 17.0301 15.3537 17.0301 15.054C17.0301 14.7544 16.9698 14.458 16.8531 14.1835C16.7364 13.9091 16.5657 13.6625 16.3519 13.4593Z" fill="#484848"/>
        </svg>
      </button>
    </div>
  </li>
</template>

<style>
.users-plant {
  align-items: center;
  justify-content: space-between;
  padding: 14px 25px;
  background-color: var(--txt-1);
  border-radius: 14px;
}
.users-plant img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 100%;
}

.users-plant__progress-wrapper {
  align-items: center;
  justify-content: center;
  column-gap: 26px;
  font: 25;
}

.users-plant__progress-bar {
  height: 45px;
  width: 425px;
  border-radius: 10px;
  background-color: var(--form-1);
}

.users-plant__progress-bar-filled {
  height: 45px;
  width: 30%;
  border-radius: 10px;
  background-color: var(--act-1);
}

.users-plant__btn-wrapper {
  align-items: center;
  justify-content: center;
}

.users-plant__btn-wrapper button:not(:last-child) {
  margin-right: 70px;
}
</style>