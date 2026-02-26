# Readme

## Алгоритм

1. Раскомментировать "alias"
> docs/.vuepress/config.js

2. Раскомментировать подключение стилей
> docs/.vuepress/client.js

----

## Не используется

### `VPToggleSidebarButton`
```ts
import VPToggleSidebarButton from '@theme/VPToggleSidebarButton.vue'

<VPToggleSidebarButton @toggle="$emit('toggle-sidebar')" />
```

### `VPNavbarBrand`
```ts
import VPNavbarBrand from "@theme/VPNavbarBrand.vue";

<VPNavbarBrand />
```

### `VPToggleColorModeButton`
```ts
import VPToggleColorModeButton from '@theme/VPToggleColorModeButton.vue'
import { useThemeLocaleData } from '@theme/useThemeData'

const themeLocale = useThemeLocaleData()

<VPToggleColorModeButton v-if="themeLocale?.colorModeSwitch" />
```
