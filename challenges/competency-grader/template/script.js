let app = new Vue({
    el: "#app",
    data() {
        return {
            competencyData: {},
        };
    },
    mounted() {
        let self = this; // assigning vue instance to variable `self` to access in arrow function
        setTimeout(() => { // simulates getting data after 1000ms of request
            self.competencyData = { // raw data, DO NOT CHANGE
                id: 108,
                competency_cname: "美育",
                competency_ename: "Aesthetic Sensation",
                full_code: "4",
                skillstrands: [
                    {
                        id: 137,
                        full_code: "4A",
                        competency_cname: "创造",
                        competency_ename: "Creating",
                    },
                    {
                        id: 138,
                        full_code: "4B",
                        competency_cname: "表达",
                        competency_ename: "Presenting",
                    },
                    {
                        id: 139,
                        full_code: "4C",
                        competency_cname: "回应/鉴赏/评估",
                        competency_ename: "Responding",
                    },
                    {
                        id: 140,
                        full_code: "4D",
                        competency_cname: "连接",
                        competency_ename: "Connecting",
                    }
                ]
            };

            // write mounted code here in callback
        }, 1000);
    },
    methods: {

    },
    computed: {
        
    }
});