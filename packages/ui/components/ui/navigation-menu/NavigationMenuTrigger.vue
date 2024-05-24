<script setup lang="ts">
import { NavigationMenuTrigger } from "radix-vue";
import { navigationMenuTriggerStyle } from ".";
import { cn } from "@UI/lib/utils";
import type { NavigationMenuTriggerProps } from "radix-vue";

const props = defineProps<NavigationMenuTriggerProps & { class?: string }>();
</script>

<template>
  <NavigationMenuTrigger
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
    v-bind="props"
  >
    <slot />
    <Icon
      name="chevron-down"
      class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
