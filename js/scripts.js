const app = new Vue({
        el:"#root",
        data: {
            //array
            //img
            //ecc ecc
            todos: [
                "first step",
                "second step",
                "third step",
                "four step"
            ],
            newTodo: ''
        },
        methods: {
            aggiungiTodo: function() {
                if (this.newTodo != "" ) {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },
            removeTodo: function(pippo) {
                this.todos.splice(pippo, 1);
            }
    }
});