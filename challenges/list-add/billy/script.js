let app = new Vue({
    el: "#vueplayground",
    data: {
        seen: false,
        list: [
            { text: 'First Message Ever' },
        ],

        message: ""
    },
    methods: {
        add: function () {
            if (this.message.trim() !== "") {
                this.list.push({ text: this.message })
                this.message = ""
            }
        }

    }
})