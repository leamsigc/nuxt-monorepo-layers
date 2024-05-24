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
import { useForwardPropsEmits } from "radix-vue";
import { DrawerRoot } from "vaul-vue";
import type { DrawerRootEmits, DrawerRootProps } from "vaul-vue";

const props = defineProps<DrawerRootProps>();
const emits = defineEmits<DrawerRootEmits>();
const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DrawerRoot v-bind="forwarded">
    <slot />
  </DrawerRoot>
</template>

