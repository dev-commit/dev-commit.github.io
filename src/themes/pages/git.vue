<template><div><div id="git-command-init"><h1>Git!!!</h1>

<div class="v-method-wrapper">
    <v-method before="git " method="init" after="" arg="">
    Инициализация пустого локального git-репозитория. Создаёт в текущем каталоге новый подкаталог с именем .git
    </v-method>
</div>

<pre><code class="bash">
<em>git <u-code>init</u-code></em>
</code></pre>
</div><div id="git-command-clone"><div class="v-method-wrapper">
    <v-method before="git " method="clone" after="" arg="">
    Создание локальной копии удаленного git-репозитория (выполняется 1 раз)
    </v-method>
</div>

<pre><code class="bash">
<em>git <u-code>clone</u-code> git@github.com:anton-sergeenkov/repo.git</em>
</code></pre>
</div><div id="git-github-info"><h2>Теория</h2>

<u-link-wrapper>
	<a href="https://git-scm.com/book/ru/v2" target="_blank">Git Book</a>
	<a href="https://geekbrains.ru/courses/66" target="_blank">GeekBrains: Основы Git</a>
	<a href="https://www.youtube.com/playlist?list=PL3LQJkGQtzc5rDeb7FjACNb6sOW300yA0" target="_blank">YouTube PlayList: Glo Academy</a>
</u-link-wrapper>

<ul class="list-point">
	<li>origin указывает на удаленный репозиторий, локально origin нет</li>
</ul>

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<h3>Local Operation</h3>
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<img src="@/themes/images/git1.jpg" width="450px">

<ul class="list-point">
	<li><u-text-define>I. Working Directory</u-text-define> - рабочий каталог</li>
	<ul class="list-point">
		<li>1. Внесение изменений в файлы рабочего каталога</li>
		<li>2. Подготовка файлов, добавляя из слепки в область Staging Area</li>
	</ul>

	<li><u-text-define>II. Staging Area</u-text-define> - область подготовленных файлов</li>
	<ul class="list-point">
		<li>3 commit. Берет подготовленные файлы из индекса Staging Area и помещает их в Git Directory на постоянное хранение</li>
	</ul>

	<li><u-text-define>III. Git Directory (Repository)</u-text-define> - каталог git</li>
</ul>

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<h3>File Status Lifecycle</h3>
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="@/themes/images/git2.jpg" width="450px">

<ul class="list-point">
	<li>Файл в Working Directory может находиться под версионным контролем (<u>unmodified, modified, staged</u>) и неотслеживаемые файлы (<u>untracked</u>)</li>
</ul>
</div></div></template>

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
}
</script>
