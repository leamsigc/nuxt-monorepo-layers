<script lang="ts" setup>
/**
 *
 * Logo container
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
 interface Props{
  url: string
 }
 const props = withDefaults(defineProps<Props>(), {
  url: '/img/logo.svg'
 })
 const { url } = toRefs(props)
</script>

<template>
  <img :src="url" alt="" class="h-14 w-16" />
</template>
<style scoped></style>
