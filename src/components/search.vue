<template>
  <div>
      <!-- 失去焦点时，拿到input框的内容 -->
    <input type="text" class="ipt" placeholder="搜索歌曲、歌手、专辑"  v-model="txt" @change="getContent(txt)"/>
    <!-- 热门搜索
      当input框里没有内容时，显示box
      当input框里有内容时，显示content
     -->
    <div class="box" v-if="!isShow">
      <h2>热门搜索</h2>
      <ul>
        <li v-for="(item, index) in hotSearch" :key="index" @click="getsearchByclick( item.first )">
          {{ item.first }}
        </li>
      </ul>
    </div>

    <!-- 搜索的内容 -->

    <div class="content" v-if="isShow">
      <h2>最佳匹配</h2>
      <div class="music">
        <ul>
          <li v-for="(item,index) in searchRes" :key="index">
            <div class="left">
              
              <h3>{{item.name}}</h3>
              <span>{{item.artists[0].name}}-专辑</span>
            </div>

            <img src="../assets/images/play_03.png" alt="" class="right" />
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 页面初始数据
  data() {
    return {
        txt:'',
      hotSearch: [],
    //  当我获取到input框内有内容时，让isshow边城true
      isShow:false,
      searchRes:[]
    };
  },

  mounted() {
    this.getHotSearch();
  },

  // 所有的方法 函数
  methods: {
    getHotSearch() {
      this.$axios({
        method: "get",
        url: "http://localhost:3000/search/hot",
      }).then((res) => {
        console.log(res.data.result.hots);
        this.hotSearch = res.data.result.hots;
      });
    },
    getContent(e){
        console.log(e,"这是我接收到的输入内容")
        // 如果e 有内容，显示content，如果没有内容  显示box
        if(e){
            this.isShow=true
        }else{
            this.isShow=false
        }

        // 拿到用户输入的数据后，调搜索接口，判断 如果用户输入的内容为空，就阻止提交
        if(e==""){
            return false
        }
        this.$axios({
            method:"get",
            url:"http://localhost:3000/search/suggest?keywords="+e
        }).then((res)=>{
            console.log(res.data.result.songs)
            this.searchRes=res.data.result.songs
        })
    },

    // 用户点击热门提示时，获取到搜索内容
    getsearchByclick(a){
      // a代表用户点击的是那一个用户搜索
     console.log(a)
     this.getContent(a)

    }
  },
};
</script>
<style lang="">
ul {
  list-style: none;
}
.ipt {
  display: block;
  width: 7.07rem;
  height: 0.6rem;
  background: #ebecec;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  padding-left: 0.6rem;
  box-sizing: border-box;
  margin: 0.3rem auto;
}
.box {
  margin: 0 0.2rem;
}
.box h2 {
  color: #666666;
  font-size: 0.24rem;
}
.box ul li {
  float: left;
  color: #333333;
  font-size: 0.26rem;
  border: 1px solid #d3d4da;
  line-height: 0.62rem;
  border-radius: 0.31rem;
  padding: 0 0.28rem;
  margin: 0 0.15rem 0.15rem 0;
}

.music {
  line-height: 1 !important;
}
.music .title {
  font-size: 0.32rem;
  color: #333;
  font-weight: normal;
  /* line-height: 1.1rem; */
  border-left: 0.05rem solid #d33a31;
  padding-left: 0.15rem;
}
.music ul li {
    position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e3;
  margin-left: 0.2rem;
}
.music ul li div {
  height: 1.1rem;
}

.music .left h3 {
  font-size: 0.34rem;
  color: #333;
  font-weight: normal;
  padding-top: 0.2rem;
  padding-bottom: 0.17rem;
    
}
.music .left span {
  display: block;
  color: #888;
  font-size: 0.22rem;
  float: left;
}
.music .right {
  width: 0.44rem;
  height: 0.45rem;
}
.music .right {
  margin-right: 0.2rem;
}
.content h2{
    font-size: .24rem;
    color: #999;
    padding-left: .2rem;
}
</style>