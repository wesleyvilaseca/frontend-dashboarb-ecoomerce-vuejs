<template>
  <DashBoardComponent :catalog="true">
    <template v-slot:page-content>
      <div class="contatiner d-flex justify-content-between">
        <h4>Categorias</h4>
        <button class="btn btn-sm btn-primary" @click="newdepartament">
          Adicionar
        </button>
      </div>

      <div v-if="departaments.length > 0">
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
      </div>
      <div v-else class="text-center mt-3"><h4>Não há departamentos cadastrados</h4></div>
    </template>
  </DashBoardComponent>
</template>

<style scoped>
</style>

<script>
import Category from "./Departament.js";
export default Category;
</script>