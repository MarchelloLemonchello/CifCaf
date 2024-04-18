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
    <ul class="list-reset flex hero__plus">
      <li class="flex">
        <img src="/plus1.svg" alt="">
        <div>
          <h3>Местоположение</h3>
          <p>сад в любой точке мира</p>
        </div>
      </li>
      <li class="flex">
        <img src="/plus2.svg" alt="">
        <div>
          <h3>Подходит аллергикам</h3>
          <p>наши растения гипоаллергенны </p>
        </div>
      </li>
      <li class="flex">
        <img src="/plus3.svg" alt="">
        <div>
          <h3>Разнообразие</h3>
          <p>большой выбор растений</p>
        </div>
      </li>
    </ul>
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
  margin-bottom: 265px;
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

.hero__plus {
  align-items: center;
  justify-content: space-between;
}

.hero__plus li {
  width: 355px;
  height: 110px;
  padding: 30px;
  background-color: var(--txt-1);
  border-radius: 20px;
  gap: 25px;
}

.hero__plus h3 {
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
}

.hero__plus p {
  margin: 0;
  font-size: 15px;
}
</style>
