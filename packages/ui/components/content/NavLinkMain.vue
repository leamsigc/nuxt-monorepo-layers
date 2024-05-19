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
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/content/ui/navigation-menu";

interface Props {
  to: string;
  label?: string;
}
const props = defineProps<Props>();
const { to, label } = toRefs(props);
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuLink :href="to" :class="navigationMenuTriggerStyle()">
      <slot>
        {{ label }}
      </slot>
    </NavigationMenuLink>
  </NavigationMenuItem>
</template>
<style scoped></style>
