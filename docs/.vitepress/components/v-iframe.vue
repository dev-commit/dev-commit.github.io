<template>
  <iframe
    class="frame"
    :src="src"
    :height="height"
    style="width: 100%"
    scrolling="no"
    frameborder="no"
    allowtransparency="true"
    allowfullscreen="true"
  >
  </iframe>
</template>

<script setup lang="ts">
interface Props {
  src: string;
  height?: string | number;
}

withDefaults(defineProps<Props>(), {
  height: "400",
});
</script>

<style scoped>
.frame {
  margin: 20px 0;
}
</style>
