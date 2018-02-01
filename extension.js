(function() {
// put your extension code inside here – do not delete 
// the lines above or the last line either!
	var imgURL = chrome.extension.getURL("img.jpg");
	$('img').attr('src', imgURL);
})();
