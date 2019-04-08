var current_url = window.location.href;
var contextMenuItem = {
	"id": "discord",
	"title": "discord_title",
	"contexts": ["all"],
};

chrome.contextMenus.create(contextMenuItem);
console.log(current_url);
