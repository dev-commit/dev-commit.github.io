declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    VMarker: typeof import("./components/v-marker.vue")["default"];
    VDetails: typeof import("./components/v-details.vue")["default"];
    VIframe: typeof import("./components/v-iframe.vue")["default"];
    VPadding: typeof import("./components/v-padding.vue")["default"];
    VTwo: typeof import("./components/v-two.vue")["default"];
    VBreadcrumbs: typeof import("./components/v-breadcrumbs.vue")["default"];
  }
}

export {};
