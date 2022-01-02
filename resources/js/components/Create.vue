<template>
    <div>
        <h2 class="text-center">Create todo</h2><br>
        <form @submit.prevent="createTodo">
            <div class="text-center">
                <input type="text" v-model="todo.name"><br><br>
                <textarea type="text" v-model="todo.detail" /><br><br>
                <button  type="submit" class="btn btn-success">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{

        data(){
          return{todo:{}}
        },
        methods: {

           createTodo(){
                this.axios.post(`http://localhost:8000/api/todo/create`, this.todo).then(response =>{
                this.$router.push("/");
            });
           }
        }
    } 
</script>