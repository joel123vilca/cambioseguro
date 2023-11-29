<template>
  <div class="change-money">
    <div class="charge-money-card">
      <div class="card-header">
        <a
          :class="{ 'active-link': typeActive === 'PEN' }"
          @click="changeMoney('PEN')"
          role="button"
          tabindex="0"
          ><span>Dolar Compra {{ purchasePrice }} </span></a
        >
        <a
          :class="{ 'active-link': typeActive === 'USD' }"
          @click="changeMoney('USD')"
          role="button"
          tabindex="0"
          ><span>Dolar Venta {{ salePrice }} </span></a
        >
      </div>
      <div class="card-content" :class="{ 'inputs-reverse': typeActive === 'PEN' }">
        <div class="card-input-content">
          <div class="card-span"><span>Dolares</span></div>
          <div class="card-input">
            <span class="input-label"> {{ typeActive === 'USD' ? 'Envias' : 'Recibes' }} </span>
            <input v-model="purchaseInput" type="text" class="card-input-change" name="soles" />
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
            <span class="input-label">{{ typeActive === 'PEN' ? 'Envias' : 'Recibes' }} </span>
            <input type="text" v-model="saleInput" class="card-input-change" name="soles" />
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
import { ref, watch } from 'vue'
import { useChangeMoneyStore } from '@/store'

const store = useChangeMoneyStore()

const purchasePrice = ref(0)
const salePrice = ref(0)
const typeActive = ref('PEN')
const iconLoading = ref(false)
const saleInput = ref<string>('')
const purchaseInput = ref<string>('')

const formatCurrency = (value: string, type: string): string => {
  value = value.replace(/[^\d]/g, '')
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  value = type + value
  return value
}

const convertCurrency = () => {
  if (typeActive.value === 'USD') {
    const money = purchaseInput.value.replace(/[^\d]/g, '')
    saleInput.value =
      'S/.' + (money * salePrice.value).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } else {
    const money = saleInput.value.replace(/[^\d]/g, '')
    purchaseInput.value =
      '$' + (money / purchasePrice.value).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

const changeMoney = (money: string) => {
  iconLoading.value = true
  setTimeout(() => {
    typeActive.value = money
    iconLoading.value = false
  }, 500)
}

const changeTypeMoney = () => {
  iconLoading.value = true
  setTimeout(() => {
    if (typeActive.value === 'USD') {
      typeActive.value = 'PEN'
    } else {
      typeActive.value = 'USD'
    }
    convertCurrency()
    iconLoading.value = false
  }, 500)
}

watch(purchaseInput, (newValue) => {
  convertCurrency()
  purchaseInput.value = formatCurrency(newValue, '$')
})

watch(saleInput, (newValue) => {
  convertCurrency()
  saleInput.value = formatCurrency(newValue, 'S/.')
})

watch(
  () => store.rateSale,
  (newValue) => {
    salePrice.value = newValue
  }
)

watch(
  () => store.ratePurchase,
  (newValue) => {
    purchasePrice.value = newValue
  }
)
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
        text-align: center;
        cursor: pointer;
      }
    }
    .active-link {
      color: #6e46e6;
      font-weight: bold;
      border-bottom: 1px solid #2f00ff;
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
