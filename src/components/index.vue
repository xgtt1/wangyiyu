<template>
    <div>
        <!-- 推荐音乐页面 -->
        <div class="songs">

         <h1 class="title">推荐歌单</h1>
         <!-- 列表，多个重复的部分，尽可能使用列表标签 -->
         <ul>

             <li v-for="(item,index) in tuijianlist" :key="index" @click="gogedan(item)">
                 <img :src="item.picUrl" alt="">
                 <p>{{item.copywriter}}|{{item.name}}</p>
                 <span>{{item.playCount}}</span>
             </li>


         </ul>
        </div>

        <!-- 最新音乐 -->
        <div class="music">
            <h2 class="title">
                最新音乐
            </h2>
            <ul>
                <li v-for="(item,index) in newSong" :key="index" @click="go(item.id)">
                    <div class="left">
                        <h3>{{item.name}}</h3>
                        <span>{{item.song.artists[0].name}}-{{item.song.alias[0]}}</span>
                    </div>

                    <img src="../assets/images/play_03.png" alt="" class="right">
                </li>

            </ul>
        </div>

        <!-- 底部部分 -->
        <div class="bottom">
            <img src="../assets/images/title.png" alt="">
            <div class="open">打开APP，发现更多好音乐></div>
            <p>网易版权所有1997-2020杭州乐读科技有限公司运营</p>
        </div>
    </div>
</template>

<script>
export default {
    // 页面的初始数据，
    data() {
        return {
            tuijianlist:[],
            newSong:[]
        }
    },

    // 当页面挂载的时候就执行
    mounted(){
        // 推荐歌单
        this.$axios({
            method:"get",
            url:"http://localhost:3000/personalized?limit=6",
            data:{} ,//可写可不写，调取接口时所传的参数
        }).then((res)=>{
            console.log(res.data.result)
            // 接口里获取的数据赋值给data里边的tuijianlist
            this.tuijianlist=res.data.result
        })

        // 调用最新音乐函数
        this.getNewSong();
    },

// methods里写函数，方法
    methods:{
        // 最新音乐
        getNewSong(){
            this.$axios({
                method:"get",
                url:"http://localhost:3000/personalized/newsong"
            }).then((res)=>{
                console.log(res.data.result)
                this.newSong=res.data.result
            })
        },
        go(id){
                  this.$router.push({
                  path:'/play',
                  query:{
                      id:id
                        }
        	})
        },
        gogedan(id){
          this.$router.push({
          path:'/abouttuijian',
          query:{
              msg:id
                }
        })}

    },



}
</script>

<style lang="">
*{
    padding: 0;
    margin: 0;
}
ul{
    list-style: none;
}
.songs{
    background: #fcfcfd;
}
   .songs .title{
        font-size: .32rem;
        color: #333;
        font-weight: normal;
        /* line-height: 1.1rem; */
        border-left: .05rem solid #d33a31;
        padding-left: .15rem;
    }
    .songs img{
        width: 2.48rem;
        height: 2.48rem;
    }
    .songs ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .songs ul li{
        width: 2.48rem;
        position: relative;
    }
    .songs ul li p{
        font-size: .26rem;
        color: #333;
        margin-bottom: .15rem;
        padding-left: .2rem;
        height: .52rem;
        line-height: .26rem;
        overflow: hidden;
    }
    .songs ul li span{
        background: url(../assets/images/erji.png) no-repeat 0 center;
        position: absolute;
        right: .15rem;
        top: .15rem;
        font-size: .2rem;
        color: #fff;
        padding-left: .2rem;
        /* background: red; */
    }
    .music{
        line-height: 1!important;
    }
    .music .title{
        font-size: .32rem;
        color: #333;
        font-weight: normal;
        /* line-height: 1.1rem; */
        border-left: .05rem solid #d33a31;
        padding-left: .15rem;
    }
    .music ul li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e2e2e3;
        margin-left: .2rem;
    }
    .music ul li div{
        height: 1.1rem;

    }

    .music .left h3{
        font-size: .34rem;
        color: #333;
        font-weight: normal;
        padding-top: .2rem;
        padding-bottom: .17rem;
    }
    .music .left span{
        display: block;
        color: #888;
        font-size: .22rem;
    }
    .music .right{
        width: .44rem;
        height: .45rem;
    }
    .music .right{
        margin-right: .2rem;
    }
    .bottom{
        width: 100%;
        height: 4.05rem;
        background: url(../assets/images/bg_02.png);
        text-align: center;
    }
    .bottom img{
        margin-top: 1.35rem;
        width: 4.67rem;
        height: .87rem;
    }
    .open{
        width: 6rem;
        height: .8rem;
        border:2px solid #d33a31;
        border-radius: .4rem;
        margin: 0 auto;
        font-size: .3rem;
        border:2px solid #d33a31;
        color: #d33a31;
        line-height: .8rem;
    }

    .bottom p{
        color: #888888;
        font-size: .18rem;
        margin-top: .15rem;
    }
</style>
