<template>
    <div>
        <div class="top">
            <img src="../assets/images/logo.png" alt="" class="logo">
            <span class="title">网易云音乐</span>
            <div class="circle">下载App</div>
        </div>

        <!-- 这是公共页面 -->
        <div class="nav">
            <router-link to="/index" active-class="active">推荐音乐</router-link>
            <router-link to="/hotsong" active-class="active">热歌榜</router-link>
            <router-link to="/search" active-class="active">导航</router-link>
        </div>
        <!-- 充当视图效果，可以把二级路由的页面显示出来 -->
        <router-view></router-view>
    </div>
</template>
// 每个手机尺寸，不一样，把适配做出来，写一套页面吗，兼容不同的手机
// 通过修改根标签的font-size的值做出的改变
// 默认情况下，html标签font-size的值，修改成100px
// 在写样式时，px单位，换成rem单位  1rem=100px
<script src="../assets/scale.js"></script>
// 当前页面的样式

<style lang="">
/* 清除浏览器默认间距 */
*{
    padding: 0;
    margin: 0;
}
    .top{
       width: 7.5rem;
       height: 1.68rem;
       background-color: #d43c33; 
       line-height: 1.68rem;
    }
    .logo{
        width: .49rem;
        height: .49rem;
        vertical-align: middle;
        margin-left: .2rem;
    }
    .title{
        font-size: .38rem;
        color: #fff;
        display: inline-block;
        vertical-align: 13px;
    }
    .circle{
        float: right;
        width: 2rem;
        text-align: center;
        line-height: .72rem;
        background-color: #fff;
        border-radius: .36rem;
        font-size: .3rem;
        color: #d43c33;
        margin: .48rem .2rem 0 0;
    }
    .nav{
        height: .8rem;
        background-color: #fff;
        border-bottom: 1px solid #cccccc;
       
        font-size: .28rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .nav a{
         color: #333333;
         text-decoration: none;
         line-height: .8rem;
    }
    .nav .active{
        color:#d43c33;
        border-bottom: 4px solid #d43c33;
    }
</style>