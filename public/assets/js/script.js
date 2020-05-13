$(document).ready(function(){
    $.ajax({
        url: "/api",
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
})