<template>
    <div class="header">
       <el-header>
        <div class="title">
            common-manager-system
        </div>
        <div>
            {{  name }}
        </div>
       </el-header>
    </div>
</template>
<script>
import { getToken } from "@/utils/token.js";
export default{

    data()
{
    return {
        msg: 'header'
    }
},
created(){
    this.name = getToken('username')
},
}
</script>

<style lang="scss" scoped>
.header{

.el-header{
    background: #409EFF;
    color: #fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .title{
        width: 200px;
        font-size: 15px;
    }


}

}
</style>