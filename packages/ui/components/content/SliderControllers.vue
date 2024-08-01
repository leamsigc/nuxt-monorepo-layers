<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
 const swiper = useSwiper()
</script>

<template>
  <button class="absolute right-0 top-1/2 bg-black text-white p-3 bg-opacity-50 hover:bg-opacity-100 z-10" @click="swiper.slideNext()">
    <Icon name="ic:round-keyboard-arrow-right" size="36" />
  </button>
  <button class="absolute left-0 top-1/2  bg-black text-white p-3 bg-opacity-50 hover:bg-opacity-100 z-10" @click="swiper.slidePrev()">
    <Icon name="ic:round-keyboard-arrow-left" size="36" />
  </button>
</template>
<style scoped>

</style>
