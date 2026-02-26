<script setup lang="ts">
import { computed } from "vue";
import { AutoLink } from "vuepress/client";
import { IHeaderMenuNav } from "../../../types";
// @ts-ignore
import { useNavbarConfig } from "@theme/useNavbarConfig";

const navbarConfig = useNavbarConfig();

const buildNavGroups = (items: IHeaderMenuNav[]) => {
  const result = [];

  for (const item of items) {
    if ("children" in item) {
      const links = item.children
        .filter((child) => child.link)
        .map((child) => ({
          text: child.text,
          link: child.link,
          theme: child.theme,
        }));

      if (links.length) {
        result.push({ title: item.text, links });
      }
    }
  }

  return result;
};

const navGroups = computed(() => buildNavGroups(navbarConfig.value));
const hasNavContent = computed(() => navGroups.value.length > 0);
</script>

<template>
  <div class="vp-navbar">
    <nav v-if="hasNavContent" class="navbar">
      <fieldset v-for="(group, gKey) in navGroups" :key="gKey" class="fieldset">
        <legend class="legend">{{ group.title }}</legend>
        <div class="link-wrapper">
          <AutoLink
            v-for="(item, key) in group.links"
            :key="key"
            :config="{ text: item.text, link: item.link }"
            :class="['link', 'theme-default', item.theme]"
          />
        </div>
      </fieldset>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.vp-navbar {
  padding: 10px;
  background-color: #f0f0f0;
}

.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
}

.fieldset {
  margin: 0;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
}

.legend {
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
}

.link-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.link {
  display: block;
  width: auto;
  padding: 5px 6px;
  line-height: 1;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  border-radius: 5px;
  transition: opacity 0.7s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &.route-link-active {
    outline: 2px solid #fff !important;
    background-color: rgba(0, 0, 0, 0.7) !important;
    border: 1px solid rgba(0, 0, 0, 0.7) !important;
    color: #fff !important;
  }
}

.link {
  &.theme-default {
    color: rgb(35, 44, 46);
    background-color: rgba(225, 225, 225, 0.3);
    border: 1px solid rgba(219, 219, 219, 0.9);
  }
  &.theme-react {
    color: rgb(43, 116, 132);
    background-color: rgba(43, 216, 255, 0.3);
    border: 1px solid rgba(43, 216, 255, 0.9);
  }
  &.theme-node {
    color: rgb(85, 103, 45);
    background-color: rgba(133, 190, 5, 0.3);
    border: 1px solid rgba(133, 190, 5, 0.9);
  }
  &.theme-js {
    color: rgb(104, 95, 43);
    background-color: rgba(232, 212, 77, 0.3);
    border: 1px solid rgba(232, 212, 77, 0.9);
  }
  &.theme-vue {
    color: rgb(34, 83, 61);
    background-color: rgba(62, 178, 127, 0.3);
    border: 1px solid rgba(62, 178, 127, 0.9);
  }
  &.theme-html {
    color: rgb(195, 99, 58);
    background-color: rgba(208, 90, 39, 0.1);
    border: 1px solid rgba(222, 96, 42, 0.2);
  }
  &.theme-primary {
    color: rgb(159, 159, 159);
    background-color: rgba(231, 234, 198, 0.4);
    border: 1px solid #e2e2e2;
  }
  &.theme-secondary {
    color: rgb(173, 173, 173);
    background-color: #fff;
    border: 1px solid #ededed;
  }
  &.theme-accent {
    color: rgb(100, 100, 100);
    background-color: #fff;
    border: 1px solid rgba(0, 201, 167, 0.6);
    outline: 1px solid rgba(0, 201, 167, 0.6);
  }
  &.theme-actual {
    color: rgb(100, 100, 100);
    background-color: #fff;
    border: 1px solid rgba(245, 224, 66, 1);
    outline: 1px solid rgba(245, 224, 66, 1);
  }
  &.theme-tech {
    color: rgb(199, 90, 209);
    background-color: rgba(212, 15, 230, 0.1);
    border: 1px solid #e2e2e2;
  }
  &.theme-theory {
    color: rgb(136, 136, 136);
    background-color: rgba(233, 233, 233, 0.3);
    border: 1px solid rgb(216, 216, 216);
  }
}
</style>
