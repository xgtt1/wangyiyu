<template>
  <div>
    <div class="top">
      <img :src="msg.picUrl" alt="" />
      <div>
        <h2>{{ msg.name }}</h2>
        <img :src="msg.picUrl" alt="" />
        <span>{{ msg.copywriter }}</span>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <p class="title">歌曲列表</p>
    <ul class="songlist">
      <li v-for="(item, index) in songslist" :key="index">
        <div>
          <span>1</span>
          <div class="two">
            <p>{{ item.name }}</p>
            <p>张震岳-天兵</p>
          </div>
        </div>
        <img src="../assets/images/play_03.png" alt="" />
      </li>
    </ul>
    <div class="msg">查看更多歌曲，请下载客户端</div>
    <p class="title">最新评论</p>
    <ul class="talk">
      <li v-for="(item, index) in talk" :key="index">
        <div>
          <img :src="item.coverImgUrl" alt="" class="user" />
          <div style="display: inline-block">
            <p>{{ item.creator.nickname }}</p>
            <p style="font-size: 0.14rem; color: #999999">14分钟前</p>
            <p>封面太可爱了</p>
          </div>
        </div>
        <img src="../assets/images/zan.png" alt="" class="zan" />
      </li>
    </ul>

    <!-- 底部下载 -->
    <div class="box">
      <div class="open">打开</div>
      <div class="down">下载</div>
    </div>
  </div>
</template>

    <script>
export default {
  // 页面的初始数据
  data() {
    return {
      msg: {},
      songslist: [],
      talk: [],
    };
  },
  //页面挂载时执行的函数
  mounted() {
    this.getMsg();
    this.getAboutTuijan();
    this.getTalk();
  },
  // 所有的函数，方法都可以放在methods里边
  methods: {
    getMsg() {
      console.log(this.$route.query.msg, "推荐页面获取到的参数");
      this.msg = this.$route.query.msg;
    },

    // 获取到相关推荐的数据  /related/playlist?id=1
    getAboutTuijan() {
      this.$axios({
        method: "get",
        url: "http://localhost:3000/related/playlist?id=" + this.msg.id,
      }).then((res) => {
        console.log(res.data.playlists, "获取到的推荐歌单的数据");
        this.songslist = res.data.playlists;
      });
    },

    getTalk() {
      this.$axios({
        method: "get",
        url: "http://localhost:3000/related/playlist?id=" + this.msg.id,
      }).then((res) => {
        console.log(res.data.playlists, "获取到的评论内容");
        this.talk = res.data.playlists;
      });
    },
  },
};
</script>

<style lang="" scoped="">
.top {
  display: flex;

  width: 7.5rem;
  height: 3.7rem;
  background: rgba(0, 0, 255, 0.3);
}
.top img {
  width: 2.55rem;
  height: 2.55rem;
  margin: 0.6rem 0 0 0.3rem;
}
.top div h2 {
  font-size: 0.36rem;
  color: #ffffff;
  font-weight: normal;
  height: 0.36rem;
  margin-bottom: 0.72rem;
  margin-top: 0.9rem;
  /* 单行文本溢出显示省略号 */
  width: 3rem;
  white-space: nowrap;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.top div img {
  width: 0.6rem;
  height: 0.6rem;
}
.top div span {
  color: #dee0e4;
  font-size: 0.26rem;
}
.title {
  display: block;
  color: #666;
  font-size: 0.22rem;
  background: #eeeff0;
  line-height: 0.46rem;
  padding-left: 0.26rem;
}
.songlist {
  max-height: 7.7rem;
  /* 超出的部分以滚动条显示 */
  overflow: auto;
}
.songlist li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.26rem;
  color: #333333;
  margin: 0 0.2rem 0 0.35rem;
  height: 1.1rem;
  border-bottom: 1px solid #e5e5e5;
}
.songlist li span {
  color: #999999;
  font-size: 0.26rem;
}
.songlist li img {
  width: 0.45rem;
  height: 0.44rem;
}
.two {
  display: inline-block;
  vertical-align: middle;
}
.msg {
  font-size: 0.26rem;
  color: #999999;
  padding: 0.2rem 0;
  text-align: center;
  background: #f8f8f8;
}
.talk {
  padding-bottom: 1.1rem;
}

.talk li {
  font-size: 0.26rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding: 0.33rem 0.2rem;
}
.user {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
.zan {
  width: 0.3rem;
  height: 0.3rem;
}

.box {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 1.1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
}
.box div {
  margin-top: 0.12rem;
  width: 3.4rem;
  height: 0.78rem;
  border-radius: 0.39rem;
  border: 1px solid #ff3a3a;
  font-size: 0.34rem;
  color: #ff3a3a;
  text-align: center;
  line-height: 0.78rem;
}
.box .down {
  background: #ff3a3a;
  color: #fff;
}
</style>