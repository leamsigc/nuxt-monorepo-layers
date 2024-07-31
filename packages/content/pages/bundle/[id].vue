<script lang="ts" setup>
/**
 *
 * View for each bundle
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
 const route = useRoute();
 const bundleId = route.params.id
</script>

<template>
  <div class="grid grid-cols-2 gap-4 px-5 mt-10">
    <div>
      <GalleryImage />
    </div>
    <div class="max-w-lg">
      <h1 class="text-3xl font-bold">
        El Tortillero Starter Kit
      </h1>
      <p class="mt-5">
        $150
      </p>
      <div class="mt-5 ">
        Ready for the smell of fresh masa and warm tortillas to fill your kitchen?
        Meet our Tortilla Starter Kit, which comes with everything you need:
        the sturdy and stylish Masienda Tortilla Press (a top pick from Epicurious, Saveur, Serious Eats, and America's Test Kitchen), two bags of our bestselling and deeply flavorful Heirloom Corn Masa Harina, and one set of our custom reusable tortilla press liners, printed with a tortilla sizing ruler. You’ll discover that making tortillas at home is simple, surprisingly fast, and oh so satisfying.
      </div>
      <div class="mt-5">
        <Ui-button
          class=" w-full px-10 py-5 rounded-full"
        >
          Add to cart
        </Ui-button>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
