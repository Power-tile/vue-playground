let app = new Vue({
    el: "#app",
    data: {
        competencyData: {},
        competencyGrade: {},
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
            // initialize competency grade of each skill strand 
            for(let i = 0; i<self.competencyData.skillstrands.length; i++) {
                let key = self.competencyData.skillstrands[i].id;
                self.$set(self.competencyGrade, key, 0)   
            }
        }, 1000);
    },
    methods: {
        // change the value of grade
        changeGrade: function(skillstrand, grade) {
            let key = skillstrand.id;
            if(grade != this.competencyGrade[skillstrand.id]) {
                this.$set(this.competencyGrade, key, grade);
            }
            else{
                this.$set(this.competencyGrade, key, 0);
            }
        },
    },
    computed: {
        score: function() {
            let grade = [0,0];
            let points = Object.values(this.competencyGrade);
            if(points.length !== 0) {
                points = points.filter(item => item !==0)
                if(points.length !== 0) {
                    // calculate score and average
                    let increment = (1-0.6)/((points.length)*3);
                    let step = points.map(x => x-1).reduce((pre, curr) => pre+curr);
                    let average = points.reduce((pre,curr) => pre+curr)/points.length;
                    grade[0] = 0.6+increment*step;
                    grade[1] = average
                }
            }
            // format the result
            grade[0] = Math.round(grade[0]*1000)/10;
            grade[1] = Math.round(grade[1]*10)/10;
            return grade;
        }
    }
});