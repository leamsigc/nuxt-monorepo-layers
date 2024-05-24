<script setup lang="ts">
import { NavigationMenuIndicator } from "radix-vue";
import { cn } from "@UI/lib/utils";

import type { NavigationMenuIndicatorProps } from "radix-vue";
const props = defineProps<NavigationMenuIndicatorProps>();
</script>

<template>
  <NavigationMenuIndicator
    v-bind="props"
    :class="
      cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        $attrs.class ?? ''
      )
    "
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuIndicator>
</template>
