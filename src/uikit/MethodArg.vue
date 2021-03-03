<template>
    <div class="v-method-arg--wrapper">
        <span class="icon"></span>
        <span class="el arg">{{arg}}</span>
        <span class="el text">
            &nbsp; - <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
	props: ['arg'],
}
</script>

<style scoped>
.v-method-arg--wrapper {
	padding-left: 30px;
}
.v-method-arg--wrapper .icon::before {
    content: '⚡️';
    padding: 2px 7px;
    font-size: 15px;
    color: #bf7abe;
}
.v-method-arg--wrapper .arg {
    padding: 2px 4px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #e96900;
    color: #e96900;
}
.v-method-arg--wrapper .text {
    font-family: FiraSans-Regular;
    color: rgba(0,0,0,0.7);
}
</style>
