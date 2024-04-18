<template>
  <div class="reg flex">
    <div class="flex reg__left">
      <h2>
        Регистрация
      </h2>
      <input type="text" placeholder="Имя">
      <input type="email" placeholder="Почта">
      <input type="password" name="" id="" placeholder="Пароль">
      <button class="btn-reset">Создать аккаунт</button>
      <p>
        Регистрируясь, я соглашаюсь с положением о конфиденциальности и условиями обслуживания.
      </p>
      <a href="#" @click="$router.push('/login')">Уже есть аккаунт?</a>
    </div>
    <div class="reg__right">
      <img src="/reg.jpg" alt="">
    </div>
  </div>
</template>

<style>
.reg {
  margin: 0 auto;
  padding: 55px;
  width: 760px;
  /* height: 545px; */
  justify-content: space-between;
  background-color: var(--txt-1);
  border-radius: 20px;
  column-gap: 60px;
}

.reg__left {
  flex-direction: column;
  align-items: center;
  width: 330px;
  /* padding: 0 42px; */
}

.reg__left h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 50px;
}

.reg__left input {
  width: 100%;
  margin-bottom: 10px;
  background-color: var(--input-1);
  border-radius: 20px;
  padding: 10px 15px;
}

.reg__left button {
  padding: 10px 30px;
  margin-top: 30px;
  width: 100%;
  border-radius: 20px;
  font-size: 20px;
  color: var(--txt-1);
  background-color: var(--bg-2);
}

.reg__left p {
  font-size: 10px;
}
.reg__left a {
  color: var(--link-1);
  align-self: self-start;
} 
</style>