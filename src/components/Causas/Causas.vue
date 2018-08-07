<template>
  <div class="container">
    <div class="header">
      <h2 class="title float-left">{{ msg }}</h2>
      <el-button type="primary" class="float-right" @click="$router.push({  path: 'crear' })">CREAR NUEVA CAUSA</el-button>
    </div>
    <div class="content">
      <data-tables :data='causas'>
        <el-table-column prop="RUC" label="RUC" sortable="custom">
        </el-table-column>
        <el-table-column prop="RUE" label="RUE" sortable="custom">
        </el-table-column>
        <el-table-column prop="tipo_especie" label="Tipo especie" sortable="custom">
        </el-table-column>
        <el-table-column prop="sub_tipo_especie" label="Tipo especie" sortable="custom">
        </el-table-column>
        <el-table-column prop="descripcion" label="Descripción" sortable="custom">
        </el-table-column>
        <el-table-column prop="fecha_incautacion" label="Incautación" sortable="custom">
        </el-table-column>
        <el-table-column prop="fecha_ingreso" label="Ingreso" sortable="custom">
        </el-table-column>
      </data-tables>
    </div>
  </div>
</template>

<script>
import {causaService} from '@/services/Causa.service'
export default {
  data () {
    return {
      msg: 'Listado de causas',
      causas: []
    }
  },
  mounted () {
    let vm = this
    causaService.query().then(function (data) {
      vm.causas = data.body
    }, function (err) {
      if (err.status) {
        this.$message.error('Error: ' + err.body.error)
      }
    })
  }
}
</script>
<style scoped>
</style>
