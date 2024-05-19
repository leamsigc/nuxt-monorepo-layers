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
interface Card {
    targetUrl: string;
    title: string;
    imgSrc: string;
    date: string;
    alt: string;
}
interface Props {
    cards: Card[];

    title: string;
    subTitle: string;
    description: string;
}
const props = defineProps<Props>();
const { cards, description, subTitle, title } = toRefs(props);
</script>

<template>
    <div class="container mx-auto">
        <TheTitle :title="title" :subTitle="subTitle" :description="description" />
        <div class="-mx-4 flex flex-wrap">
            <TheShowCaseCard v-for="card in cards" :key="card.title" v-bind="card" />
        </div>
    </div>
</template>
<style scoped></style>
