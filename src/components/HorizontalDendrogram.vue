<template>
    <div>
        <div class="tree-wrapper" v-for="(data, index1) in dataList" >
            <div class="title-wraper">
                <div class="title">{{data.name}}</div>
            </div>
            <div class="branch">
                <div v-for="(subData, index) in data.subData" :class="['entry', (index+1)===data.subData.length?'lv-last':'', index===0?'lv1':'', data.subData.length===1?'onyOne':'']">
                    <div class="desc" @click="goToItem(subData.url)">{{subData.subName}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        props: {
            dataList: {
                type: Array,
                required: true,
                default: function () {
                    let defaultData = [{
                        name: 'name',
                        subData: [{
                            subName: 'subName',
                            url: 'url'
                        }]
                    }];
                    return defaultData;
                }
            }
        },
        methods: {
            goToItem(url){
                this.$emit('itemEvent:url', url);
            }
        }
    }
</script>
<style scoped lang="less">
    .tree-wrapper{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 0.8rem;
        .title-wraper{
            display: flex;
            justify-content: center;
            align-items: center;
            .title{
                display: inline-block;
                width: 15rem;
                height: 2.66666rem;
                line-height: 2.66666rem;
                padding-left: 2.2rem;
                font-size: 1.41666rem;
                color: #FFFFFF;
                background-image: url("./images/bg.png");
                background-size: 3.58333rem 2.66666rem;
                background-repeat: no-repeat;
                background-color: #2481FC;
                border-radius: 4px;
            }
            &::after{
                content: "";
                width: 2rem;
                border-top: 2px solid #2481FC;
            }
        }
        .branch{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            flex-direction: column;
            .entry{
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                padding: 1rem 0;
                .desc{
                    cursor: pointer;
                    line-height: 2.66666rem;
                    width: 18.33333rem;
                    border-radius: 4px;
                    padding: 0 0.5rem;
                    font-size: 1.08333rem;
                    color: #1C6ADD;
                    border: 1px solid #2481FC;
                }
                &::before{
                    content: "";
                    width: 2rem;
                    border-top: 2px solid #2481FC;
                }
                &::after{
                    content: "";
                    height: 100%;
                    border-left: 2px solid #2481FC;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                &.lv1{
                    padding: 0 0 1rem 2rem;
                    &::before{
                        position: absolute;
                        top: 1.24999rem;
                        left: 0;
                    }
                    &::after{
                        height: 100%;
                        top: 1.33333rem;
                    }
                }
                &.lv-last{
                    &::after{
                        height: 50%;
                    }
                }
                &.onyOne{
                    &::after{
                        content: none;
                    }
                }
            }
        }
    }
</style>
