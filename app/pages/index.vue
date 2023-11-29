<template>
  <div>
    <Hero :global="global" />
    <Concerts />
    <About :global="global" />
    <div class="releases">
      <Release v-for="release in releases"
               :key="release._id"
               :release="release" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Global } from "~/types/Global";
import { type Release } from "~/types/Release";

const query = groq`*[ _type == "global"]`;
const { data: global } = await useSanityQuery<Global[]>(query);
const queryReleases = groq`*[ _type == "release"]`;
const { data: releases } = await useSanityQuery<Release[]>(queryReleases);
</script>

<style lang="scss">
.releases {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin: 6rem 0;

  .release {
    grid-column: span 1;
  }

  @include mobile {
    gap: 1rem;
    margin: 3rem 0;
    
    .release {
      grid-column: span 2;
    }
  }
}
</style>