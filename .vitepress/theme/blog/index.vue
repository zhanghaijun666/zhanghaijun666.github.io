<template>
  <div class="blog-content">
    <div class="welcome">
      <h1>欢迎阅读我的博客</h1>
      <p>我是Hardy，这里是我分享技术见解和生活点滴的地方。</p>
    </div>
    <div class="articles pt-20px">
      <div class="article">
        <div class="article-top">
          <div class="article-content flex-auto">
            <h2>HTML&CSS：熊猫与鼠标的眼神密语，等你来体验！</h2>
            <p>这个 HTML 和 CSS 代码创建了一个具有动画效果的熊猫形象，它的眼睛会随着鼠标的移动而转动。</p>
          </div>
          <div class="article-image">
            <!--            <img src="./img/3.gif" alt="文章图片">-->
          </div>
        </div>
        <div class="article-stats">
          <span><i class="fas fa-eye"></i> 阅读量: 100</span>
          <span><i class="fas fa-thumbs-up"></i> 点赞量: 50</span>
          <span><i class="fas fa-bookmark"></i> 收藏: 30</span>
        </div>
      </div>
      <div class="article">
        <div class="article-top">
          <div class="article-content">
            <h2>HTML&CSS&JS：超级酷炫丝滑的登录注册页面，赶快收藏吧</h2>
            <p>这段代码通过 HTML、CSS 和 JavaScript
              的结合，实现了一个具有动画效果的登录和注册表单。用户可以通过点击按钮在登录和注册表单之间切换，同时覆盖层会相应地显示和隐藏。</p>
          </div>
          <div class="article-image">
            <!--            <img src="./img/1.gif" alt="文章图片">-->
          </div>
        </div>
        <div class="article-stats">
          <span><i class="fas fa-eye"></i> 阅读量: 150</span>
          <span><i class="fas fa-thumbs-up"></i> 点赞量: 75</span>
          <span><i class="fas fa-bookmark"></i> 收藏: 45</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped lang="scss">
.blog-content {
  margin: 0 auto;
  width: 80%;

  .welcome {
    padding: 20px 0;
    text-align: center;
    border-radius: 10px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .article {
    margin-bottom: 20px;
    padding: 30px 15px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .article-top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .article-stats {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 10px;
    }
  }
}
</style>
