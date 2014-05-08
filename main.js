function onClickHandler(info, tab) {
    console.log(info, tab);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://github.com/mahata", true);
    xhr.responseType = "document";
    xhr.onload = function(e) {
	if (this.status === 200) {
	    console.log(this.responseXML.title);
	}
    };
    xhr.send();
};

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.runtime.onInstalled.addListener(function() {
    // normal context menu
    chrome.contextMenus.create({
	"title": "title1",
	"id": "id1"
    });

    // context menu for text selection and image
    chrome.contextMenus.create({
	"title": "title2",
	"contexts": ["selection", "image"],
	"id": "id2"
    });    
});
