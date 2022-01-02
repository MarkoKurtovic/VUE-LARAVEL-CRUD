<template>
    <div>
        <h2 class="text-center">Products List</h2>
        <table class="table"> 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <!--<th>Actions</th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" v-bind:key="todo.id">
                    <td>{{todo.id}}</td>
                    <td>{{todo.name}}</td>
                    <td>{{todo.detail}}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name: 'edit', params: {id: todo.id}}" class="btn btn-success">Edit</router-link>
                            <!-- <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button> -->
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
       data(){
          return{todos:[]}
        },
       created(){
            this.axios.get('http://localhost:8000/api/todos/').then(response => {
                this.todos = response.data;
             });
        },
       methods:{
           deleteProduct(id){
                this.axios.delete('http://localhost:8000/api/todos/${id}').then(response =>{
                    let i=this.products.map(data=>data.id).indexOf(id);
                    this.products.splice(i, 1)
                });
            }
        }
    } 
</script>