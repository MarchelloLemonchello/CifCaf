<template>  
  <header class="header">
    <div class="container header__content flex">
      <a 
        href="#" 
        class="header__logo flex"
        @click="$router.push('/')"
      >
        <img src="@/assets/logo.jpg" alt="Логотип">
      </a>
      <nav class="header__nav flex">
        <ul class="header__list flex list-reset">
          <li class="header__item">
            <a 
              href="#" 
              class="header__link"
              @click="$router.push('/')"
            >
              Главная
            </a>
          </li>
          <li class="header__item">
            <a 
              href="#" 
              class="header__link"
              @click="$router.push('/about')"
            >
              О&nbsp;нас
            </a>
          </li>
          <li class="header__item">
            <a 
              href="#" 
              class="header__link"
              @click="$router.push('/garden')"
            >
              Сад
            </a>
          </li>
          <li class="header__item">
            <a 
              href="#" 
              class="header__link"
              @click="$router.push('/user')"
            >
              Профиль
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>

.header {
  margin-bottom: 140px;
}

.header__content {
justify-content: space-between;
padding-top: 30px;
}

.header__list {
  align-items: center;
  z-index: 1;
}

.header__item {
  width: 190px;
}

.header__list > a:not(:last-child) {
  margin-right: 26px;
}

.header__item:not(:last-child) {
  margin-right: 26px;
}

.header__link {
  display: inline-block;
  width: 100%;
  padding: 12px 0;
  text-align: center;
  background-color: var(--txt-1);
  border-radius: 6px;
  transition: all .2s ease-in-out;
}

.header__link:hover {
  color: var(--txt-1);
  background-color: var(--act-1);
}

</style>