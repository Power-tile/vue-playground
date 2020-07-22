let app = new Vue({
    el: "#playground",
    data: {
        list : ["First Message Ever"],
        new_item :"",
    },

    methods: {
        add_to_list: function(){
            if(this.new_item.trim()!=""){
                this.list.push(this.new_item.trim())
            }
            this.new_item = ""
        }
    },
});