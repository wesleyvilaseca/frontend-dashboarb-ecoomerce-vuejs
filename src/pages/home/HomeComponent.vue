<template>
  <DashBoardComponent>
    <template v-slot:page-content>

      <div class="pageTitle mt-2 mb-2">Home</div>
      
      <div id="cards-home" class="row">
        <div class="col-md-4">
          <CardComponent1 :type="'Total Pedidos'" :qtd="10" :icon="'fas fa-boxes'"/>
        </div>

        <div class="col-md-4">
          <CardComponent1 :type="'Total Vendido'" :qtd="'R$ 5,00'" :icon="'fas fa-dollar-sign'"/>
        </div>

         <div class="col-md-4">
          <CardComponent1 :type="'Total Clientes'" :qtd="'50'" :icon="'fa fa-users'"/>
        </div>
      </div>

    </template>
  </DashBoardComponent>
</template>

<script>
import DashBoardComponent from "../../components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";
import CardComponent1 from "../../components/Cards/CardComponent1.vue";

export default {
  components: {
    DashBoardComponent,
    CardComponent1,
  },
};
</script>