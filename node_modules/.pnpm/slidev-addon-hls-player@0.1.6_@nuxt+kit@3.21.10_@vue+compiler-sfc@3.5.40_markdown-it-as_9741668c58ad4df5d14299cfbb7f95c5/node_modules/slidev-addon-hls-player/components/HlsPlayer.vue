<template>
  <video
    ref="video"
    :poster="previewImageSrc"
    :controls="true"
    :loop="loop"
    :muted="muted"
  >
    <source :src="src" type="application/x-mpegURL" />
  </video>
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, useTemplateRef } from "vue";
import { onSlideEnter, onSlideLeave, useSlideContext } from "@slidev/client";
import Hls from "hls.js";

interface Props {
  src: string;
  previewImageSrc?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  src: "",
  previewImageSrc: "",
  autoplay: false,
  loop: false,
  muted: false,
});

const video = useTemplateRef("video");

const slideContext = useSlideContext();
const hasSlideRenderContext = computed(
  () => slideContext.$renderContext.value === "slide"
);

onMounted(() => {
  prepareVideoPlayer();
});

onUpdated(() => {
  prepareVideoPlayer();
});

// continue autoplay when the slide is entered
onSlideEnter(() => {
  if (video.value && props.autoplay && hasSlideRenderContext.value) {
    video.value.play();
  }
});

// pause the video when the slide is left
onSlideLeave(() => {
  video.value.pause();
});

function prepareVideoPlayer() {
  const hls = new Hls();
  hls.loadSource(props.src);
  hls.attachMedia(video.value);
}
</script>
