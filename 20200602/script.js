let app = new Vue({
    el: "#app",
    data() {
        return {
            msgList: ["First Message Ever"],
            inputValue: ""
        };
    },
    mounted() {
        
    },
    methods: {
        addMsg: function() {
            if (this.inputValue !== "") {
                this.msgList.push(this.inputValue);
                this.inputValue = "";
            }
        }
    },
    computed: {

    }
});