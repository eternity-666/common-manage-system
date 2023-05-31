<template>
  <div>
    <el-menu style="width: 200px; min-height: calc(100vh - 50px);" 
    :default-active="path" 
    class="el-menu-vertical-demo"
      router
      @open="handleOpen"
       @close="handleClose" 
       background-color="#30333c" 
       text-color="#fff">
      <template v-for="(items,index) in menus" >
        <el-submenu :index="index + ''" :key="index" v-if="!items.hidden">
          <template slot="title">
            <i :class="items.iconClass" style="margin-right: 10px;"></i>
            <span>{{items.name}}</span>
          </template>
          <el-menu-item-group v-for="(item,i) in items.children">
            <el-menu-item :index="item.path" :key="i"><template>
             <i :class="item.iconClass" style="margin-right: 10px;"></i>
              <span>{{item.name}}</span>
            </template></el-menu-item>
          </el-menu-item-group>
        </el-submenu>


      </template>


    </el-menu>

  </div>
</template>
<script>

export default {
  data() {
    return {
      msg: 'menu',
      menus: [],
      path: this.$route.path
    }
  },
  created() {
    console.log(this.$router.options.routes)
    this.menus = [...this.$router.options.routes]
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }

}
</script>

<style lang="scss" scoped></style>