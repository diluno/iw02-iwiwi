<template>
  <ul class="concerts">
    <li class="concerts__item"
        v-for="concert in concerts">
      <span class="concerts__date"
            :style="circleStyle()"
            v-html="formatDate(concert.date)"></span>
      <div class="concerts__content">
        {{ dayjs(concert.date).format('DD.MM.YYYY') }}<br>
        {{ concert.title }}<br>
        {{ concert.location }}
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { type Concert } from "~/types/Concert";

const query = groq`*[ _type == "concert"]`;
const { data: concerts } = await useSanityQuery<Concert[]>(query);

const formatDate = (date: string) => {
  const _date = dayjs(date);
  return _date.format("DD") + '<br>' + _date.format("MM");
};
const circleStyle = () => {
  return `transform: rotate(${Math.round(Math.random() * 90) - 45}deg)`;
}
</script>

<style lang="scss">
.concerts {
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  margin: 6rem 0;
  padding: 0;

  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 20rem;
    margin: 1rem 0;
  }

  &__date {
    --size: 7rem;

    font-family: monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 2.5rem;
    font-variant-numeric: tabular-nums;
    line-height: .9;
    text-align: center;
    background-color: var(--red);
    color: var(--offwhite);
    width: var(--size);
    height: var(--size);
    border-radius: 99%;
    flex-shrink: 0;
  }

  &__content {
    margin-left: 1rem;
  }

  @include mobile {
    margin: 4rem 0;

    &__date {
      --size: 4rem;
      font-size: 1.5rem;
    }
  }

}
</style>