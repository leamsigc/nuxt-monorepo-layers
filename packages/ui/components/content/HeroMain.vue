<script lang="ts" setup>
/**
 *
 * Hero component
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

  CTATitle: string;
  CTAUrl: string;
  CTALabel: string;
  CTAHelper: string;
}

const props = defineProps<Props>();

const { CTAHelper, CTALabel, CTATitle, CTAUrl, subTitle, title } = toRefs(props);
</script>

<template>
  <div class="bg-w mx-auto grid max-w-screen-2xl grid-cols-2 gap-5 px-16 py-20">
    <div class="">
      <h1 class="flex flex-col items-start justify-start gap-6">
        <div class="text-6xl font-bold text-black">
          {{ title }}
        </div>
        <div class="text-lg font-normal leading-relaxed text-black">
          {{ subTitle }}
        </div>
      </h1>
      <div class="mt-10 grid grid-cols-2 gap-2 pt-4">
        <div class="col-span-2 font-semibold">
          {{ CTATitle }}
        </div>
        <a
          :href="CTAUrl"
          class="flex items-center justify-center border border-black bg-black px-10 py-3 font-bold text-white"
        >
          {{ CTALabel }}
        </a>
        <p class="col-span-2 text-xs">
          {{ CTAHelper }}
        </p>
      </div>
    </div>
    <div class="saturate-200">
      <slot />
    </div>
  </div>
</template>
<style scoped></style>
~/components/content/Heromain
