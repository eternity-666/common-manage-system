<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="text-align: center;">
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入姓名查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>


   


    <el-table :data="compuData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" width="130">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="130">
      </el-table-column>
      <el-table-column prop="phone" label="电话" width="180">
      </el-table-column>
      <el-table-column prop="class" label="班级" width="130">
      </el-table-column>
      <el-table-column prop="state_text" label="状态" width="130">
      </el-table-column>>
      <el-table-column prop="number" label="数据" width="180">
      </el-table-column>>

      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>>
      <el-table-column prop="address" label="地址" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click.native.prevent="deleteRow(scope.row)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]" :page-size="page_size" layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
import { students, studentsDel } from '@/api'

export default {
  data() {
    return {
      tableData: [],
      page_size: 10,
      total: 0,
      resetTableData:[],
      currentPage: 1,
      formInline: {
        name: ''
      }
    }
  },
  created() {
    this.getData()

  },
  computed: {
    compuData() {
      return this.tableData.slice((this.currentPage - 1) * this.page_size, this.currentPage * this.page_size)
    }
  },
  methods: {
    find() {
      console.log(this.formInline);
      this.tableData.forEach(item=>{
        if(item.name===this.formInline.name){
          this.tableData=[item]
          this.currentPage=1
        }
      })
    },
    reset() {
      console.log(this.formInline);
      this.tableData=this.resetTableData

    
    },
    getData(params) {
      students(params).then(res => {
        if (res.status === 201) {

          this.tableData = res.data
          this.resetTableData=res.data
          this.total = res.data.length
          this.tableData.forEach(item => {
            item.sex === "male" ? item.sex_text = "男" : item.sex_text = "女"
            item.state === 1 ? (item.state_text = "已入学") : (item.state === 2 ? item.state_text = "未入学" : item.state_text = "休学中")
          })
        }

      })
    },
    handleSizeChange(val) {
      this.page_size = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    deleteRow(row) {

      studentsDel(row.id).then(res => {
        console.log(res);
        if (res.status === 201) {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getData()
        }
      })
    }
  }
}
</script>