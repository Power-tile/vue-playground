let app = new Vue({
    el: "#playground",
    data: {
        message: "Hello",
        input: "deeee",
    },
    computed: {  // <-- Added
        reversedMessage: function() {
            console.log("updated");
            return this.message.split("").reverse().join("");
        }  
    },
    methods: {
    }
});