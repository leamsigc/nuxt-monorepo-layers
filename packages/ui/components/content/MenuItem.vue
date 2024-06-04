<script lang="ts" setup>
/**
 *
 * Menu item card
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

interface Props{
  type: string;
  description: string;
  name: string;
  image: string;
  price: string;
  button: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "Breakfast",
  description: "Small description of the plate",
  name: "The plate name",
  image: "https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png",
  price: "price",
  button: "button",
});
const { type, description, name, image, price, button } = toRefs(props);
</script>

<template>
  <div class="bg-white dark:bg-slate-950 border border-gray-100 dark:border-gray-900 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
    <span class="bg-red-100 dark:bg-red-950 border border-red-500 dark:border-red-300 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 dark:text-green-100 ">
      {{ type }}
    </span>
    <img class="w-64 mx-auto transform transition duration-300 hover:scale-105" :src="image" :alt="name"><div class="flex flex-col items-center my-3 space-y-2">
      <h1 class="text-gray-900 dark:text-white poppins text-lg">
        {{ name }}
      </h1><p class="text-gray-500 dark:text-gray-300 poppins text-sm text-center">
        {{ description }}
      </p>
      <h2 class="text-gray-900 dark:text-gray-300 poppins text-2xl font-bold">
        {{ price }}
      </h2>
      <button class="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
        {{ button }}
      </button>
    </div>
  </div>
</template>
<style scoped>

</style>
