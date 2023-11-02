// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var app = new Vue({
    el: '#app',
    data: {
        password:"",
        rulesStatus: [
            { rule: 1, statusNow: false, statusComplete: false },
            { rule: 2, statusNow: false, statusComplete: false }

        
        
        ]
    }
})