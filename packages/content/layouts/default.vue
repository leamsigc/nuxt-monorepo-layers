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
const callToActions = [
  {
    name: "Login",
    href: "#",
  },
  {
    name: "Register",
    href: "#",
    variant: "outline",
  },
];

const MenuLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Exterior Painting",
        href: "/exterior-painting",
        children: [
          {
            name: "About us",
            description: "Learn more about our company and our team.",
            icon: "lucide:flag",
            href: "#",
          },
          {
            name: "Careers",
            description: "Join our team and help us build the future.",
            icon: "lucide:briefcase",
            href: "#",
          },
          {
            name: "Contact us",
            description: "Get in touch with our team.",
            icon: "lucide:mail",
            href: "#",
          },
        ],
      },
      {
        name: "Interior Painting",
        href: "/interior-painting",
        children: [
          {
            name: "About us",
            description: "Learn more about our company and our team.",
            icon: "lucide:flag",
            href: "#",
          },
          {
            name: "Careers",
            description: "Join our team and help us build the future.",
            icon: "lucide:briefcase",
            href: "#",
          },
          {
            name: "Contact us",
            description: "Get in touch with our team.",
            icon: "lucide:mail",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const ShortLinks = [
  { name: "About us", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Legal", href: "#" },
  { name: "Support", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "Cookie settings", href: "#" },
];
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
  >
    <NavigationHeader
      :call-to-action="callToActions"
      :menu="MenuLinks"
      :short-links="ShortLinks"
      :logo-link="{ title: 'Rosa Mexican Restaurant', href: '/' }"
    />
    <slot />
  </div>
</template>
<style scoped></style>
