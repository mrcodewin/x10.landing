<template>
  <div class="wwg-stack">
    <img
      class="wwg-stack__item wwg-stack__item--coin"
      src="/images/wwg/coin.png"
      alt="Coin"
    />
    <img
      class="wwg-stack__item wwg-stack__item--eth"
      src="/images/wwg/eth.png"
      alt="Ethereum"
    />
    <img
      class="wwg-stack__item wwg-stack__item--btc"
      src="/images/wwg/bitcoin.png"
      alt="Bitcoin"
    />
  </div>
</template>

<style scoped lang="scss">
.wwg-stack {
  position: relative;
  width: min(360px, 100%);
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    --wwg-rotate: 0deg;
    --wwg-offset: 0px;

    position: absolute;
    left: 50%;
    width: 210px;
    transform: translate(-50%, calc(-50% + var(--wwg-offset))) rotate(var(--wwg-rotate));
    filter: drop-shadow(0 14px 32px rgba(0, 0, 0, 0.35));
    animation: float 3.6s ease-in-out infinite;
    will-change: transform;

    &--coin {
      bottom: 15%;
      z-index: 1;
      animation-delay: 0s;
      --wwg-rotate: -8deg;
      --wwg-offset: 80px;

      @include media-breakpoint-down(xl){
        width: 160px;
        bottom: 0;
      }
    }

    &--eth {
      bottom: 15%;
      z-index: 2;
      width: 200px;
      animation-delay: 0.4s;
      --wwg-rotate: 6deg;
      --wwg-offset: -40px;

      @include media-breakpoint-down(xl){
        width: 160px;
        bottom: -10px;
      }
    }

    &--btc {
      bottom: 15%;
      z-index: 3;
      width: 190px;
      animation-delay: 0.8s;
      --wwg-rotate: -10deg;
      --wwg-offset: -160px;

      @include media-breakpoint-down(xl){
        width: 160px;
        bottom: 0;
      }
    }
  }
}

@keyframes float {
  0% {
    transform: translate(-50%, calc(-50% + var(--wwg-offset)))
      rotate(var(--wwg-rotate))
      translateY(0);
  }
  50% {
    transform: translate(-50%, calc(-50% + var(--wwg-offset)))
      rotate(var(--wwg-rotate))
      translateY(-10px);
  }
  100% {
    transform: translate(-50%, calc(-50% + var(--wwg-offset)))
      rotate(var(--wwg-rotate))
      translateY(0);
  }
}
</style>
