<template>
<div>

<h4>TwoColumnCode</h4>
<v-two-code type="js;js" comment="Тернарный оператор;if…else">
<template v-slot:first>
a = (age > 14) ? true : false;
</template>
<template v-slot:last>
z = (age > 22) ? true : true;
</template>
</v-two-code>

<h4>Method</h4>
<div class="v-method-wrapper">
    <v-method before="element" method="method" after="" arg="(arg1, arg2)">
    описание метода
    </v-method>

    <v-method-arg arg="arg1">описание arg1</v-method-arg>

    <v-method-return>element.node</v-method-return>
</div>


</div>
</template>

<script>
import TwoColumnCode from '@/uikit/TwoColumnCode';
import TwoColumnBlock from '@/uikit/TwoColumnBlock';
import TwoColumnBlockFix from '@/uikit/TwoColumnBlockFix';
import PreNpm from '@/uikit/PreNpm';
import PreCode from '@/uikit/PreCode';
import IFrame from '@/uikit/IFrame';

import MethodHeader from '@/uikit/MethodHeader';
import MethodArg from '@/uikit/MethodArg';
import MethodReturn from '@/uikit/MethodReturn';

export default {
    components: {
        'v-two-code': TwoColumnCode,
        'v-two': TwoColumnBlock,
        'v-two-fix': TwoColumnBlockFix,
        'v-pre-npm': PreNpm,
        'v-code': PreCode,
        'v-iframe': IFrame,

        'v-method': MethodHeader,
        'v-method-arg': MethodArg,
        'v-method-return': MethodReturn,
    },

    methods: {
        applyHighlightjs() {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        },
    },

    mounted() { this.applyHighlightjs(); },
    updated() { this.applyHighlightjs(); },
}
</script>
