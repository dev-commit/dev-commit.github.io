<template>
  <div class="wrapper">
    <div
      :class="[
        'column',
        fix ? 'column-fix' : 'column-half',
        compare ? 'column-theme-accent' : '',
      ]"
    >
      <div
        v-if="titleLeft"
        :class="['title', compare && 'title-accent']"
        v-text="titleLeft"
      ></div>
      <slot name="first">User Default1</slot>
    </div>
    <div
      :class="[
        'column',
        fix ? 'column-grow' : 'column-half',
        compare ? 'color-theme-light' : '',
      ]"
    >
      <div
        v-if="titleRight"
        :class="['title', compare && 'title-light']"
        v-text="titleRight"
      ></div>
      <slot name="last">User Default2</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  fix?: boolean;
  compare?: boolean;
  title?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  fix: false,
  compare: false,
});

const titleLeft = computed(() => props.title?.[0] ?? "");
const titleRight = computed(() => props.title?.[1] ?? "");
</script>

<style scoped>
.wrapper {
  --border: 1px solid #e1e1e1;

  display: flex;
  margin: 10px 0px;
  /* border: var(--border); */
}
.column {
  padding: 10px;
  border-right: var(--border);
  box-shadow: var(--box-shadow);
}
.column:last-child {
  border-right: none;
}
.column-half {
  width: 50%;
}
.column-grow {
  width: calc(100% - 200px);
}
.column-fix {
  width: 200px;
}

.title {
  padding: 10px;
  font-weight: bold;
}
.title-accent {
  background-color: rgba(var(--color-sea-green-light), 0.5);
}
.title-light {
  background-color: rgb(var(--color-gray-20));
}

@media screen and (max-width: 1070px) {
  .wrapper {
    flex-wrap: wrap;
  }
  .column-half {
    width: 100%;
  }
  .column-grow {
    width: 100%;
  }
  .column-fix {
    width: 100%;
  }
}
</style>
