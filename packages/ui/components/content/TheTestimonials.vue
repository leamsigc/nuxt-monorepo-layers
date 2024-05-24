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
  interface Testimonials {
    desc: string;
    name: string;
    imgSrc: string;
    role: string;
    alt: string;
  }
  interface Props {
    items: Testimonials[];
    title: string;
    subTitle: string;
    description: string;
  }
  const props = defineProps<Props>();
  const { items, description, subTitle, title } = toRefs(props);

  const swapperAutoplay = {
    delay: 8000,
    disableOnInteraction: true,
  };
</script>

<template>
  <div class="container mx-auto">
    <TheTitle :title="title" :subTitle="subTitle" :description="description" />

    <div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="'auto'"
        :autoplay="swapperAutoplay"
        :space-between="20"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide
          v-for="slide in items"
          :key="slide.name"
          class="dark:bg-dark my-5 max-w-60 rounded-xl bg-white px-4 py-[30px] shadow dark:bg-black sm:px-[30px] md:max-w-sm"
        >
          <TheTestimonial v-bind="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<style scoped></style>
