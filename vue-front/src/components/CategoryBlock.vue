<script setup>
import { useRouter } from 'vue-router';
// import { reactive } from 'vue';

const props = defineProps({
  props: Object
})

const router = useRouter();
// const subcategory = reactive([])
const goToSubcategory = (subcategory) => {
  router.push(`/garden/${subcategory.id}`)
}
</script>

<template> 
  <h2 class="garden__title">
    {{ props.props.name }}
  </h2>
  <ul class="list-reset flex garden__list">
    <li
      v-for="sub in props.props.children"
      :key="sub.id"
    >
      <a 
        href="#" 
        class="garden-category flex" 
        @click="goToSubcategory(sub)"     
      >
        <img :src="sub.image" alt="">
        <h3>
          {{ sub.name }}
        </h3>
      </a>
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

.garden__list {
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 80px;
  margin-bottom: 150px;
}

.garden-category {
  /* display: block; */
  width: 600px;
  height: 270px;
  background-color: var(--txt-1);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all .2s ease-in-out;
}

.garden-category img {
  height: 150px;
}

.garden-category:hover {
  transform: scale(1.05);
}
</style>