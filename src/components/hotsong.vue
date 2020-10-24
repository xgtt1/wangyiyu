<template>
  <div>
    <img src="../assets/images/hot.png" alt="" class="banner" />
    <div class="music">
      <ul>
        <li v-for="(item, index) in hotSong" :key="index">
          <div class="left">
            <span :class="index==0||index==1||index==2?'active order':'order'">
              {{ index + 1 }}
            </span>
            <h3>{{ item.name }}</h3>
            <span>{{ item.artists[0].name }}-{{ item.company }}</span>
          </div>

          <img src="../assets/images/play_03.png" alt="" class="right" />
        </li>
      </ul>
      <div class="btm" @click="getAll()">
          查看完整榜单
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 页面的初始数据
  data() {
    return {
      hotSong: [],
    };
  },

  // 页面挂载时执行mounted里的函数
  mounted() {
    this.getHotSong(20);
  },
  // 方法和函数都凡在methods里
  methods: {
    // 获取热歌
    getHotSong(num) {
      this.$axios({
        method: "get",
        url: "http://localhost:3000/top/album?limit="+num,
      }).then((res) => {
        console.log(res, "这是热歌");
        this.hotSong = res.data.monthData;
      });
    },

    //  查看更多榜单
    getAll(){
        // 重新调取获取热歌的接口，把拿到的多条数据，重新渲染到页面上
        this.getHotSong(50)

    }
  },



};
</script>
<style lang="">
.music .left .active{
    color: red;
    font-size: .3rem;
}
.banner {
  width: 7.5rem;
  height: 2.92rem;
}
.order{
    position: absolute;
    left: 0rem;
    top:.2rem;
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
    padding-left: .3rem;

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
.btm{
    text-align: center;
    font-size: .26rem;
    padding: .5rem 0;
    color: #999999;
}
</style>