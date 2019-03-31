<template>
    <div>
        <TopNav/>
        <div class="rank-view">
            <ul class="cate-ul">
                <li class="cate-item">
                    <div class="cate-post"></div>
                </li>
                <li class="cate-item"></li>
                <li class="cate-item"></li>
                <li class="cate-item"></li>
                <li class="cate-item"></li>
                <li class="cate-item"></li>
            </ul>
        </div>
    </div>
</template>

<script>

import TopNav from '@/components/TopNav'

export default {
    name:'Top',
    components:{
        TopNav
    }
}
</script>

<style scoped>
.rank-view{
    padding: 0 20px;
    font-family: sans-serif;
}
.cate-item{
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    display: flex;
}
.cate-post{
    position: relative;
    color: #fff;
    font-size: 18px;
    height: 96px;
    width: 96px;
}
</style>

