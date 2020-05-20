let app = new Vue({
    el: "#app",
    data() {
        return {
            counter: 0,
            status: 0
        };
    },
    mounted() {
        
    },
    methods: {
        increment: function() {
            this.counter++;
        }
    },
    computed: {

    }
});