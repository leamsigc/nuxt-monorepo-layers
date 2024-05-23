<script lang="ts" setup>
/**
 *
 * Main navigation link
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { NavigationMenuLink } from "@UI/components/ui/navigation-menu";

interface Props {
  to: string;
  title?: string;
  description?: string;
}
const props = defineProps<Props>();
const { to, description, title } = toRefs(props);
</script>

<template>
  <NavigationMenuLink as-child>
    <a
      class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
      :href="to"
    >
      <slot>
        <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" />
      </slot>
      <div class="mb-2 mt-4 text-lg font-medium">{{ title }}</div>
      <p class="text-sm leading-tight text-muted-foreground">
        {{ description }}
      </p>
    </a>
  </NavigationMenuLink>
</template>
<style scoped></style>
