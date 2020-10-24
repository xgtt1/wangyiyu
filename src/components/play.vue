<template>
  <div>
    <div class="box">
      <img src="../assets/images/logo1_03.png" alt="" class="logo">
      <div :class="playFlag==true?'play rotate':'play'">
        <div class="inner">
          <img src="../assets/images/1.png" alt="" @click="play()">
        </div>
      </div>
      <!-- audio可以播放音频 -->
      <audio :src="url" controls hidden id="music"></audio>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
      playFlag:false
    };
  },

  mounted() {
    this.getSongUrl();
  },
  methods: {
    getSongUrl() {
      console.log(this.$route.query.id, "我接收到的参数");
      this.$axios({
        method: "get",
        url: "http://localhost:3000/song/url?id=" + this.$route.query.id,
      }).then((res) => {
        console.log(res, "音乐地址");
        this.url = res.data.data[0].url;
      });
    },
    play(){
      console.log('123')
      var audio = document.getElementById('music')
      var play = document.getElementsByClassName('play')[0]
      if(this.playFlag){
        audio.pause();

        play.style.animationPlayState='running'
        this.playFlag=false
        console.log('456')
      }else{
        audio.currentTime=0;
        audio.play()
        play.style.animationPlayState='paused'
        this.playFlag=true
      }
    }
  },
};
</script>

<style lang="">
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
#app>div{
  height: 100%;
}
  .box{
    width: 100%;
    height: 100%;
    background: linear-gradient(to right top,#202024,#39444b);
  }

  .logo{
    width: 1.89rem;
    height: .35rem;
    margin: .25rem 0 0 .2rem;
  }
  .play{
    position: relative;
    width: 6.36rem;
    height: 6.36rem;
    background: url(../assets/images/play.png);
    background-size: 100% 100%;
    border-radius: 50%;
    margin: 0 auto;
    /* 调用关键帧动画 */
    animation: rotate 3s linear infinite;
  }
  .inner{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 4.96rem;
    height: 4.96rem;
    background: url(../assets/images/play1.png);
      background-size: 100% 100%;
  }
  .inner img{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  /* 定义关键帧动画 */
  @keyframes rotate {
    0%{
      transform:rotate(0deg);
    }
  
    100%{
      transform:rotate(360deg);
    }
  }
</style>
