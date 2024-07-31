<script lang="ts" setup>
/**
 *
 * List of bundles
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
 interface BundleInterface {
   name: string
   price: string
   image: string
   description: string
   button: string,
   to: string
 }
interface props {
  bundle: BundleInterface[]
}
const props = defineProps<props>()
const { bundle } = toRefs(props)
</script>

<template>
  <div class=" mx-auto grid grid-cols-4 my-10 gap-6 px-10">
    <NuxtLink v-for="item in bundle" :key="item.name" :to="item.to" class=" p-4 bg-white rounded-lg  hover:scale-105 hover:shadow transition-all ">
      <img :src="item.image" :alt="item.description">
      <p class="font-bold text-2xl">
        {{ item.name }}
      </p>
      <p>{{ item.price }}</p>

      <div class="flex justify-end my-5">
        <UiButton variant="primary" class=" transition-all hover:underline ">
          {{ item.button }}
        </UiButton>
      </div>
    </NuxtLink>
  </div>
</template>
<style scoped>

</style>
