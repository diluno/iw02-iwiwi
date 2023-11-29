<template>
  <div class="release">
    <div class="release__meta">
      <figure class="release__cover"><img :src="albumCover"
             alt=""></figure>
      <h3>{{ release.title }}</h3>
    </div>
    <div class="release__video">
      <iframe width="560"
              height="315"
              :src="`https://www.youtube-nocookie.com/embed/${release.youtubeId}?si=Cdsz47Mj-JTwh2TV`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $urlFor } = useNuxtApp()
const props = defineProps({
  release: {
    type: Object,
    required: true,
  },
});
const albumCover = computed(() => {
  return $urlFor(props.release.albumCover).width(800).url();
});
</script>

<style lang="scss">
.release {

  &__meta {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 1rem;
    margin: 0;
    margin-left: 1rem;
    font-weight: 800;
  }

  &__video {
    margin-top: .5rem;

    iframe {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }

  &__cover {
    --size: 4rem;

    width: var(--size);
    height: var(--size);
    margin: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>