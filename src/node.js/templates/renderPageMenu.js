import { nodeConfig } from '../../../custom/nodeConfig';

export const renderPageMenu = () => (`
    <slot v-for="itemTitle in themesContent">
        <h4
            v-html="(!itemTitle.child ? themesEmoji : '')+' '+itemTitle.title"
            :class="{
                accent: itemTitle.accent,
                selected: itemTitle.selected,
                child: itemTitle.child
            }"
        ></h4>
        <ul>
            <slot v-for="(itemTheme, i) in itemTitle.themes">
                <li
                    v-if="itemTheme[0]"
                    :class="{
                        child: itemTheme[2],
                        done: itemTheme[3] == 'done',
                        check: itemTheme[3] == 'check',
                    }"
                >
                    <a
                        class="menu-link"
                        :id="itemTheme[0]+'link'"
                        :href="'#'+itemTheme[0]"
                        @click="buildContent(itemTheme[0])"
                        v-html="itemTheme[1]"
                    ></a>
                    <a
                        v-if="isLocalhost"
                        class="menu-link-vscode"
                        :href="'vscode://file/'+'${nodeConfig.vscode}'+'/@themes/'+itemTheme[0]+'.html'">
                    </a>
                </li>
                <hr v-else />
            </slot>

        </ul>
    </slot>
`);
