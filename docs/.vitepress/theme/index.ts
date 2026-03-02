import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import AppConfig from "../../app-config";
import Layout from "./components/Layout.vue";
import VDetails from "../components/v-details.vue";
import VIframe from "../components/v-iframe.vue";
import VPadding from "../components/v-padding.vue";
import VTwo from "../components/v-two.vue";
import VMarker from "../components/v-marker.vue";
import VBreadcrumbs from "../components/v-breadcrumbs.vue";
import VCode from "../components/v-code.vue";
import VBadge from "../components/v-badge.vue";
import VTree from "../components/v-tree.vue";

import "./styles/variables.css";
import "./styles/custom.css";
// import "./styles/elements.css";

export default {
  extends: DefaultTheme,
  ...(AppConfig.CustomLayout && { Layout }),
  enhanceApp({ app }) {
    app.component("v-details", VDetails);
    app.component("v-iframe", VIframe);
    app.component("v-padding", VPadding);
    app.component("v-two", VTwo);
    app.component("v-marker", VMarker);
    app.component("v-breadcrumbs", VBreadcrumbs);
    app.component("v-code", VCode);
    app.component("v-badge", VBadge);
    app.component("v-tree", VTree);
  },
} satisfies Theme;
