
//-------------------------------------------------------
// Component
//-------------------------------------------------------
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Color, Size } from "./types";

@Component({})
export default class Button extends Vue {
    @Prop({ required: false, default: Size.md }) size: Size;
    @Prop({ required: false, default: Color.default }) color: Color;

    get classes(): string[] {
        return [`tui-btn--${this.size}`, `tui-btn--${this.color}`];
    }
}
</script>

<template>
    <button class="tui-btn" :class="classes">
        <slot></slot>
    </button>
</template>

//-------------------------------------------------------
// File
//-------------------------------------------------------
<template>
    <tui-button size="lg" color="primary" @click.native="showLoginForm=true" type="button">Back to login</tui-button>
</template>
