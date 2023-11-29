<template>
  <div class="hero"
       v-if="global[0]">
    <Logo class="hero__logo" />
    <figure class="hero__image"
            ref="photo">
      <img :src="$urlFor(global[0].mainImage).width(1800).url()"
           alt="Immer wieder Wirsing Bandfoto">
      <img v-if="overlayImg"
           :src="overlayImg">
    </figure>
  </div>
</template>

<script setup>
const { $urlFor } = useNuxtApp()

const props = defineProps({
  global: {
    type: Object,
    required: true,
  },
});
const overlayImg = ref(null);

setInterval(() => {
  const overlays = props.global[0].imageOverlays;
  overlayImg.value = $urlFor(overlays[Math.floor(Math.random() * overlays.length)]).url();
}, 2000);

const photo = ref(null);

onMounted(() => {
  photo.value.classList.add('visible');
})

</script>

<style lang="scss">
.hero {
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  &__logo {
    position: relative;
    z-index: 1;
    grid-column: span 7;
  }

  &__image {
    height: auto;
    grid-column: 5 / span 8;
    margin: 0;
    margin-top: -4rem;
    position: relative;
    opacity: 0;
    transition: opacity 1s .2s;

    img {
      display: block;
      width: 100%;
      height: auto;

      &:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
      }
    }

    &.visible {
      opacity: 1;
    }
  }

  @include mobile {
    &__logo {
      grid-column: span 10;
    }

    &__image {
      grid-column: 2 / span 11;
      margin-top: -2rem;
    }
  }
}
</style>