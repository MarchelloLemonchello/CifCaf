<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { useRoute , useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const logForm = reactive({
  email: '',
  password: ''
})


 async function log() {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BASE_API}Auth/login` , {
      email: logForm.email ,
      password: logForm.password
    })
    // console.log(res);
    if (res.status == 200) {
      localStorage.setItem('plantToken', JSON.stringify(res.data.token))
      router.push('/user')
  }
  } catch (error) {
    // console.log(error);
  }
}

</script>

<template>
  <div class="log flex">
    <div class="log__left">
      <img src="/auth.jpg" alt="">
    </div>
    <div class="flex log__rigth">
      <h2>
        Вход
      </h2>
      <input type="email" placeholder="Почта" v-model="logForm.email">
      <input type="password" name="" id="" placeholder="Пароль" v-model="logForm.password">
      <button class="btn-reset" @click="log">Войти</button>
      <p>
        Выполняя вход, я соглашаюсь с положением о конфиденциальности и условиями обслуживания.
      </p>
      <a href="#" @click="$router.push('/registration')">Нет аккаунта?</a>
    </div>
  </div>
</template>

<style>
.log {
  margin: 0 auto;
  padding: 55px;
  width: 760px;
  /* height: 545px; */
  justify-content: space-between;
  background-color: var(--txt-1);
  border-radius: 20px;
  column-gap: 60px;
}

.log__rigth {
  flex-direction: column;
  align-items: center;
  width: 330px;
  /* padding: 0 42px; */
}

.log__rigth h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 50px;
}

.log__rigth input {
  width: 100%;
  margin-bottom: 10px;
  background-color: var(--input-1);
  border-radius: 20px;
  padding: 10px 15px;
}

.log__rigth button {
  padding: 10px 30px;
  margin-top: 30px;
  width: 100%;
  border-radius: 20px;
  font-size: 20px;
  color: var(--txt-1);
  background-color: var(--bg-2);
}

.log__rigth p {
  font-size: 10px;
}
.log__rigth a {
  color: var(--link-1);
  align-self: self-start;
} 
</style>