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
 import lgThumbnail from "lightgallery/plugins/thumbnail";
 import Zoom from "lightgallery/plugins/zoom";
 import Lightgallery from "lightgallery/vue";

 import "lightgallery/scss/lightgallery-bundle.scss";
 import "lightgallery/scss/lg-transitions.scss";
interface Images {
  id: number;
  src: string;
  size: string;
  thumb: string;
  alt: string;
  html: string;
  class?: string;
}
interface Props {
  images: Images[];
  class?: string;
}
const props = defineProps<Props>();
const { images } = toRefs(props);
const plugins = [lgThumbnail, Zoom];
const styles = tv({
  base: "grid grid-cols-4 gap-5",
});

const itemStyles = tv({
  base: "gallery-item",
});
</script>

<template>
  <lightgallery
    :settings="{
      speed: 300,
      plugins: plugins,
      pager: true,
      thumbnail: true,
      zoom:true,
      mode:'lg-slide',
      zoomFromOrigin:true ,
      backdropDuration:800,
      trapFocus:true
    }"
    :class="styles({ class: props.class })"
  >
    <slot v-bind="images">
      <template v-for="item in images" :key="item.id">
        <a
          :data-lg-size="item.size"
          :class="itemStyles({ class: item.class })"
          :data-src="item.src"
          :data-tweet-text="item.alt"
          :data-sub-html="item.html"
        >
          <img class="img-responsive" :src="item.thumb" :alt="item.alt">
        </a>
      </template>
    </slot>
  </lightgallery>
</template>

<style global>
.lg-outer .lg-first-slide .lg-dummy-img{
  display: none;
}
.lg-outer.lg-zoom-from-image{
  opacity: 0.001;
}
.lg-container.lg-show .lg-backdrop,
.lg-container.lg-show .lg-outer{
  opacity: 1;
}
</style>
