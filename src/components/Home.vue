<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container class="content">
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <BreadCrumb />
          <el-main><router-view></router-view></el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>


  </div>
</template>

<script>
import BreadCrumb from './common/BreadCrumb.vue'
import Header from './common/Header.vue'
import Menu from './common/Menu.vue'
import Footer from './common/Footer.vue'
export default {
  name: 'HelloWorld',
  components: {
    Header,
    Menu,
    Footer,
    BreadCrumb
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.el-header{
  padding:0;
}
</style>
