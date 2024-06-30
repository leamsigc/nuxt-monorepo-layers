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
const callToActions:[] = [
  // {
  //   name: "Login",
  //   href: "#",
  // },
  // {
  //   name: "Register",
  //   href: "#",
  //   variant: "outline",
  // },
];

const { data } = await useAsyncData('Navigation', () => queryContent('/').where({ _partial: true,title:"Navigation" }).findOne())

</script>

<template>
  <div
    class="min-h-screen flex flex-col"
  >
    <NavigationHeader
      :call-to-action="callToActions"
      :menu="data.MenuLinks"
      :short-links="data.ShortLinks"
      :logo-link="{ title: 'Rosa Mexican Restaurant', href: '/', src: '/logo.png' }"
    >
      <ThemeSwitcher />
    </NavigationHeader>
    <slot />
  </div>
</template>
<style scoped></style>
