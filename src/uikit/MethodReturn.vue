<template>
    <div class="v-method-return--wrapper">
        <span class="icon"></span>
        <span class="el arg">return</span>
        <span class="el text">- <slot></slot></span>
    </div>
</template>

<style scoped>
.v-method-return--wrapper {
	padding-left: 30px;	
}
.v-method-return--wrapper .icon::before {
    content: '🍩';
    padding: 2px 7px;
    font-size: 15px;
    color: #bf7abe;
}
.v-method-return--wrapper .arg {
    padding: 2px 4px;
    border-radius: 3px;
    font-weight: bold;
    color: #e96900;
}
.v-method-return--wrapper .text {
    font-family: FiraSans-Regular;
    color: rgba(0,0,0,0.7);
}
</style>
