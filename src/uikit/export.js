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
}
