<template lang="html">
    <div class="sm-contain sm-contain-block">
        <div class="content">
            <sm-block 
                v-for="(item,index,key) in number" 
                :key="key"
                :numbers="number[index]"
                @propNum="aa">

            </sm-block>

            <div class="numTime">
                <span>{{numTime}}</span>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style src="./index.less" lang="less"></style>