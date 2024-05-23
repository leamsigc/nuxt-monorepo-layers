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
  <div class="px-16 bg-w py-20 grid grid-cols-2 gap-5 max-w-screen-2xl mx-auto">
    <div class="">
      <h1 class="flex-col justify-start items-start gap-6 flex">
        <div class="text-black text-6xl font-bold">
          {{ title }}
        </div>
        <div class="text-black text-lg font-normal leading-relaxed">
          {{ subTitle }}
        </div>
      </h1>
      <div class="pt-4 grid grid-cols-2 gap-2 mt-10">
        <div class="col-span-2 font-semibold">{{ CTATitle }}</div>
        <a
          :href="CTAUrl"
          class="px-10 py-3 bg-black border border-black justify-center items-center flex text-white font-bold"
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
