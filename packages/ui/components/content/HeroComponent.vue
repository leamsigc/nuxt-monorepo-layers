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
}
const props = defineProps<Props>();
const { alt, heroImageUrl, subTitle, title } = toRefs(props);
</script>

<template>
  <section class="container mx-auto pb-12 px-4">
    <div
      class="rounded-3xl z-0 min-h-[700px] grid relative bg-black dark:bg-slate-800 bg-opacity-90"
    >
      <NuxtImg
        :src="heroImageUrl"
        class="absolute inset-0 h-full w-full opacity-30 rounded-3xl"
      />
      <div class="mt-auto mb-20">
        <div class="lg:px-12 md:py-36 relative rounded-3xl">
          <div class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0">
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h1 class="flex-col justify-start items-start gap-6 flex mb-10">
                <div
                  class="dark:text-slate-300 text-slate-50 text-6xl font-bold capitalize leading-tight"
                >
                  {{ title }}
                </div>
                <div
                  class="dark:text-slate-300 text-slate-50 text-lg font-normal leading-relaxed"
                >
                  {{ subTitle }}
                </div>
              </h1>
              <Button as-child class="rounded-full px-10 py-6">
                <slot>
                  <span class="inline-block mr-5 p-1.5 text-2xl uppercase font-black"
                    >Call now
                  </span>
                  <Icon name="material-symbols:call-end" class="" size="24" />
                </slot>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
