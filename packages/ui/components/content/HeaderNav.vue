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
import ListItem from "./NavigationMenuItem.vue";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/content/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Exterior Painting",
    href: "/exterior-painting",
    description:
      "The Pacific Northwest weather can be tough on exterior paint.  To ensure the best results, there is no substitute for thorough prep work, quality materials, high-end products and proper application technique.",
  },
  {
    title: "Interior Painting",
    href: "/interior-painting",
    description:
      "Turn your house into a work of art with high-quality house painting services from Seattle's best. Our seasoned painters provide top-notch services and workmanship for the best results. We use only high-grade materials and equipment, and our prices are very competitive. ",
  },
  {
    title: "Deck Staining and Painting",
    href: "/deck-staining-and-painting",
    description:
      "If you're looking to update your deck and extend its lifespan with a fresh paint job, Jahaziel's Carpentry&Painting LLC can professionally upgrade your deck, patio, or porch. ",
  },
  {
    title: "Wallpaper Installation and Removal",
    href: "/wallpaper-installation-and-removal",
    description:
      "Installing wallpaper is an easy and creative way to completely transform a room with stylish and complex patterns. With better designs and improved installation, wallpaper projects are easier than ever. From traditional wallpaper to fabric and vinyl wallcoverings, there is a pattern for every space.",
  },
  {
    title: "Cabinet Painting",
    href: "/cabinet-painting",
    description:
      "If you're looking to renovate your kitchen, save some money and use our cabinet painting service to give your cabinets a new look!",
  },
  {
    title: "Custom Painting",
    href: "/custom-painting",
    description:
      "When just a change of wall color isn't enough, Jahaziel's Carpentry&Painting LLC offers custom painting options, like murals, decorative wall art, stenciling, and logo painting. So, if you want to add some personality to a nursery or your home office, contact us!",
  },
];

const servicesOptions = [
  {
    title: "Exterior Painting",
    href: "/exterior-painting",
    description:
      "The Pacific Northwest weather can be tough on exterior paint.  To ensure the best results, there is no substitute for thorough prep work, quality materials, high-end products and proper application technique.",
  },
  {
    title: "Interior Painting",
    href: "/interior-painting",
    description:
      "Turn your house into a work of art with high-quality house painting services from Seattle's best. Our seasoned painters provide top-notch services and workmanship for the best results. We use only high-grade materials and equipment, and our prices are very competitive. ",
  },
  {
    title: "Deck Staining and Painting",
    href: "/deck-staining-and-painting",
    description:
      "If you're looking to update your deck and extend its lifespan with a fresh paint job, Jahaziel's Carpentry&Painting LLC can professionally upgrade your deck, patio, or porch. ",
  },
];
</script>

<template>
  <div class="top-0 left-0 z-40 flex items-center w-full bg-white dark:bg-black sticky">
    <header class="container">
      <div class="relative flex items-center justify-between -mx-4">
        <section>
          <LogoMain />
        </section>
        <button id="navbarToggler"
          class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden navbarTogglerActive">
          <span class="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
          <span class="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
          <span class="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
        </button>
        <div class="ml-auto items-center space-x-4 hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavLinkMain to="/about" label="About" />
              <NavLinkDropdown label="Services" :listItems="components" />
              <NavLinkDropdown label="Getting started" :listItems="servicesOptions">
                <template #before>
                  <li class="row-span-3">
                    <NavLinkCardChild to="/" title="Commercial Painting"
                      description="Interior & exterior painting services">
                      <img src="/img/nav_image_1.png" alt="Exterior Painting" />
                    </NavLinkCardChild>
                  </li>
                </template>
              </NavLinkDropdown>

              <NavLinkMain to="/contact" label="Contact" />
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeSwitcher class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
        </div>
      </div>
    </header>
  </div>
</template>
