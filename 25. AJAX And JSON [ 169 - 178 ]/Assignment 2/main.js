const xhr = new XMLHttpRequest();
xhr.open("GET", "./articles.json", true);
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log(xhr.responseText);
	}
};

xhr.addEventListener("loadend", function () {
	console.log("Data Loaded");
});

xhr.send();
