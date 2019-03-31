<template>
    <div class='th-back-top' :class="{'show':flag}" @click="backTopHandler">
        <span class="bg-back2top2"></span>
    </div>
</template>

<script>
export default {
    name:'BackTop',
    data(){
        return{
            flag:false
        }
    },
    mounted(){
        const _this = this;
        const winHeight = document.documentElement.clientHeight;
        window.addEventListener('scroll',function(event){
            let scrollHeight = document.documentElement.scrollTop;
            if(winHeight < scrollHeight){
                _this.flag = true
            }else{
                _this.flag = false
            }
        })
    },
    methods:{
        backTopHandler(){
            document.documentElement.scrollTop = 0
        }
    }
}
</script>

<style scoped>
.th-back-top {
  display: none;
  position: fixed;
  right: 15px;
  bottom: 104px;
  height: 39px;
  width: 80px;
  z-index: 0;
  opacity: 0.8;
  text-align: right;
}

.bg-back2top2 {
  display: inline-block;
  background: url(//static1.qianqian.com/web/st/images/icon-back2top2.af69f845890e1a53.png)
    no-repeat 0 0;
  -webkit-background-size: 39px 39px;
  background-size: 39px 39px;
  width: 39px;
  height: 39px;
}

.show {
  display: block;
}
</style>


