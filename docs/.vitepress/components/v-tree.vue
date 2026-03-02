<template>
  <div class="v-dir-tree">
    <div
      v-for="(line, i) in lines"
      :key="i"
      class="v-dir-tree__line"
      :class="[`v-dir-tree__line--${line.type}`]"
    >
      <span class="v-dir-tree__indent">{{ line.indent }}</span>
      <span class="v-dir-tree__content">{{ line.content }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// FIXME: Проверить

import { computed } from "vue";

export interface DirTreeNode {
  type: "folder" | "file" | "comment";
  name?: string;
  text?: string;
  children?: DirTreeNode[];
}

interface TreeLine {
  indent: string;
  type: DirTreeNode["type"];
  content: string;
}

const props = withDefaults(defineProps<{ tree?: DirTreeNode[] }>(), {
  tree: () => [],
});

const lines = computed<TreeLine[]>(() => {
  const out: TreeLine[] = [];
  function walk(nodes: DirTreeNode[], indent: string, pipe: string) {
    for (const node of nodes) {
      if (node.type === "folder") {
        out.push({ indent, type: "folder", content: `📂 ${node.name ?? ""}` });
        if (node.children?.length) {
          walk(node.children, pipe + "|  ", pipe + "|  ");
        }
      } else if (node.type === "file") {
        out.push({ indent, type: "file", content: `› ${node.name ?? ""}` });
      } else if (node.type === "comment") {
        out.push({ indent, type: "comment", content: `# ${node.text ?? ""}` });
      }
    }
  }
  walk(props.tree, "", "  ");
  return out;
});
</script>

<style scoped>
.v-dir-tree {
  margin: 0;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.6;
  background: var(--vp-c-bg-soft, #f6f8fa);
  border-radius: 6px;
  overflow-x: auto;
  font-family: ui-monospace, monospace;
}

.v-dir-tree__line {
  white-space: pre;
}

.v-dir-tree__indent {
  user-select: none;
  color: var(--vp-c-divider, #e2e2e2);
}

.v-dir-tree__line--folder .v-dir-tree__content {
  font-weight: 600;
  color: var(--vp-c-brand-1, #3eaf7c);
}

.v-dir-tree__line--file .v-dir-tree__content {
  color: var(--vp-c-text-1, #213547);
}

.v-dir-tree__line--comment .v-dir-tree__content {
  font-style: italic;
  color: var(--vp-c-text-2, #476582);
}
</style>
