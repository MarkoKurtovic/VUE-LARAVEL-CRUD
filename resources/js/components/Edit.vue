<template>
    <div>
        <h2 class="text-center">Edit todo</h2><br>
        <div class="text-center">
            <input type="text" v-model="todo.name"><br><br>
            <textarea type="text" v-model="todo.detail" /><br><br>
            <button  type="button" class="btn btn-primary">Update</button>
        </div>
    </div>
</template>

<script>
    export default{

        data(){
          return{todo:[]}
        },
       created(){
            this.axios.get(`http://localhost:8000/api/todo/edit/${this.$route.params.id}`).then(response => {
                this.todo = response.data;
             });
        }
    } 
</script>