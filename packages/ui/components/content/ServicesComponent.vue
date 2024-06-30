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

 interface Service{
   title:string
   icon:string
   description:string
   imageUrl:string
   points:{text:string}[]
   position: 'left' | 'right'
 }
 interface Props {
   services:Service[]
 }

 const props = defineProps<Props>();
 const { services } = toRefs(props);

</script>
<template>
  <UiContainer class="py-16 lg:py-10">
    <template v-for="service in services" :key="service.title">
      <section
        class="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-0 lg:h-auto lg:grid-cols-2 lg:gap-20"
      >
        <div :class="[service.position === 'right' ? 'lg:order-none' : 'lg:order-1']">
          <div v-if="service.icon" class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
            <Icon name="heroicons:chat-bubble-left-right" class="h-6 w-6 text-primary" />
          </div>
          <h3 class="mb-2 text-2xl font-semibold lg:mb-4 lg:text-3xl" v-html="service.title" />
          <p class="text-muted-foreground lg:text-lg" v-html="service.description" />

          <ul v-if="service.points" class="mt-8 flex flex-col gap-5 text-muted-foreground">
            <template v-for="(p, k) in service.points" :key="`Point-${k}`">
              <li class="flex gap-3 lg:text-lg">
                <Icon name="heroicons:check-circle" class="h-6 w-6 shrink-0 text-primary" />
                <span v-html="p.text" />
              </li>
            </template>
          </ul>
        </div>
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img
          :src="service.imageUrl"
          :alt="service.title"
          class="h-[300px] w-full rounded-lg object-cover shadow-sm lg:h-full"
        />
      </section>
    </template>
  </UiContainer>
</template>
