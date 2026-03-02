// FIXME: Проверить файл

/**
 * Копия useNav из темы VitePress с брейкпоинтом 960px вместо 768px:
 * мобильное меню (drawer) закрывается при resize только при ширине > 960px.
 */
import { useRoute } from "vitepress";
import { ref, watch } from "vue";

const MOBILE_BREAKPOINT = 961;

export function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= MOBILE_BREAKPOINT && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen,
  };
}
