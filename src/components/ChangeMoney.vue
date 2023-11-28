<template>
  <div class="change-money">
    <div class="charge-money-card">
      <div class="card-header">
        <a :class="{ 'active-link': true }"><span>Dolar Compra 3.9240</span></a>
        <a :class="{ 'active-link': true }"><span>Dolar Venta 3.9240</span></a>
      </div>
      <div class="card-content" :class="{ 'inputs-reverse': typeActive === 'PEN' }">
        <div class="card-input-content">
          <div class="card-span"><span>Dolares</span></div>
          <div class="card-input">
            <span class="input-label">Envias</span>
            <input v-model="inputCurrency" type="text" class="card-input-change" name="soles" />
          </div>
        </div>
        <button type="button" class="btn-card" @click="changeTypeMoney">
          <img
            alt="icon logo"
            src="../assets/icon.svg"
            :class="{ 'icon-container-reverse': iconLoading }"
          />
        </button>
        <div class="card-input-content second">
          <div class="card-span"><span>Soles</span></div>
          <div class="card-input">
            <span class="input-label">Recibes</span>
            <input type="text" v-model="inputCurrency" class="card-input-change" name="soles" />
          </div>
        </div>
      </div>
      <div class="card-action">
        <button type="button" class="action-btn">Iniciar Operacion</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

const typeActive = ref('USD')
const iconLoading = ref(false)
const inputCurrency = ref<string>('')

watch(inputCurrency, (newValue) => {
  inputCurrency.value = formatCurrency(newValue)
})

const formatCurrency = (value: string): string => {
  // Lógica de formateo aquí, similar al ejemplo anterior
  value = value.replace(/[^\d]/g, '')
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  value = '$' + value

  return value
}

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

<style lang="scss">
.card-input-content {
  display: flex;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #6e46e6;
  margin-top: 20px;
  .card-span {
    width: 94px;
    height: 44px;
    border-radius: 5px 0px 0px 6px;
    background: var(--5, #f3f3f6);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: #6e46e6;
      font-size: 14px;
    }
  }
  .card-input {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 15px;
    padding-top: 4px;
    .input-label {
      color: var(--60, #717191);
      font-size: 12px;
    }
  }
  .card-input-change {
    height: 17px;
    border-radius: 6px;
    border: 1px solid #ffff;
    outline: none;
    text-align: right;
    font-size: 16px;
  }
}
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
      padding: 0px 77px 0px 77px;
      border-bottom: 1px solid #e7e7ed;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      a {
        width: 80px;
        height: 50%;
        font-size: 12px;
        border-bottom: 1px solid #2f00ff;
        text-align: center;
        cursor: pointer;
      }
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
