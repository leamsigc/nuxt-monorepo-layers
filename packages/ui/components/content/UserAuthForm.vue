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
import { cn } from "@UI/lib/utils";

const isLoading = ref(false);
const url = ref("");
const seoPagesStore = useSeoPages();
const router = useRouter();
async function onSubmit(event: Event) {
  event.preventDefault();
  try {
    isLoading.value = true;
    await seoPagesStore.ACTION_GET_SITE_MAP({ url: url.value });
    await router.push("/admin/stepTwo");
  } catch (error) {
    // Handle error
  } finally {
    isLoading.value = false;
  }
}
</script>
<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="url"> Target URL: </Label>
          <Input id="url" placeholder="https://example.com" type="url" v-model="url" auto-capitalize="none"
            auto-complete="url" auto-correct="off" :disabled="isLoading" />
        </div>
        <Button :disabled="isLoading"> Get SEO juice </Button>
      </div>
    </form>
  </div>
</template>
<style scoped></style>
