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
    targetUrl: string;
    title: string;
    imgSrc: string;
    date: string;
    alt: string;
}

const props = defineProps<Props>();
const { targetUrl, title, imgSrc, date, alt } = toRefs(props);
</script>

<template>
    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <slot name="title"></slot>
        <div class="wow fadeInUp group mb-10" data-wow-delay=".1s" style="visibility: visible; animation-delay: 0.1s">
            <div class="mb-8 overflow-hidden rounded-[5px] min-h-40">
                <NuxtLink :href="targetUrl" class="block">
                    <img :src="imgSrc" :alt="alt" class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
                </NuxtLink>
            </div>
            <div>
                <span
                    class="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white dark:text-slate-950">
                    {{ date }}
                </span>
                <h3>
                    <a href="javascript:void(0)"
                        class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        {{ title }}
                    </a>
                </h3>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
