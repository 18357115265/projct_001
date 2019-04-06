<template>
    <div id="app">
      <!-- header -->
      <div class="app-contener">
        <mt-header fixed title="汇聚人力科技"></mt-header>
      </div>

      <!-- main -->
      <h3>主题部分</h3>
      <!-- footer -->
      <nav class="mui-bar mui-bar-tab">
          <a class="mui-tab-item mui-active" href="#tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </a>
          <a class="mui-tab-item" href="#tabbar-with-chat">
            <span class="mui-icon mui-icon-email">
             
            </span>
            <span class="mui-tab-label">会员</span>
          </a>
          <a class="mui-tab-item" href="#tabbar-with-contact">
            <span class="mui-icon mui-icon-contact">
               <span class="mui-badge">9</span>
            </span>
            <span class="mui-tab-label">购物车</span>
          </a>
          <a class="mui-tab-item" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
          </a>
      </nav>
    </div>
</template>
<script>

export default {
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
.app-contener {
  padding-top:40px;
}
</style>