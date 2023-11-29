<template>
  <div class="about">
    <div class="about__text">
      <h2>{{ global[0].aboutHeadline }}</h2>
      <p>{{ global[0].aboutText }}</p>
    </div>
    <figure class="about__image"><img :src="imageUrl"
           alt="Jonas Portrait"></figure>
  </div>
</template>

<script setup lang="ts">
const { $urlFor } = useNuxtApp()

const props = defineProps({
  global: {
    type: Object,
    required: true,
  },
});

const imageUrl = computed(() => {
  return $urlFor(props.global[0].aboutImage).width(800).url();
});
</script>

<style lang="scss">
.about {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0;

  &__text {
    max-width: 40rem;
  }
  
  &__image {
    --size: 25vw;
    flex-shrink: 0;
    width: var(--size);
    height: var(--size);
    border-radius: 99%;
    overflow: hidden;
    margin-left: 1rem;
    margin-top: 3rem;
    
    img {
      // transform: rotate(15deg);
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: rotatePic 15s infinite ;
    }
  }

  h2 {
    color: var(--red);
    font-size: 2.5rem;
    line-height: .9;
    letter-spacing: -.05rem;
    font-weight: 800;
    margin: 0;
    margin-bottom: .5rem;
  }

  p {
    margin: 0;
  }

  @include mobile {
    flex-direction: column;
    align-items: center;
    
    h2 {
      font-size: 2rem;
    }
    &__image {
      --size: 60vw;

      margin: 0;
      margin-top: .5rem;
    }
  }
}

@keyframes rotatePic {
  0% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(25deg);
  }
}

</style>