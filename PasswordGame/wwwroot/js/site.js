// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var app = new Vue({
    el: '#app',
    data: {
        index: 2,
        password: "",
        rulesStatus: [
            { id: 1, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 5 символов"},
            { id: 2, statusNow: false, statusComplete: false, text: "Ваш пароль должен иметь по крайней мере 1 цифру" }



        ]
    },
    computed:{
        checkedPassword: function (rule) {
            rule.text="123123123"
        }
    }
})