<template>
  <div class="change-money">
    <div class="charge-money-card">
      <div class="card-header">
        <a :class="{ 'active-link': true }">Dólar Compra</a>
        <a :class="{ 'active-link': true }">Dólar Venta</a>
      </div>
      <div class="card-content" :class="{ 'inputs-reverse': typeActive === 'PEN' }">
        <input type="text" placeholder="dolar" class="card-input" name="soles" />
        <button type="button" class="btn-card" @click="changeTypeMoney">
          <img
            alt="icon logo"
            src="../assets/icon.svg"
            :class="{ 'icon-container-reverse': iconLoading }"
          />
        </button>
        <input type="text" placeholder="soles" class="card-input" name="dolar" />
      </div>
      <div class="card-action">
        <button type="button" class="action-btn">Iniciar Operacion</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const typeActive = ref('USD')
const iconLoading = ref(false)

const changeTypeMoney = () => {
  iconLoading.value = true
  setTimeout(() => {
    if (typeActive.value === 'USD') {
      typeActive.value = 'PEN'
    } else {
      typeActive.value = 'USD'
    }
    iconLoading.value = false
  }, 500)
}
</script>

<style></style>
<style lang="scss">
.change-money {
  display: flex;
  justify-content: center;
  align-items: center;
  .charge-money-card {
    width: 386px;
    height: 325px;
    background-color: #ffffff;
    border-radius: 8px;
    .card-header {
      height: 63px;
      border-bottom: 1px solid #e7e7ed;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active-link {
      color: #6e46e6;
      font-weight: bold;
      text-decoration-color: #6e46e6;
    }
    .card-content {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 20px 55px 0px 55px;
    }
    .card-input {
      margin-top: 20px;
      height: 44px;
      border-radius: 6px;
      border: 1px solid #6e46e6;
    }
    .inputs-reverse {
      flex-direction: column-reverse;
    }
    .btn-card {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #6e46e6;
      text-align: center;
      cursor: pointer;
      left: 45%;
      top: 80px;
      position: absolute;
      border: 1px solid #6e46e6;
    }
    .icon-container-reverse {
      transform: rotate(180deg);
      transition: transform 0.5s ease;
    }

    .card-action {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 55px 0px 55px;
      .action-btn {
        background: #6e46e6;
        color: #ffffff;
        width: 100%;
        height: 40px;
        border-radius: 6px;
        border: 1px solid #6e46e6;
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 768px) {
  .change-money {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .charge-money-card {
      width: 100%;
      height: 325px;
      background-color: #ffffff;
      border-radius: 8px;
    }
  }
}
</style>
