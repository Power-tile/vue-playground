let app = new Vue({
    el: "#app",
    data: {
            competencyData: {},
            buttons: [1,2,3,4],
            competencyGrade: {},
            backgroundColor: {},
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
            // initialize competency grade of each skill strand and background color of each button
            for(i = 0; i<self.competencyData.skillstrands.length; i++) {
                let key = self.competencyData.skillstrands[i].id;
                let value = 0;
                this.$set(this.competencyGrade, key, value)    
                for(j = 1; j<5; j++) {
                    let colorKey = key.toString()+" "+j.toString();
                    self.backgroundColor[colorKey] = "#e7e7e7";
                }       
            }
        }, 1000);
    },
    methods: {
        getGrade: function(skillstrand, grade) {
            let key = skillstrand.id;
            let colorKey = skillstrand.id.toString()+" "+grade.toString();
            let allGrades = [1,2,3,4];
            let otherKeys = [];
            allGrades.forEach(element => {
                if(element != grade) {
                    otherKeys.push(key.toString()+" "+element.toString());
                }
            });
            // set the background color of the selected button to blue and all other buttons of the same skill strand to grey
            if(this.backgroundColor[colorKey] == "#e7e7e7") {
                this.backgroundColor[colorKey] = "#008CBA";
                otherKeys.forEach(element => {
                    this.backgroundColor[element] = "#e7e7e7";
                });
            }
            // set the background color to grey if a button is unselected
            else{
                this.backgroundColor[colorKey] = "#e7e7e7";
            }
            if(grade != this.competencyGrade[skillstrand.id]) {
                this.$set(this.competencyGrade, key, grade);
            }
            else{
                this.$set(this.competencyGrade, key, 0);
            }
        },
    },
    computed: {
        calculate: function() {
            let score = [0,0];
            let grades = Object.values(this.competencyGrade);
            function add(x, y) {
                return x + y;
            }
            if(grades.length != 0) {
                let nonZero = [];
                grades.forEach(element => {
                    if(element != 0) {
                        nonZero.push(element);
                    }
                });
                if(nonZero.length != 0) {
                    increment = (1-0.6)/((nonZero.length)*3);
                    step = nonZero.map(x => x-1).reduce(add);
                    average = nonZero.reduce(add)/nonZero.length;
                    score[0] = Math.round((0.6+increment*step)*1000)/10+"%";
                    score[1] = Math.round(average*10)/10;
                    return score;
                }
                return score;
            }
            return score;
        }
    }
});