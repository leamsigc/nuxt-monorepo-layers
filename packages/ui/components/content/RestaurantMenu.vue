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

interface MenuTabs {
  label: string;
  value: string;
  menu: {
    type: string;
    description: string;
    name: string;
    image: string;
    price: string;
    button: string;
  }[];
}

interface Props {
  menu: MenuTabs[];
  defaultValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  menu: () => [],
  defaultValue: "drinks",
});

const { menu, defaultValue } = toRefs(props);
</script>

<template>
  <div class="flex w-full justify-center my-10">
    <UiTabs class="container mx-auto" :default-value="defaultValue">
      <UiTabsList
        :pill="false"
        class="relative grid grid-cols-1 gap-2 xl:grid-cols-6"
        :class="`md:grid-cols-${menu.length}`"
      >
        <UiTabsTrigger
          v-for="tab in menu"
          :key="tab.value"
          :pill="false"
          :value="tab.value"
          class="justify-start"
        >
          {{ tab.label }}
        </UiTabsTrigger>

        <UiTabsIndicator />
      </UiTabsList>
      <UiTabsContent v-for="tab in menu" :key="tab.value" :value="tab.value">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 container mx-auto"
        >
          <ContentMenuItem
            v-for="component in tab.menu"
            :key="component.name"
            v-bind="component"
          />
        </div>
      </UiTabsContent>
    </UiTabs>
  </div>
</template>
<style scoped></style>
