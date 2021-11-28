<template>
  <DashBoardComponent>
    <template v-slot:page-content class="">
      <div class="contatiner d-flex justify-content-between">
        <h4>Produto</h4>
        <router-link
          class="btn btn-sm btn-primary"
          :to="{ name: 'admin-product' }"
        >
          <i class="fas fa-arrow-left"></i> Voltar
        </router-link>
      </div>
      <form>
        <TabsComponent :tablist="tablist">
          <template v-slot:geral>
            <div class="mt-2">
              <InputComponent
                :label="'Nome do produto'"
                :type="'text'"
                v-model="name"
              />
              <QuillEditor
                theme="snow"
                toobal="full"
                v-model:content="content"
                contentType="html"
              />
            </div>
          </template>
          <template v-slot:dados>
            <div class="mt-2">
              <InputComponent
                :label="'Modelo'"
                :type="'text'"
                v-model="model"
              />

              <InputComponent :label="'sku'" :type="'text'" v-model="sku" />
              <InputComponent
                :label="'Estoque'"
                :type="'text'"
                v-model="quantity"
              />

              <SelectBoxComponent
                :list="stock_status_list"
                :label="'Caso o estoque do produto esteja zerado'"
                v-model="stock_status_id"
                :indexKey="'id'"
                :title="'name'"
              />

              <InputComponent
                :label="'Estoque'"
                :type="'text'"
                v-model="quantity"
              />

              <SelectBoxComponent
                :list="shippinglist"
                :label="'Envia o produto?'"
                v-model="shipping"
                :indexKey="'id'"
                :title="'name'"
              />

              <SelectBoxComponent
                :list="statusList"
                :label="'Status do produto'"
                v-model="status"
                :indexKey="'id'"
                :title="'name'"
              />
            </div>
          </template>
          <template v-slot:ligacoes> Ligações teste</template>
        </TabsComponent>
      </form>
    </template>
  </DashBoardComponent>
</template>

<script>
import "./Style.css";
import DashBoardComponent from "@/components/Layout/Dashboard/DashboardComponent/DashboardComponent.vue";
import TabsComponent from "@/components/Widgets/TabsComponent/TabsComponent.vue";
import InputComponent from "@/components/Inputs/Common/InputComponent.vue";
import SelectBoxComponent from "@/components/Selects/SelectBoxComponent/SelectBoxComponent.vue";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "CreateProductComponent",
  components: {
    DashBoardComponent,
    TabsComponent,
    QuillEditor,
    InputComponent,
    SelectBoxComponent,
  },
  data() {
    return {
      content: "",
      shipping: "",
      status: "",
      stock_status_list: [
        {
          id: 0,
          name: "Sem estoque",
        },
        {
          id: 1,
          name: "Sob encomenda",
        },
        {
          id: 2,
          name: "Em estoque",
        },
      ],
      statusList: [
        {
          id: 0,
          name: "Desabilitado",
        },

        {
          id: 1,
          name: "Habilitado",
        },
      ],
      shippinglist: [
        {
          id: 0,
          name: "Não",
        },

        {
          id: 1,
          name: "Sim",
        },
      ],
      tablist: [
        {
          title: "Geral",
          name: "geral",
          active: true,
        },
        {
          title: "Dados",
          name: "dados",
          active: false,
        },
        {
          title: "Ligações",
          name: "ligacoes",
          active: false,
        },
      ],
    };
  },
  methods: {
    sendEvent() {
      const event = new CustomEvent("catalog");
      window.dispatchEvent(event);
    },

    shipp() {
      console.log(this.shipping);
    },
  },
  mounted() {
    var product = this.$route.params.id;
    if (!product) {
      this.shipping = "Selecione uma opção";
      this.status = "Selecione uma opção";
    }
  },
};
</script>
