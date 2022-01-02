<template>
    <div>
        <h2 class="text-center">Todo List</h2>
        <table class="table" style="width: 80%;   margin-left: auto; margin-right: auto;"> 
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Detail</th>
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
                            <button class="btn btn-danger" style="margin-left:5px;" @click="deleteTodo(todo.id)">Delete</button>
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
           deleteTodo(id){
                this.axios.get(`http://localhost:8000/api/delete/${id}`).then(response =>{
                     this.$router.push("/");
                });
            }
        }
    } 
</script>