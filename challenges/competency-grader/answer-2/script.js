let app = new Vue({
    el: "#app",
    data() {
        return {
            competencyData: {},
            selectData: {},
            minGrade: 60,
            maxGrade: 100,
        };
    },
    mounted() {
        let self = this;
        setTimeout(() => {
            self.competencyData = {
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
            
            let oldData = JSON.parse(localStorage.getItem('gradeData'));
            if (!oldData || oldData.id !== self.competencyData.id) {
                self.selectData = {
                    id: self.competencyData.id,
                    grades: self.competencyData.skillstrands.reduce((result, skill) => {
                        result.push({
                            id: skill.id,
                            level: 0,
                        });
                        return result;
                    }, []),
                }
            } else {
                self.selectData = oldData;
            }
        }, 1000);
    },
    methods: {
        setSelect: function(index, level) {
            if (this.selectData.grades[index].level === level) {
                this.selectData.grades[index].level = 0;
            } else {
                this.selectData.grades[index].level = level;
            }
        }
    },
    computed: {
        scoreCount: function() {
            let ret = 0;
            if (this.selectData.grades) {
                this.selectData.grades.forEach((skill) => {
                    ret += skill.level;
                });
            }
            return ret;
        },
        skillCount: function() {
            let ret = 0;
            if (this.selectData.grades) {
                this.selectData.grades.forEach((skill) => {
                    ret += skill.level > 0;
                });
            }
            return ret;
        },
        avgScore: function() {
            return (this.skillCount > 0) ? Math.round(this.scoreCount * 1.0 / this.skillCount * 10) / 10.0 : 0;
        },
        grade: function() {
            const delta = (this.skillCount) ? (this.maxGrade - this.minGrade) / ((4.0 - 1.0) * this.skillCount) : 0;
            const levels = this.scoreCount - this.skillCount;
            return (this.skillCount) ? this.minGrade + Math.round(levels * delta * 10) / 10.0 : 0;
        }
    },
    watch: {
        selectData: {
            handler: function(newVal) {
                console.log("changed");
                localStorage.setItem("gradeData", JSON.stringify(newVal));
            },
            deep: true,
        }
    }
});