<script lang="ts" setup>
/**
 *
 * The title component
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface Props {
  title: string;
  subTitle: string;
  description: string;
}
const props = defineProps<Props>();
const { title, subTitle, description } = toRefs(props);
</script>

<template>
  <div class="-mx-4 flex flex-wrap justify-center">
    <div class="w-full px-4">
      <div class="mx-auto mb-[60px] max-w-[485px] text-center">
        <span class="mb-2 block text-lg font-semibold text-primary"> {{ title }}</span>
        <h2
          class="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
        >
          {{ subTitle }}
        </h2>
        <p class="text-body-color dark:text-dark-6 text-base">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
