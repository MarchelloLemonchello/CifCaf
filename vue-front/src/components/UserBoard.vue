<template>
  <div class="flex user">
    <div class="user__left">
      <div class="user__name">
        User name
      </div>
      <ul class="list-reset user__stats">
        <li class="user__stats-item">
          <p>Колличество растений:</p>
          <span>0</span>
        </li>
        <li class="user__stats-item">
          <p>Колличество растений:</p>
          <span>0</span>
        </li>
        <li class="user__stats-item">
          <p>Колличество растений:</p>
          <span>0</span>
        </li>
      </ul>
    </div>
    <div class="user__rigth">
      <div class="user__avatar">
        <img src="https://memepedia.ru/wp-content/uploads/2023/08/bojkisser-768x512.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style>
.user {
  justify-content: space-between;
  width: 625px;
  padding: 30px;
  background-color: var(--form-1);
  border-radius: 20px;
}

.user__name , .user__stats {
  width: 365px;
  padding: 20px;
  background-color: var(--txt-1);
  border-radius: 20px;
}

.user__name {
  margin-bottom: 70px;
  font-size: 24px;
  color: var(--txt-3);
}

.user__stats {
  font-size: 22px;
  color: var(--txt-2);
}

.user__stats-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user__stats-item:not(:last-child) {
  margin-bottom: 20px;
}

.user__stats-item p {
  margin: 0;
}

.user__stats-item span {
  margin-right: 15px;
  color: var(--act-1);
  font-weight: 700;
}

.user__avatar {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 120px;
  height: 120px;
}

.user__avatar img{
  width:100%;
  height:100%;
  object-fit: cover;
}
</style>