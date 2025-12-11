<template>
  <div class="wwg-stack wwg-stack--secure">
    <img
      class="wwg-stack__item wwg-stack__item--dollar"
      src="/images/wwg/dollar.png"
      alt="Dollar lock"
    />
    <img
      class="wwg-stack__item wwg-stack__item--block"
      src="/images/wwg/block.png"
      alt="Block"
    />
  </div>
</template>

<style scoped lang="scss">
.wwg-stack {
  position: relative;
  width: min(360px, 100%);
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    --wwg-rotate: 0deg;
    --wwg-offset: 0px;

    position: absolute;
    left: 50%;
    width: 220px;
    transform: translate(-50%, calc(-50% + var(--wwg-offset))) rotate(var(--wwg-rotate));
    filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.35));
    animation: float 3.8s ease-in-out infinite;
    will-change: transform;

    &--dollar {
      bottom: 20%;
      z-index: 1;
      animation-delay: 0s;
      --wwg-rotate: -6deg;
      --wwg-offset: 70px;

      @include media-breakpoint-down(xl){
        width: 160px;
        bottom: 15%;
      }
    }

    &--block {
      bottom: 10%;
      z-index: 2;
      width: 200px;
      animation-delay: 0.6s;
      --wwg-rotate: 8deg;
      --wwg-offset: -70px;

      @include media-breakpoint-down(xl){
        width: 150px;
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
