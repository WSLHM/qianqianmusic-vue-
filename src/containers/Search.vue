<template>
    <div>
        <TopNav/>
        <form>
            <div class='input-wrap'>
                <i class='iconfont icon-sousuo'></i>
                <input type='search' autofocus='autofocus' placeholder='歌名、歌词、歌手、专辑' v-model='searchNames'/>
                <div class='search-button'>取消</div>
            </div>
        </form>
        <ul class='autocomplete'>
            <li>{{searchNames}}</li>
            <li>{{searchNames}}</li>
            <li>{{searchNames}}</li>
        </ul>
    </div>
</template>

<script>

import TopNav from '@/components/TopNav'

export default {
    name:'Search',
    data(){
        return{
            searchNames:''
        }
    },
    components:{
        TopNav
    }
}
</script>

<style scoped>
form{
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px;
    height: 48px;
    margin-top: -1px;
    z-index: 2;
    background-color: #fff;
}
.input-wrap{
    display: block;
    border: 1px solid #c3c3c3;
    -webkit-border-radius: 18px;
    border-radius: 18px;
    background: #fff;
    height: 36px;
    padding: 0 60px 0 40px;
    position: relative;
}
.icon-sousuo{
    position: absolute;
    left: 10px;
    top: 0;
    margin: 2px 0;
    font-size: 2rem;
}
input{
    width: 100%;
    height: 100%;
    padding: 0;
    padding-left: 5px;
    margin: 0;
    border: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    z-index: 0;
}
.search-button{
    position: absolute;
    right: 10px;
    top: 0;
    height: 26px;
    margin: 5px 0;
    padding-left: 8px;
    border-left: 1px solid #c3c3c3;
    text-align: center;
    font-size: 14px;
    line-height: 26px;
    z-index: 10;
}
.autocomplete{
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 100%;
}
.autocomplete li{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    padding: 0 10px;
    line-height: 43px;
    border-bottom: 1px solid #eee;
}
</style>

