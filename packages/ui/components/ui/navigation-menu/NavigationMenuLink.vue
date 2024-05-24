<script setup lang="ts">
import { NavigationMenuLink, useEmitAsProps } from "radix-vue";

import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from "radix-vue";
const props = defineProps<NavigationMenuLinkProps>();
const emits = defineEmits<NavigationMenuLinkEmits>();
</script>

<template>
  <NavigationMenuLink v-bind="{ ...props, ...useEmitAsProps(emits) }">
    <slot />
  </NavigationMenuLink>
</template>
