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
        var url = document.getElementById("webhook").value;
        localStorage.setItem("webhook", url);

        // var newurl = localStorage.getItem("webhook");
        document.getElementById("webhook").value = localStorage.getItem("webhook");
        // var webhookurl = localStorage.getItem("webhook");

        // chrome.storage.sync.set({ webhook: value}, function() {
        //     });


        chrome.storage.sync.set({
            webhook: url
        }, function () {});


        document.getElementById("result").innerHTML = "should work";

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}