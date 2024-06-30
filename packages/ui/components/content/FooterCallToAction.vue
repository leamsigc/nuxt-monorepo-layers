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
 interface Props {
   logoUrl?: string;
   title?: string;
   description?: string;
   btns: {label: string, href: string, variant?: string}[]
   copyright?: string
 }
 const props = withDefaults(defineProps<Props>(), {
   logoUrl: "/logo.png",
   title: "Let's get started on something great",
   description: "We are here to help you with your project",
   btns: () => [{label: "View Demo", href: "#", variant: "outline"}, {label: "Get started", href: "#"}],
   copyright: "Copyright © 2022 Leamsigc. All rights reserved."
 })
 const { logoUrl, title, description, btns, copyright } = toRefs(props)
</script>

<template>
  <UiContainer class="py-16 text-center lg:py-24">
    <UiContainer class="py-16 text-center lg:py-24 relative">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        :src="logoUrl"
        fit="contain"
        :alt="title"
        :title="title"
        class="mx-auto mb-5 h-10 object-contain lg:h-14"
      />
      <h2 class="mb-4 mt-2 text-4xl font-bold lg:mb-6 lg:mt-3 lg:text-5xl">
        {{ title }}
      </h2>

      <p class="text-lg text-muted-foreground lg:text-xl">
        {{ description }}
      </p>

      <div class="mt-5 flex w-full flex-col-reverse justify-center gap-3 md:w-auto md:flex-row">
        <UiButton
          v-for="btn in btns"
          :key="btn.label"
          size="lg"
          :href="btn.href"
          :variant="btn.variant"
        >
          {{ btn.label }}
        </UiButton>
      </div>
    </UiContainer>
    <section class="flex flex-col justify-between gap-5 border-t pt-8 lg:flex-row">
      <p class="text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} {{ copyright }}
      </p>
      <div class="flex items-center gap-2">
        <Icon
          name="logos:facebook"
          class="h-7 w-7"
        />
        <Icon
          name="logos:twitter"
          class="h-7 w-7"
        />
        <Icon
          name="lucide:instagram"
          class="h-7 w-7"
        />
      </div>
    </section>
  </UiContainer>
</template>
<style scoped>

</style>
