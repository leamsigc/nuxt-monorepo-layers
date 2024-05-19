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
interface Props {
    desc: string;
    name: string;
    imgSrc: string;
    role: string;
    alt: string;
}
const prop = defineProps<Props>();
const { desc, name, imgSrc, role, alt } = toRefs(prop);
</script>

<template>
    <div class="">
        <div class="mb-[18px] flex items-center gap-[2px]">
            <Icon name="ic:outline-star" />
            <Icon name="ic:outline-star" />
            <Icon name="ic:outline-star" />
            <Icon name="ic:outline-star" />
            <Icon name="ic:outline-star" />
        </div>

        <p class="mb-6 text-base text-body-color dark:text-dark-6">
            {{ desc }}
        </p>

        <a href="#" class="flex items-center gap-4">
            <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                <img :src="imgSrc" :alt="alt" class="h-[50px] w-[50px] overflow-hidden rounded-full" />
            </div>

            <div>
                <h3 class="text-sm font-semibold text-dark dark:text-white">{{ name }}</h3>
                <p class="text-xs text-body-secondary">{{ role }}</p>
            </div>
        </a>
    </div>
</template>
<style scoped></style>
