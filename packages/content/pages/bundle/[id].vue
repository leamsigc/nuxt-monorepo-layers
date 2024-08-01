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
const bundleId = route.params.id;

const images = [
  {
    key: 1,
    src: "https://masienda.com/cdn/shop/products/set.tortillastarterkit.02_1950x.png",
    size: "200x300",
    thumb: "https://picsum.photos/200/300",
    alt: "image",
    html: "image",
  },
  {
    key: 2,
    src: "https://masienda.com/cdn/shop/files/set.tortillastarterkit.08_1950x.png",
    size: "200x300",
    thumb: "https://picsum.photos/200/300",
    alt: "image",
    html: "image",
  },
  {
    key: 3,
    src: "https://masienda.com/cdn/shop/files/set.tortillastarterkit.08_1950x.png",
    size: "200x300",
    thumb: "https://picsum.photos/200/300",
    alt: "image",
    html: "image",
  },
];

const accordionItems = [
  {
    value: "Details",
    title: "DETAILS",
    content:
      "A lot of hard work and dedication. Apple is a great place to work, but it's not easy to get a job there. You need to be passionate about technology and willing to put in the time and effort to succeed.",
  },
  {
    value: "USAGE",
    title: "USAGE",
    content:
      "It depends on the language and your level of experience. Some languages are easier to learn than others, but most people can learn the basics of a new language in a few weeks. To become proficient, it can take several months or even years of practice.",
  },
  {
    value: "REVIEWS",
    title: "REVIEWS & HIGHTLIGHTS",
    content:
      "You don't need to learn multiple languages to become a software developer, but it can be helpful. Most developers are proficient in at least one language, but knowing multiple languages can make you more versatile and marketable.",
  },
];
//  id: number;
//   src: string;
//   size: string;
//   thumb: string;
//   alt: string;
//   html: string;
const galleryImages = [
  {
    id: 1,
    src: "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    size: "800x1000",
    thumb:
      "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    alt: "image",
    html: "image",
  },
  {
    id: 2,
    src: "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    size: "200x300",
    thumb:
      "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    alt: "image",
    html: "image",
  },
  {
    id: 3,
    src: "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    size: "200x300",
    thumb:
      "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    alt: "image",
    html: "image",
  },
  {
    id: 4,
    src: "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    size: "200x300",
    thumb:
      "https://masienda.com/cdn/shop/files/cookware-tortpress-grid-01_650x.jpg",
    alt: "image",
    html: "image",
  },
  {
    id: 5,
    src: "https://masienda.com/cdn/shop/files/masaharina-grid-05_1320x.png?v=1688759242",
    size: "200x300",
    thumb:
      "https://masienda.com/cdn/shop/files/masaharina-grid-05_1320x.png?v=1688759242",
    alt: "image",
    html: "image",
    class: "col-span-2",
  },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-4 px-5 mt-10">
    <div>
      <SliderWrapper :items="images" />
      <!-- images -->
      <GalleryImageList
        :images="galleryImages"
        class="grid grid-cols-2 gap-4 my-10"
      />
    </div>
    <div class="max-w-lg">
      <div>
        <h1 class="text-3xl font-bold">
          El Tortillero Starter Kit
        </h1>
        <p class="mt-5">
          $150
        </p>
        <div class="mt-5">
          Ready for the smell of fresh masa and warm tortillas to fill your
          kitchen? Meet our Tortilla Starter Kit, which comes with everything
          you need: the sturdy and stylish Masienda Tortilla Press (a top pick
          from Epicurious, Saveur, Serious Eats, and America's Test Kitchen),
          two bags of our bestselling and deeply flavorful Heirloom Corn Masa
          Harina, and one set of our custom reusable tortilla press liners,
          printed with a tortilla sizing ruler. You’ll discover that making
          tortillas at home is simple, surprisingly fast, and oh so satisfying.
        </div>
        <div class="mt-5">
          <Ui-button class="w-full px-10 py-5 rounded-full">
            Add to cart
          </Ui-button>
        </div>
      </div>
      <!-- Collapse -->
      <UiAccordion
        type="single"
        default-value="item-2"
        :items="accordionItems"
        class="mt-10"
      >
        <template #trigger="{ open, item }">
          <UiAccordionTrigger
            class="text-left text-sm"
            :class="[open && 'underline underline-offset-2']"
            :title="item.title"
          >
            <template #icon>
              <Icon
                v-if="!open"
                name="lucide:plus"
                class="size-4 shrink-0"
              />
              <Icon
                v-else
                name="lucide:minus"
                class="size-4 shrink-0"
              />
            </template>
          </UiAccordionTrigger>
        </template>
      </UiAccordion>
    </div>
    <section class="image_container max-h-[800px]">
      <img
        src="https://masienda.com/cdn/shop/files/set.tortillastarterkit.05_1950x.jpg"
        alt="image"
        class="w-full h-full object-cover"
      >
    </section>
    <section class="my-10 px-10">
      <section class="max-w-lg">
        <h2 class="text-6xl font-bold mb-10">
          There's a Better Taco
        </h2>

        <p>
          We’re of the mind that the tortilla makes the taco.
          You’ve put so much love and care into your toppings and fillings —
          scouring the market for the freshest ingredients, spending hours stewing meat,
          pickling onions, and grinding salsa — why serve the fruits of your labor atop a mediocre tortilla?
          Once you’ve tried tucking those fillings into a pillowy, handmade tortilla bursting with the flavor of heirloom corn, it’s hard to go back to store-bought.
        </p>
        <div class="mt-10 max-w-sm">
          <UiButton class="uppercase px-10 py-5 rounded-full">
            How to make the best tortillas
          </UiButton>
        </div>
      </section>
    </section>
  </div>
</template>
<style scoped></style>
