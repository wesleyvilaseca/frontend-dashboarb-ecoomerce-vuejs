<template>
  <DashBoardComponent>
    <template v-slot:page-content class="">
      <div class="contatiner d-flex justify-content-between">
        <h4>Produto</h4>
      </div>
      <form @submit.stop.prevent="save">
        <div align="right">
          <button type="submit" class="btn btn-primary me-2">
            <i class="far fa-save"></i>
          </button>
          <button
            class="btn btn-dark"
            @click="$router.push({ name: 'admin-product' })"
          >
            <i class="fas fa-reply"></i>
          </button>
        </div>

        <TabsComponent :tablist="tablist">
          <template v-slot:geral>
            <div class="mt-2">
              <InputComponent
                :label="'Nome do produto'"
                :type="'text'"
                :required="'required'"
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
                :type="'number'"
                :placeholder="'0'"
                v-model="quantity"
              />

              <InputComponent
                :label="'Preço'"
                :type="'number'"
                :placeholder="'00,0'"
                v-model="price"
              />

              <SelectBoxComponent
                :list="stock_status_list"
                :label="'Caso o estoque do produto esteja zerado'"
                v-model="stock_status_id"
                :indexKey="'id'"
                :title="'name'"
              />

              <SelectBoxComponent
                :list="shippinglist"
                :label="'Envia o produto?'"
                v-model="shipping"
                :indexKey="'id'"
                :title="'name'"
              />

              <SelectBoxComponent
                :list="weigthlist"
                :label="'Unidade de peso'"
                v-model="weight_id"
                :indexKey="'id'"
                :title="'name'"
              />

              <SelectBoxComponent
                :list="lenghtlist"
                :label="'Unidade de medida'"
                v-model="lenght_id"
                :indexKey="'id'"
                :title="'name'"
              />

              <div class="row">
                <div class="col-md-3">
                  <InputComponent
                    :label="'Comprimento'"
                    :type="'number'"
                    :placeholder="'00'"
                    v-model="length"
                  />
                </div>
                <div class="col-md-3">
                  <InputComponent
                    :label="'Largura'"
                    :type="'number'"
                    :placeholder="'00'"
                    v-model="width"
                  />
                </div>

                <div class="col-md-3">
                  <InputComponent
                    :label="'Altura'"
                    :type="'number'"
                    :placeholder="'00'"
                    v-model="height"
                  />
                </div>

                <div class="col-md-3">
                  <InputComponent
                    :label="'Peso'"
                    :type="'number'"
                    :placeholder="'00'"
                    v-model="weight"
                  />
                </div>
              </div>

              <SelectBoxComponent
                :list="statusList"
                :label="'Status do produto'"
                v-model="status"
                :indexKey="'id'"
                :title="'name'"
              />
            </div>
          </template>
          <template v-slot:ligacoes>
            <div class="col-md-6">
              <InputSearchComponent
                :type="'text'"
                :label="'Selecione os departamentos'"
                :searchMethod="searchDepartament"
              />
              <div v-if="departaments.length > 0" class="position-relative">
                <SearchDropdownListComponent
                  :obj="departaments"
                  :itenKey="'name'"
                  :selectMethod="selectDepartament"
                />
              </div>

              <div v-if="departaments_selected.length > 0">
                <CardListComponent
                  :list="departaments_selected"
                  :itenKey="'name'"
                  :unselect="true"
                />
              </div>
            </div>
          </template>
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
import InputSearchComponent from "@/components/Inputs/InputSearchComponent/InputSearchComponent.vue";
import SearchDropdownListComponent from "@/components/Widgets/SearchDropdownListComponent/SearchDropdownListComponent.vue";
import CardListComponent from "@/components/Widgets/CardListComponent/CardListComponent.vue";

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
    InputSearchComponent,
    SearchDropdownListComponent,
    CardListComponent,
  },
  data() {
    return {
      name: "",
      content: "",
      shipping: "",
      status: "",
      price: "",
      length: "",
      width: "",
      height: "",
      weight: "",
      weight_id: "",
      lenght_id: "",
      departaments: [],
      departaments_selected: [],
      lenghtlist: [
        {
          id: 0,
          name: "Milimetro",
        },
        {
          id: 1,
          name: "Centrimetro",
        },
      ],
      weigthlist: [
        {
          id: 0,
          name: "Grama",
        },
        {
          id: 1,
          name: "Quilograma",
        },
      ],
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
      exists: null,
    };
  },
  methods: {
    async save() {
      // console.log(this.departaments_selected[0]);
      var product = {
        name: this.name,
        model: this.model,
        sku: this.sku,
        quantity: this.quantity,
        stock_status_id: this.stock_status_id,
        status: this.status,
        shipping: this.shipping,
        price: this.price,
        weight_id: this.weight_id,
        lenght_id: this.lenght_id,
        height: this.height,
        width: this.width,
        length: this.length,
        weight: this.weight,
        departaments: this.departaments_selected,
      };
      try {
        const { data } = await this.$http.post("admin-product/save", product);

        this.$toast.success(`${data.msg}`, { position: "top" });
        this.$router.push({ name: "admin-product" });
      } catch (error) {
        const { data } = error;
        this.$toast.error(`${data.error}`, { position: "top" });
      }
    },


    async searchDepartament(search) {
      if (search == "") {
        return (this.departaments = []);
      }

      try {
        const { data } = await this.$http.get(
          "admin-departament/search?name=" + search
        );
        return (this.departaments = data);
      } catch (error) {
        console.log(error);
      }
    },

    selectDepartament(departament) {
      this.departaments = [];
      this.search = "";
      this.checkIfExists(departament.id);
      if (!this.exists) this.departaments_selected.push(departament);
    },

    sendEvent() {
      const event = new CustomEvent("catalog");
      window.dispatchEvent(event);
    },

    checkIfExists(id) {
      this.exists = this.departaments_selected.some((item) => {
        return item.id == id;
      });
    },
  },
  mounted() {
    this.sendEvent();
    var product = this.$route.params.id;
    if (!product) {
      this.shipping = "Selecione uma opção";
      this.status = "Selecione uma opção";
      this.lenght_id = "Selecione uma opção";
      this.weight_id = "Selecione uma opção";
      this.stock_status_id = "Selecione uma opção";
    }
  },
};
</script>
