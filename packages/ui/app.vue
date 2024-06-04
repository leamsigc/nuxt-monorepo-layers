<script lang="ts" setup>
import type { MenuItem } from "@UI/types";

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
const callToActions: MenuItem[] = [
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

const MenuLinks: MenuItem[] = [
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

const ShortLinks: MenuItem[] = [
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
  <div>
    <ContentNavigationHeader
      :call-to-action="callToActions"
      :menu="MenuLinks"
      :short-links="ShortLinks"
      :logo-link="{ title: 'Rosa Mexican Restaurant', href: '/' }"
    />
    <ContentHeroComponent
      :hero-image-url="'https://rosiesmexicancantina.com/wp-content/uploads/2022/09/Rosies-Mexican-Cantina_web_2022.jpg'"
      title="Rosa Mexicana Cocina"
      sub-title="We serve the best Mexican food in town. Homemade mexican food for all of our customers in the area of Huntsville Alabama"
    >
      Make a reservation
      <Icon name="material-symbols:call-end" class="" size="24" />
    </ContentHeroComponent>

    <ContentTheTitle title="Rosies Mexican Cocina - Menu" sub-title="Our authentic Mexican dishes to satisfy every guest" class="mt-12" />
    <div class="flex w-full justify-center">
      <UiTabs class="container mx-auto" default-value="drinks">
        <UiTabsList :pill="false" class="relative grid w-3/6 grid-cols-6">
          <UiTabsTrigger :pill="false" value="drinks">
            Drinks
          </UiTabsTrigger>
          <UiTabsTrigger :pill="false" value="desserts">
            Desserts
          </UiTabsTrigger>
          <UiTabsIndicator />
        </UiTabsList>
        <UiTabsContent value="drinks">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 container mx-auto">
            <ContentMenuItem />
            <ContentMenuItem />
            <ContentMenuItem />
            <ContentMenuItem />
            <ContentMenuItem />
          </div>
        </UiTabsContent>
        <UiTabsContent value="desserts">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 container mx-auto">
            <ContentMenuItem />
            <ContentMenuItem />
            <ContentMenuItem />
            <ContentMenuItem />
            <ContentMenuItem />
          </div>
        </UiTabsContent>
      </UiTabs>
    </div>
  </div>
</template>
<style scoped></style>
