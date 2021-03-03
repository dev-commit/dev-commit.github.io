<template>
    <div class="v-method-header--wrapper">
        <span class="el expression" v-if="before.length!==0">{{before}}</span>
        <span class="el method">{{method}}</span>
        <span class="el expression" v-if="after.length!==0">{{after}}</span>
        <span class="el expression" v-if="arg.length!==0">{{arg}}</span>
        <span class="el text">
            - <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
	props: ['before', 'method', 'after', 'arg'],
}
</script>

<style scoped>
.v-method-header--wrapper .expression {
    padding: 4px;
    color: #e96900;
    background: rgba(179, 183, 104, 0.2);
}
.v-method-header--wrapper .method {
    background: #00C9A7;
    color: #fff;
    padding: 4px;
    text-shadow: 0px 0px 2px #000;
}
.v-method-header--wrapper .text {
    margin-left: 4px;
    /* font-family: FiraSans-Regular; */
    color: rgba(0,0,0,0.7);
}
</style>