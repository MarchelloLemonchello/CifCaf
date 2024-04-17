<template>
<div class="hero">
  <div class="hero__decor">
    <img src="/Rectangle4.svg" alt="">
    <img src="/bg1.png" alt="">
  </div>
  <div class="hero__content">
    <div class="hero__wrapper">
      <h1 class="hero__title">
        Забота без границ
      </h1>
      <div class="hero__block">
        <ul class="hero__list">
          <li class="hero__item">
            У вас дома целая оранжерея?
          </li>
          <li class="hero__item">
            Две теплицы на даче?
          </li>
          <li class="hero__item">
            Небольшое количество комнатных растений?
          </li>
        </ul>
        <p class="hero__descr">
          Мы поможем позаботиться о ваших растениях и дадим полезные советы для качественного урожая.
        </p>
      </div>
      <button 
        class="btn-reset hero__btn"
        @click="$router.push('/registration')"
      >
        Высадить
      </button>
    </div>
  </div>
</div>
</template>

<style>
.hero__decor img{
  position: absolute;
  left: 0;
}
.hero__decor img:last-child{
  top: 10px;
  left: -270px;
}

.hero__wrapper {
  margin-left: 575px;
}

.hero__title {
  font-size: 48PX;
  font-weight: 700;
  color: var(--txt-1);
}

.hero__block {
  width: 575px;
  padding: 20px 35px;
  margin-bottom: 72px;
  border-radius: 20px;
  background-color: var(--form-1);
  font-size: 22px;
}

.hero__list {
  margin: 0;
  margin-bottom: 20px;
}

.hero__descr {
  margin: 0;
}

.hero__btn {
  padding: 25px 52px;
  background-color: var(--bg-2);
  color: var(--txt-1);
  border-radius: 40px;
  font-size: 24px;
  font-weight: 700;
  transition: all .2s ease-in-out;
}

.hero__btn:hover {
  background-color: var(--txt-2);
}
</style>
