<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(obj, index) in config" :key="index">{{obj.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(obj, index) in categories" :key="index">
        <td>{{obj.name}}</td>
        <td v-if="isEdit || isDelet">
            <template v-if="isEdit">
                <button class="btn btn-outline-primary btn-sm m-1" @click="edit(obj)"><i class="fas fa-pencil-alt"></i></button>
            </template>
            <template v-if="isDelet">
                <button class="btn btn-outline-danger btn-sm m-1" @click="delet(obj)"><i class="fas fa-trash"></i></button>
            </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name: "TableComponent",
    props: {
        categories: Object, 
        config: Object,
        isEdit: Boolean,
        isDelet: Boolean,
        deletemethod: String,
        editmethod: String
    },
    data() {
        return {
        }
    },
    methods: {
        edit(data){
            this.editmethod(data);
        },
        delet(data){
            this.deletemethod(data);
        }
    },
    created() {
    }
}
</script>
