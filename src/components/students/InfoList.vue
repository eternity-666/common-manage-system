<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>



    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" width="130">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="130">
      </el-table-column>
      <el-table-column prop="phone" label="电话" width="180">
      </el-table-column>
      <el-table-column prop="father" label="父亲" width="130">
      </el-table-column>
      <el-table-column prop="mother" label="母亲" width="180">
      </el-table-column>>

      <el-table-column prop="age" label="年龄" width="130">
      </el-table-column>>
      <el-table-column prop="address" label="地址" width="180">
      </el-table-column>
      <el-table-column prop="time" label="日期" width="180">
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
    <el-dialog title="添加学生" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>

        <el-form-item label="父亲" :label-width="formLabelWidth" prop="father">
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="母亲" :label-width="formLabelWidth" prop="mother">
          <el-input v-model="form.mother" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="ID" :label-width="formLabelWidth" prop="id">
          <el-input v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="日期" :label-width="formLabelWidth" prop="time">
          <el-date-picker v-model="form.time" format="yyyy 年 mm 月 dd 日" value-format="yyyy-mm-dd" type="date" placeholder="选择日期" >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { info } from '@/api/index.js'
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: ''
      },
      formLabelWidth: '120px',
      formInline: {
        name: '',
        sex: '1',
        father: '',
        mother: '',
        id: 0,
        address: '',
        phone: '',
        time: '',
        age: ''
      },
      rules:{

      }
    }
  },
  methods: {
    getInfo(params) {
      info(params).then(res => {
        console.log(res)
        this.tableData = res.data
        this.total = res.data.length
        this.tableData.forEach(item => {
          item.sex === "male" ? item.sex_text = "男" : item.sex_text = "女"

        })
      })
    }, add() {
      this.dialogFormVisible = true
    },sure(form){
      this.$refs[form].validate(valid =>{
        if(valid){
          this.tableData.unshift(this.form)
          this.dialogFormVisible = false
        }
      })
      }
    
  },
  created() {
    this.getInfo()
  }
}
</script>