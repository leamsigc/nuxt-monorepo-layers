<script lang="ts" setup>
/**
 *
 * The hero component
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface Props {
  alt: string;
  heroImageUrl: string;
  title: string;
  subTitle: string;
  href: string;
}
const props = defineProps<Props>();
const { alt, heroImageUrl, subTitle, title, href } = toRefs(props);
</script>

<template>
  <section class="container mx-auto px-4 pb-12">
    <div
      class="relative z-0 grid min-h-[700px] rounded-3xl md:bg-black bg-opacity-90 dark:bg-opacity-90 bg-slate-800 px-4 md:px-0 md:dark:bg-slate-800"
    >
      <img
        :src="heroImageUrl"
        class="absolute inset-0 h-full w-full rounded-3xl opacity-20 hidden lg:block"
      />
      <div class="mb-20 mt-auto">
        <div class="relative rounded-3xl md:py-36 lg:px-12">
          <div class="-mx-4 mt-24 flex flex-wrap items-center space-y-6 lg:space-y-0">
            <div class="w-full px-4 md:w-8/12 xl:w-6/12">
              <h1 class="mb-10 flex flex-col items-start justify-start gap-6">
                <div
                  class="text-6xl font-bold leading-tight text-slate-50 dark:text-slate-300"
                  v-html="title"
                />
                <div
                  class="text-lg font-normal leading-relaxed text-slate-50 dark:text-slate-300"
                  v-html="subTitle"
                />
              </h1>
              <UiButton class="px-16 py-6" variant="outline" :href="href">
                <slot>
                  <span class="mr-5 inline-block p-1.5 text-xl uppercase">
                    Call now
                  </span>
                  <Icon name="material-symbols:call-end" class="" :size="'24'" />
                </slot>
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
