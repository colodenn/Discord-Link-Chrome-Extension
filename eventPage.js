var webhook = "https://discordapp.com/api/webhooks/564579809661943838/fNuj_dNry8ZfgC_5Q8iLItpdnUHUnn44pJIzVy90MT3NcSjwhA9JWZMz6ZtG9V_-m3TL";
var contextMenuItem = {
	"id": "discord",
	"title": "Send Link to Discord",
	"contexts": ["all"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (pageUrl) {
	
	var xhttp = new XMLHttpRequest();
	var URL = pageUrl.pageUrl;
	console.log(URL);
	xhttp.open("POST", webhook, true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	xhttp.send(JSON.stringify({
		"content": URL
	}));
});
