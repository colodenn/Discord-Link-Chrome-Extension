document.getElementById("webhook").value = localStorage.getItem("webhook");
document.getElementById("name").value = localStorage.getItem("name");
var webhookurl = localStorage.getItem("webhook");
var name = localStorage.getItem("name");
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
        var name = document.getElementById("name").value;
        localStorage.setItem("webhook", url);
        localStorage.setItem("name", name);

        // var newurl = localStorage.getItem("webhook");
        document.getElementById("webhook").value = localStorage.getItem("webhook");
        document.getElementById("name").value = localStorage.getItem("name");
        // var webhookurl = localStorage.getItem("webhook");

        // chrome.storage.sync.set({ webhook: value}, function() {
        //     });


        chrome.storage.sync.set({
            webhook: url
        }, function () {});
        chrome.storage.sync.set({
            name1: name
        }, function () {});




    } else {
     
    }
}