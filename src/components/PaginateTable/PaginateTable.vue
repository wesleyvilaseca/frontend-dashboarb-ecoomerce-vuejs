<template>
    <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" @click="getCategories()"><i class="fas fa-angle-double-left"></i></a>
              </li>
              <li class="page-item">
                <a class="page-link" @click="getCategories((currentpage - 1) < 1 ? 1 : currentpage - 1)"> <i class="fas fa-chevron-left"></i> </a>
              </li>
               <template v-if="currentpage > paginateLimit">
                      <li class="page-item">
                        <a class="page-link" @click="getCategories(currentpage - 1)">..</a>                
                      </li>
               </template>
               <template v-for="(link, index) in links" :key="index">
                     <template v-if="index >= currentpage - paginateLimit && index <= currentpage + paginateLimit">
                            <template v-if="index + 1 == currentpage">
                             <li class="page-item active">
                                <a class="page-link">{{link.label}}</a>                
                              </li>
                            </template>
                            <template v-else>
                             <li class="page-item">
                                <a class="page-link" @click="getCategories(index + 1)">{{link.label}}</a>                
                              </li>
                            </template>
                    </template>                    
              </template>
              <template v-if="currentpage < currentpage - paginateLimit">
                      <li class="page-item" >
                        <a class="page-link" @click="getCategories(link.label)">..</a>                
                      </li>
               </template>
              <li class="page-item"><a class="page-link" @click="getCategories((currentpage + 1) > lastpage ? lastpage : currentpage + 1)"> <i class="fas fa-chevron-right"></i> </a></li>
              <li class="page-item"><a class="page-link" @click="getCategories(lastpage)"><i class="fas fa-angle-double-right"></i></a></li>
            </ul>
          </nav>
</template>

<script>

  export default {
    name: "PaginateTable",
    data() {
      return {
        paginateLimit: 2,
      }
    },
    props: {
        currentpage: Number,
        lastpage: Number,
        links: Object,
        callMethod: String
    },
    methods: {
      getCategories(data){
        this.callMethod(data);
      }
    }
  }
</script>
