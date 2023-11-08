
var app = new Vue({
    el: '#app',
    data: {
        index: 1,
        password: "",
        rulesStatus: [
            { id: 1, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 5 символов"},
            { id: 2, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 1 цифру" }
        ]
    },
    computed: {
        filterRules() {
            return this.rulesStatus.filter(rule=>rule.statusComplete===true)
        },
        filterIndex() {
            return this.rulesStatus.filter(rule => rule.id === this.index)
        }
    },
    methods:{
        checkedPassword: function ()
        {
            if (this.password.length > 5) {
                this.rulesStatus[0].statusComplete = true
                this.rulesStatus[0].statusNow = true
                if (this.index == 1) { this.index++ }
            }
            else {
                this.rulesStatus[0].statusNow = false
            }
           if (/\d/.test(this.password)==true) {
                this.rulesStatus[1].statusComplete = true
                this.rulesStatus[1].statusNow = true
                if (this.index == 2) { this.index++ }
            }
            else {
                this.rulesStatus[1].statusNow = false
            }
        }
    }
})