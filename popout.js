document.getElementById("webhook").value = localStorage.getItem("webhook");
var webhookurl = localStorage.getItem("webhook");
console.log("penis");

document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('button');
    // onClick's logic below:
    link.addEventListener('click', function () {
        savewebhook();
    });
});

function savewebhook() {

    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("webhook", webhookurl);
        document.getElementById("result").innerHTML = "should work";
    
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

