<script setup>
import { onMounted , reactive } from 'vue';
import axios from 'axios';
import CategoryBlock from '@/components/CategoryBlock.vue'

const getUrl = 'http://localhost:5228/api/Category/getCategories'
const categories = reactive([])

onMounted(async () => {
  try {
    const { data } = await axios.get(getUrl)
    categories.value = data;

  } catch (err) {
    console.log(err);
  }
})

</script>
<template> 
<div>
  <CategoryBlock 
    v-for="category in categories.value"
    :key="category.id"
    :props="category"
  />
</div>  
</template>