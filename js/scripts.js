const app = new Vue({
        el:"#root",
        data: {
            //array
            //img
            //ecc ecc
            todos: [
                "first step",
                "second step",
                "third step"
            ],
            newTodo: ''
        },
        methods: {
            aggiungiTodo: function() {
                if (this.newTodo != "" ) {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        }
    }
});