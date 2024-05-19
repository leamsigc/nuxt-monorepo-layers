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
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/content/ui/navigation-menu";
import ListItem from "./NavigationMenuItem.vue";

interface Props {
  label?: string;

  listItems: Array<{
    title: string;
    href: string;
    description: string;
  }>;
}
const props = withDefaults(defineProps<Props>(), {
  listItems: () => [],
});
const { label, listItems } = toRefs(props);
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>{{ label }}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul class="grid w-96 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
        <slot name="before" />
        <ListItem v-for="component in listItems" :key="component.title" :title="component.title" :href="component.href">
          {{ component.description }}
        </ListItem>
        <slot name="after" />
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>
<style scoped></style>
