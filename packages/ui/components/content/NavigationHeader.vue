<script lang="ts" setup>
const miniLinks:{ name: string; href: string }[] = [
  { name: "About us", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Legal", href: "#" },
  { name: "Support", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "Cookie settings", href: "#" },
];
interface Link {
  name: string;
  description: string;
  icon: string;
  href: string;
}
interface Links {
  [key: string]: Link[]
}
interface LinksData {
  [key: string]: Links
}

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

const HeaderLinks : LinksData = {
  products: {
    resources: [
      {
        name: "Blog",
        description: "The latest industry news, updates and info.",
        icon: "lucide:book",
        href: "#",
      },
      {
        name: "Customer stories",
        description: "See how our customers use our platform to grow their business.",
        icon: "lucide:sparkle",
        href: "#",
      },
      {
        name: "Video tutorials",
        description: "All the information you need to know about our platform.",
        icon: "lucide:play-circle",
        href: "#",
      },
      {
        name: "Help center",
        description: "Get all your questions answered in our help center.",
        icon: "lucide:life-buoy",
        href: "#",
      },
    ],
    company: [
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
    "use cases": [
      {
        name: "Marketing",
        description: "Learn more about our company and our team.",
        icon: "lucide:flag",
        href: "#",
      },
      {
        name: "Sales",
        description: "Join our team and help us build the future.",
        icon: "lucide:circle-dollar-sign",
        href: "#",
      },
      {
        name: "Customer support",
        description: "Get in touch with our team.",
        icon: "lucide:mail",
        href: "#",
      },
      {
        name: "Engage",
        description: "Get in touch with our team.",
        icon: "lucide:messages-square",
        href: "#",
      },
    ],
  },
  resources: {
    resources: [
      {
        name: "Blog",
        description: "The latest industry news, updates and info.",
        icon: "lucide:book",
        href: "#",
      },
      {
        name: "Customer stories",
        description: "See how our customers use our platform to grow their business.",
        icon: "lucide:sparkle",
        href: "#",
      },
      {
        name: "Video tutorials",
        description: "All the information you need to know about our platform.",
        icon: "lucide:play-circle",
        href: "#",
      },
      {
        name: "Help center",
        description: "Get all your questions answered in our help center.",
        icon: "lucide:life-buoy",
        href: "#",
      },
    ],
    company: [
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
    "use cases": [
      {
        name: "Marketing",
        description: "Learn more about our company and our team.",
        icon: "lucide:flag",
        href: "#",
      },
      {
        name: "Sales",
        description: "Join our team and help us build the future.",
        icon: "lucide:circle-dollar-sign",
        href: "#",
      },
      {
        name: "Customer support",
        description: "Get in touch with our team.",
        icon: "lucide:mail",
        href: "#",
      },
      {
        name: "Engage",
        description: "Get in touch with our team.",
        icon: "lucide:messages-square",
        href: "#",
      },
    ],
  },
};
</script>
<template>
  <header class="z-20 border-b bg-background/90 backdrop-blur">
    <UiContainer class="flex h-16 items-center justify-between lg:h-20">
      <div class="flex items-center gap-10">
        <NuxtLink to="#" class="flex items-center gap-3">
          <img
            src="https://ioacademy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-thumbnail.40a942a8.png&w=1080&q=75"
            fit="contain"
            alt="Company Logo"
            title="Company Logo"
            class="h-6 object-contain lg:h-8"
          >
          <span class="font-semibold lg:text-lg">UI Thing</span>
        </NuxtLink>
        <UiNavigationMenu
          as="nav"
          class="hidden items-center justify-start gap-8 lg:flex"
        >
          <UiNavigationMenuList class="gap-2">
            <UiNavigationMenuItem>
              <UiNavigationMenuLink as-child>
                <UiButton to="#" variant="ghost" size="sm">
                  Home
                </UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>
            <template v-for="(data, link) in HeaderLinks" :key="link">
              <UiNavigationMenuItem>
                <UiNavigationMenuTrigger
                  class="h-9 px-3 text-sm capitalize"
                  :title="link"
                />
                <UiNavigationMenuContent>
                  <div
                    class="grid grid-cols-1 gap-5 bg-background p-6 py-5 ring-1 ring-muted lg:w-[750px] lg:grid-cols-2 xl:w-[1000px] xl:grid-cols-3"
                  >
                    <div v-for="(item, cat, index) in data" :key="`${cat}-${index}`">
                      <p class="mb-5 text-sm font-semibold capitalize text-primary">
                        {{ cat }}
                      </p>
                      <ul class="flex w-full flex-col gap-2">
                        <li v-for="(child, k) in item" :key="k">
                          <UiNavigationMenuLink
                            class="data-[active]:bg-muted/80"
                            as-child
                          >
                            <NuxtLink
                              :to="child.href"
                              class="flex gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                            >
                              <Icon
                                :name="child.icon"
                                class="mt-px h-5 w-5 shrink-0 text-primary"
                              />
                              <div class="flex flex-col gap-1.5 leading-none">
                                <p class="text-sm font-semibold">
                                  {{ child.name }}
                                </p>
                                <p
                                  class="text-sm text-muted-foreground"
                                  v-html="child.description"
                                />
                              </div>
                            </NuxtLink>
                          </UiNavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </UiNavigationMenuContent>
              </UiNavigationMenuItem>
            </template>
            <UiNavigationMenuItem>
              <UiNavigationMenuLink as-child>
                <UiButton to="#" variant="ghost" size="sm">
                  Pricing
                </UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>
          </UiNavigationMenuList>
        </UiNavigationMenu>
      </div>
      <div class="lg:hidden">
        <UiSheet>
          <UiSheetTrigger as-child>
            <UiButton variant="ghost" size="icon-sm">
              <Icon name="lucide:menu" class="h-5 w-5" />
            </UiButton>
            <UiSheetContent class="w-[90%] p-0">
              <template #content>
                <UiSheetTitle class="sr-only" title="Mobile menu" />
                <UiSheetDescription class="sr-only" description="Mobile menu" />
                <UiSheetX class="z-20" />

                <UiScrollArea class="h-full p-5">
                  <div class="flex flex-col gap-2">
                    <UiButton variant="ghost" class="justify-start text-base" to="#">
                      Home
                    </UiButton>
                    <template v-for="(data, link, i) in HeaderLinks" :key="i">
                      <UiCollapsible>
                        <UiCollapsibleTrigger as-child>
                          <UiButton
                            variant="ghost"
                            class="w-full justify-start text-base capitalize *:data-[state=open]:-rotate-180"
                            to="#"
                          >
                            {{ link }}
                            <Icon
                              name="lucide:chevron-down"
                              class="ml-auto h-4 w-4 transition"
                            />
                          </UiButton>
                        </UiCollapsibleTrigger>
                        <UiCollapsibleContent
                          class="data-[state=closed]:animate-none data-[state=open]:p-3 data-[state=open]:pt-0"
                        >
                          <div
                            v-for="(item, cat, index) in data"
                            :key="`${cat}-${index}`"
                            class="mt-5"
                          >
                            <p class="mb-5 text-sm font-semibold capitalize text-primary">
                              {{ cat }}
                            </p>
                            <ul class="flex w-full flex-col gap-2">
                              <li v-for="(child, k) in item" :key="k">
                                <UiNavigationMenuLink
                                  class="data-[active]:bg-muted/80"
                                  as-child
                                >
                                  <NuxtLink
                                    :to="child.href"
                                    class="flex gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                                  >
                                    <Icon
                                      :name="child.icon"
                                      class="mt-px h-5 w-5 shrink-0 text-primary"
                                    />
                                    <div class="flex flex-col gap-1.5 leading-none">
                                      <p class="text-sm font-semibold">
                                        {{ child.name }}
                                      </p>
                                    </div>
                                  </NuxtLink>
                                </UiNavigationMenuLink>
                              </li>
                            </ul>
                          </div>
                        </UiCollapsibleContent>
                      </UiCollapsible>
                    </template>
                    <UiButton variant="ghost" class="justify-start text-base" to="#">
                      Pricing
                    </UiButton>

                    <UiGradientDivider class="my-5" />

                    <ul class="grid grid-cols-2 gap-x-3 gap-y-5 px-4">
                      <li v-for="(m, j) in miniLinks" :key="j">
                        <NuxtLink class="py-2" :to="m.href">
                          {{ m.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                    <UiGradientDivider class="my-5" />
                    <UiButton to="#">
                      Sign up
                    </UiButton>
                    <UiButton variant="outline" to="#">
                      Log in
                    </UiButton>
                  </div>
                </UiScrollArea>
              </template>
            </UiSheetContent>
          </UiSheetTrigger>
        </UiSheet>
      </div>
      <div class="hidden items-center gap-3 lg:flex">
        <UiButton to="#" variant="ghost" size="sm">
          Log in
        </UiButton>
        <UiButton to="#" size="sm">
          Sign up
        </UiButton>
      </div>
    </UiContainer>
  </header>
</template>