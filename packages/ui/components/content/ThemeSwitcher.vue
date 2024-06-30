<script lang="ts" setup>
  /**
   *
   * Theme switcher
   *
   * @author Reflect-Media <reflect.media GmbH>
   * @version 0.0.1
   *
   * @todo [ ] Test the component
   * @todo [ ] Integration test.
   * @todo [✔] Update the typescript.
   */
  const colorMode = useColorMode();
  const onClick = () =>
    colorMode.value === "light"
      ? (colorMode.preference = "dark")
      : (colorMode.preference = "light");
</script>

<template>
  <button aria-label="Color Mode" class="inline-block w-5" @click="onClick">
    <ColorScheme placeholder="...">
      <template v-if="colorMode.value === 'dark'">
        <Icon name="line-md:moon-alt-loop" class="h-5 w-5" />
        <span class="sr-only">Dark Mode</span>
      </template>
      <template v-else>
        <Icon name="line-md:sun-rising-loop" class="h-5 w-5" />
        <span class="sr-only">Light Mode</span>
      </template>
    </ColorScheme>
  </button>
</template>
<style scoped></style>
