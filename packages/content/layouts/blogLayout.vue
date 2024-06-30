<script lang="ts" setup>
/**
 *
 * Blog layout
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

const footer = {
  description: "Whether you're planning a birthday bash, anniversary celebration, rehearsal dinner, or corporate event, Rosa Mexicana Cocina offers a warm and inviting atmosphere that will make your guests feel right at home.",
  title: "Celebrate Your Special Event!",
  logoUrl: "/logo.png",
  btns: [
    {
      label: "Call Us Now",
      href: "tel:+1-256-559-5900",
      variant: "outline",
    }
  ],
}
</script>

<template>
  <div>
    <NavigationHeader
      :call-to-action="callToActions"
      :menu="data.MenuLinks"
      :short-links="data.ShortLinks"
      :logo-link="{ title: 'Rosa Mexican Restaurant', href: '/' }"
    >
      <ThemeSwitcher />
    </NavigationHeader>
    <slot />
    <FooterCallToAction v-bind="footer" />
  </div>
</template>
<style scoped></style>
