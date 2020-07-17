let app = new Vue({
    el: "#playground",
    data: {
        testList: ['old'],
    },
    mounted: function() {
        this.testList.push('a');
        this.testList.push('b');
        this.testList.push('c');
    },
    watch: {
        clonedItems: { // <-- Edited
            handler: function(newVal, oldVal) {
                console.log("new", newVal);
                console.log("old", oldVal);
            },
        },
    },
    computed: {  // <-- Added
        clonedItems: function(){
            return JSON.parse(JSON.stringify(this.testList))
        }
    }
});