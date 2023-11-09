
var app = new Vue({
    el: '#app',
    data: {
        index: 1,
        password: "",
        rulesStatus: [
            { id: 1, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 5 символов" },
            { id: 2, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 1 цифру" },
            { id: 3, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 10 символов" },
            { id: 4, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 15 символов" },
            { id: 5, statusNow: false, statusComplete: false, text: "Ваш пароль должен числа с общим перемножением равным 25" },

        ]
    },
    computed: {
        filterRules() {
            return this.rulesStatus.filter(rule => rule.statusComplete === true)
        },
        filterIndex() {
            return this.rulesStatus.filter(rule => rule.id === this.index)
        }
    },
    methods: {
        checkedPassword: function () {
            //1 rule
            if (this.password.length >= 5) {
                this.rulesStatus[0].statusComplete = true
                this.rulesStatus[0].statusNow = true
                if (this.index == 1) { this.index++ }
            }
            else {
                this.rulesStatus[0].statusNow = false
            }
            //2 rule
            if (/\d/.test(this.password) == true) {
                this.rulesStatus[1].statusComplete = true
                this.rulesStatus[1].statusNow = true
                if (this.index == 2) { this.index++ }
            }
            else {
                this.rulesStatus[1].statusNow = false
            }

            //3 rule
            if (this.password.length >= 10) {
                this.rulesStatus[2].statusComplete = true
                this.rulesStatus[2].statusNow = true
                if (this.index == 3) { this.index++ }
            }
            else {
                this.rulesStatus[2].statusNow = false
            }
            //4 rule
            if (this.password.length >= 15) {
                this.rulesStatus[3].statusComplete = true
                this.rulesStatus[3].statusNow = true
                if (this.index == 4) { this.index++ }
            }
            else {
                this.rulesStatus[3].statusNow = false
            }

            //5 rule

            var multi = String(parseInt(this.password.match(/\d+/)))
            var sum=1
            for (var i = 0; i<multi.length;i++) {
                sum *= parseInt(multi[i])
            }
            if (sum==25) 
            {
                this.rulesStatus[4].statusComplete = true
                this.rulesStatus[4].statusNow = true
                if (this.index == 5) { this.index++ }
            }
            else {
                this.rulesStatus[4].statusNow = false
            }
             //6 rule


        }
    }
})