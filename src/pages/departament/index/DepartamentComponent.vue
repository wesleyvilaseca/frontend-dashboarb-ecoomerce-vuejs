<template>
  <DashBoardComponent :catalog="true">
    <template v-slot:page-content>
      <div class="contatiner d-flex justify-content-between">
        <h4>Categorias</h4>
        <button class="btn btn-sm btn-primary" @click="newdepartament">Adicionar</button>
      </div>
      <TableComponent
        v-if="departaments"
        :data="departaments"
        :config="config"
        :isEdit="true"
        :isDelet="true"
        :deletemethod="delet"
        :editmethod="edit"
      />
      <PaginateTable
        :currentpage="current_page"
        :lastpage="last_page"
        :links="links"
        :callMethod="getDepartaments"
      />
    </template>
  </DashBoardComponent>
</template>

<style scoped>
</style>

<script>
  import Category from "./Departament.js";
  export default Category;
</script>