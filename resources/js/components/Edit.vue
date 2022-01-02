<template>
    <div>
        <h2 class="text-center">Products List</h2>
        <h1>{{$route.params.id}}</h1>
    </div>
</template>

<script>
    export default{

        data(){
          return{products:[]}
        },
       created(id){
            this.axios.get('http://localhost:8000/api/todo/edit/${$route.params.id}').then(response => {
                this.products = response.data;
             });
        }
    } 
</script>