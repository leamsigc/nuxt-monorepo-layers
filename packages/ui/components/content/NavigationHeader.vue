<script lang="ts" setup>
import type { MenuItem } from "@UI/types";

interface Props {
  logoLink?: { title: string; src: string; href: string };

  menu: MenuItem[];
  callToAction: MenuItem[];
  shortLinks: MenuItem[];
}

const props = defineProps<Props>();
const { logoLink, menu, callToAction, shortLinks } = toRefs(props);
</script>
<template>
  <header class="z-20 border-b bg-background/90 backdrop-blur relative">
    <UiContainer class="flex h-16 items-center justify-between lg:h-20">
      <div class="flex items-center gap-10">
        <NuxtLink v-if="logoLink" :to="logoLink.href" class="flex items-center gap-3">
          <img
            v-if="logoLink.src"
            :src="logoLink.src"
            fit="contain"
            :alt="logoLink.title"
            :title="logoLink.title"
            class="h-6 object-contain lg:h-8"
          >
          <span v-else class="font-semibold lg:text-lg">{{ logoLink.title }}</span>
        </NuxtLink>
        <UiNavigationMenu
          as="nav"
          class="hidden items-center justify-start gap-8 lg:flex"
        >
          <UiNavigationMenuList class="gap-2">
            <UiNavigationMenuItem v-for="(data, link) in menu" :key="link">
              <template v-if="!data.children">
                <UiNavigationMenuLink as-child>
                  <UiButton :to="data.href" variant="ghost" size="sm">
                    {{ data.name }}
                  </UiButton>
                </UiNavigationMenuLink>
              </template>
              <template v-else>
                <UiNavigationMenuTrigger
                  class="h-9 px-3 text-sm capitalize"
                  :title="data.name"
                />
                <UiNavigationMenuContent>
                  <div
                    class="grid grid-cols-1 gap-5 bg-background p-6 py-5 ring-1 ring-muted lg:w-[750px] lg:grid-cols-2 xl:w-[1000px] xl:grid-cols-3"
                  >
                    <div
                      v-for="(item, index) in data.children"
                      :key="`${item.name}-${index}`"
                    >
                      <p class="mb-5 text-sm font-semibold capitalize text-primary">
                        {{ item.name }}
                      </p>
                      <ul class="flex w-full flex-col gap-2">
                        <li v-for="(child, k) in item.children" :key="k">
                          <UiNavigationMenuLink
                            class="data-[active]:bg-muted/80"
                            as-child
                          >
                            <NuxtLink
                              :to="child.href"
                              class="flex gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                            >
                              <Icon
                                v-if="child.icon"
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
              </template>
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
                    <template v-for="(item, index) in menu" :key="index">
                      <UiButton
                        v-if="!item.children"
                        variant="ghost"
                        class="justify-start text-base"
                        :to="item.href"
                      >
                        {{ item.name }}
                      </UiButton>
                      <UiCollapsible v-else>
                        <UiCollapsibleTrigger as-child>
                          <UiButton
                            variant="ghost"
                            class="w-full justify-start text-base capitalize *:data-[state=open]:-rotate-180"
                            to="#"
                          >
                            {{ item.name }}
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
                            v-for="(menuLink, cat, index) in item.children"
                            :key="`${cat}-${index}`"
                            class="mt-5"
                          >
                            <p class="mb-5 text-sm font-semibold capitalize text-primary">
                              {{ menuLink.name }}
                            </p>
                            <ul class="flex w-full flex-col gap-2">
                              <li v-for="(child, k) in menuLink.children" :key="k">
                                <UiNavigationMenuLink
                                  class="data-[active]:bg-muted/80"
                                  as-child
                                >
                                  <NuxtLink
                                    :to="child.href"
                                    class="flex gap-4 rounded-md p-3 transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                                  >
                                    <Icon
                                      v-if="child.icon"
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

                    <UiGradientDivider class="my-5" />

                    <ul class="grid grid-cols-2 gap-x-3 gap-y-5 px-4">
                      <li v-for="(m, j) in shortLinks" :key="j">
                        <NuxtLink class="py-2" :to="m.href">
                          {{ m.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                    <UiGradientDivider class="my-5" />

                    <UiButton
                      v-for="link in callToAction"
                      :key="link.name"
                      :to="link.href"
                      :variant="link.variant"
                    >
                      {{ link.name }}
                    </UiButton>
                  </div>
                </UiScrollArea>
              </template>
            </UiSheetContent>
          </UiSheetTrigger>
        </UiSheet>
      </div>
      <div class="hidden items-center gap-3 lg:flex">
        <UiButton
          v-for="link in callToAction"
          :key="link.name"
          :to="link.href"
          :variant="link.variant"
        >
          {{ link.name }}
        </UiButton>
      </div>
    </UiContainer>
  </header>
</template>
