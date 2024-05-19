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
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/scss/lightgallery.scss";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  images: Array<{
    id: number;
    src: string;
    size: string;
    thumb: string;
    alt: string;
    html: string;
  }>;
}
const props = defineProps<Props>();
const { images, title, subTitle, description } = toRefs(props);
const plugins = [lgThumbnail, lgZoom];
</script>

<template>
  <section class="max-w-screen-2xl mx-auto px-14 py-20">
    <TheTitle :title="title" :subTitle="subTitle" :description="description" />
    <lightgallery :settings="{ speed: 500, plugins: plugins, pager: false, thumbnail: false }"
      class="grid grid-cols-4 gap-5">
      <a v-for="item in images" :key="item.id" :data-lg-size="item.size" class="gallery-item" :data-src="item.src"
        :data-tweet-text="item.alt" :data-sub-html="item.html">
        <img class="img-responsive" :src="item.thumb" :alt="item.alt" />
      </a>
    </lightgallery>
  </section>
</template>
<style lang="css" scoped></style>
