<template>
  <div class="description-view">
    <div class="description-info">
      <span>El mejor</span>
      <span>tipo de cambio</span>
      <div class="description-text">para cambiar dólares y soles online en Perú</div>
    </div>
  </div>
</template>
<style lang="scss">
.description-view {
  display: flex;
  justify-content: center;
  align-items: center;
  .description-info {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 340px;
    color: #ffffff;
    span {
      font-size: 48px;
      font-weight: 500;
    }
    .description-text {
      font-size: 24px;
      width: 320px;
    }
  }
}

@media (max-width: 768px) {
  .description-view {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .description-info {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 340px;
      color: #ffffff;
      span {
        font-size: 48px;
        font-weight: 500;
      }
      .description-text {
        font-size: 24px;
        width: 320px;
      }
    }
  }
}
</style>
