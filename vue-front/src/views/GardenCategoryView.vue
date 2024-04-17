<template>    
  <h2 class="garden__title">
    Цветущие растения
  </h2>
  <ul class="list-reset flex garden-plants__list">
    <li class="flex garden-plants__item">
      <img src="@/../public/plant1.jpg" alt="">
      <div class="garden-plants__wrapper">
        <h3>
          Спатифиллум
        </h3>
        <p>
          Многолетнее бесстебельное растение
        </p>
      </div>
      <button class="btn-reset">
        Добавить
      </button>
    </li>
    <li class="flex garden-plants__item">
      <img src="@/../public/plant1.jpg" alt="">
      <div class="garden-plants__wrapper">
        <h3>
          Спатифиллум
        </h3>
        <p>
          Многолетнее бесстебельное растение
        </p>
      </div>
      <button class="btn-reset">
        Добавить
      </button>
    </li>
    <li class="flex garden-plants__item">
      <img src="@/../public/plant1.jpg" alt="">
      <div class="garden-plants__wrapper">
        <h3>
          Спатифиллум
        </h3>
        <p>
          Многолетнее бесстебельное растение
        </p>
      </div>
      <button class="btn-reset">
        Добавить
      </button>
    </li>
    <li class="flex garden-plants__item">
      <img src="@/../public/plant1.jpg" alt="">
      <div class="garden-plants__wrapper">
        <h3>
          Спатифиллум
        </h3>
        <p>
          Многолетнее бесстебельное растение
        </p>
      </div>
      <button class="btn-reset">
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

.garden-plants__item:hover {
  transform: scale(1.05);
}

.garden-plants__item img {
  height: 210px;
  width: 200px;
}

</style>