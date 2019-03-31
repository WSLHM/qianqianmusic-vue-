<template>
    <div class="lrcContainer">
        <div class="lrc" ref='lrc'>
            <!-- {{currentTimes}}-{{durationTime}} -->
            <p
            :class="{'active' :currentTimes >= allkeys[index] && currentTimes < allkeys[index+1]}" 
            v-for="(value,key,index) in lrcData" 
            class='lrc-p'
            :key="index">
            {{value}}{{getScrollTop(index)}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'LRC',
    data(){
        return{
            lrcData:{},
            allkeys:[]
        }
    },
    props:{
        id:{
            type:[String,Number],
            default:0
        },
        currentTimes:{
            type:[String,Number],
            default:0
        },
        durationTime:{
            type:[String,Number],
            default:0
        }
    },
    computed:{
        
    },
    mounted(){
        this.$axios.get(this.HOST + '/v1/restserver/ting',{
            params:{
                method:'baidu.ting.song.lry',
                songid:this.id
            }
        })
        .then(res => {
            this.setLRC(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    },
    methods:{
        getAllKeys(){
            for(var i in this.lrcData){
                this.allkeys.push(i)
            }
        },
        setLRC(data){
            var lyrics = data.lrcContent.split('\n');
            var lrcObj = {};
            for(let i = 0;i < lyrics.length;i++){
                var lyric = decodeURIComponent(lyrics[i]);
                var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg);
                if(!timeRegExpArr) continue;
                var clause = lyric.replace(timeReg,'');
                var t = timeRegExpArr[0];
                var min = Number(String(t.match(/\[\d*/i)).slice(1));
                var sec = Number(String(t.match(/\:\d*/i)).slice(1));
                var time = min * 60 + sec;
                lrcObj[time] = clause;
            }
            this.lrcData = lrcObj;
            this.getAllKeys();
        },
        getScrollTop(index){
            if(this.currentTimes >= this.allkeys[index] && this.currentTimes < this.allkeys[index+1]){
                this.$refs.lrc.style.top = -((index-2) * 30) + 'px';
                this.$refs.lrc.style.transition = '0.5s';
            }
            
        }
    }
}
</script>

<style scoped>
.active {
  color: red;
  font-size:22px;
  transition: 0.5s
}

.lrcContainer {
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
}

.up30 {
  margin-top: -30px;
}
</style>


