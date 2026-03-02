<template>
  <div class="container" :class="classes">
    <slot>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type PaddingSide = "left" | "right" | "top" | "bottom";

interface Props {
  padding: PaddingSide;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  ["padding-" + props.padding]: true,
}));
</script>

<style scoped>
.container {
  --padding: 35px;
}
.padding-left {
  padding-left: var(--padding);
}
.padding-right {
  padding-right: var(--padding);
}
.padding-top {
  padding-top: var(--padding);
}
.padding-bottom {
  padding-bottom: var(--padding);
}
</style>
