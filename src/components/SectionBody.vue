<template>
  <div>
    <span v-for="(item, index) in body" :key="index">
      <span v-if="item.type == 'text'">{{ item.value }}</span>
      <span v-if="item.type == 'text-bold'">
        <TextBold>{{ item.value }}</TextBold>
      </span>
      <span v-if="item.type == 'highlights'">
        <span v-for="(highlight, idx) in highlights" :key="idx">
          <span v-if="highlights.length - 1 == idx">and</span>
          <highlight :data="highlight"></highlight>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import Highlight from './partials/Highlight.vue';
import TextBold from './partials/TextBold.vue';
export default {
  components: { Highlight, TextBold },
  name: 'SectionBody',
  props: ['body', 'highlights'],
};
</script>
