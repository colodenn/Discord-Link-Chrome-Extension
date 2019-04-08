var contextMenuItem = {
	"id": "discord",
	"title": "discord_title",
	"contexts": ["all"],
};

chrome.contextMenus.create(contextMenuItem);



chrome.contextMenus.onClicked.addListener(function(pageUrl) {
	// var current_url = window.location.href;
	var URL = pageUrl.pageUrl;
	console.log(URL);
});
