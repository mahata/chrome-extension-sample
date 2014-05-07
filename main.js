function onClickHandler(info, tab) {
    console.log(info);
    console.log(tab);
};

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "title": "title",
    "id": "dummy id"
  });
});
