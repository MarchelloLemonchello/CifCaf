<script setup>
import { useRouter } from 'vue-router';
import { onMounted , reactive } from 'vue';
import axios from 'axios';

const router = useRouter();
const getUrl = 'http://localhost:5228/api/Category/getCategories'
const categories = reactive([])

onMounted(async () => {
  try {
    const { data } = await axios.get(getUrl)
    categories.value = data;
    console.log(categories.value);

  } catch (err) {
    console.log(err);
  }
})


const goToSubcategory = (category) => {
  router.push(`/garden/${category}`)
}
const categoryList1 = reactive([
  {
    name: 'Цветущие растения',
    img: 'category1.jpg'
  },
  {
    name: 'Кактусы и суккуленты',
    img: 'category2.jpg'
  },
  {
    name: 'Лиственные растения',
    img: 'category3.jpg'
  },
  {
    name: 'Цитрусовые и плодовые растения',
    img: 'category4.jpg'
  }
])
</script>
<template> 
<div>
  <h2 class="garden__title">
    Комнатные растения и цветы
  </h2>
  <ul class="list-reset flex garden__list">
    <li v-for="category in categoryList1" :key="category.name">
      <a 
        href="#" 
        class="garden-category flex"
        @click="goToSubcategory(category.name)"
      >
        <img :src="`${category.img}`" alt="">
        <h3>
          {{ category.name }}
        </h3>
      </a>
    </li>
  </ul>
  <!-- <h2 class="garden__title">
    Уличные растения и цветы
  </h2> -->

</div>  
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