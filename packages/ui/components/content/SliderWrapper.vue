<script lang="ts" setup generic="T">
/**
 *
 * Slider Wrapper
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface Props{
  items: T & { key: string } []
 }

 const props = defineProps<Props>()

 const { items } = toRefs(props);

 const swapperAutoplay = {
    delay: 8000,
    disableOnInteraction: true,
 };

</script>

<template>
  <div class="px-5 relative">
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination, SwiperController, SwiperNavigation]"
      :slides-per-view="'auto'"
      :autoplay="swapperAutoplay"
      :space-between="20"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide
        v-for="slide in items"
        :key="'slider' + slide.key"
        class="dark:bg-dark my-5 rounded-xl bg-white px-4 py-[30px] dark:bg-black sm:px-[30px]"
      >
        <slot>
          <img :src="slide.src" :alt="slide.alt">
        </slot>
      </SwiperSlide>
      <slot name="controls">
        <SliderControllers />
      </slot>
    </Swiper>
  </div>
</template>
<style scoped>

</style>
