const xhr = new XMLHttpRequest();
xhr.open("GET", "./articles.json", true);
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		const mainData = JSON.parse(xhr.responseText);
		for (const obj of mainData) {
			obj["category"] = "all";
		}
		// mainData Variable Content
		console.log(mainData);
		// UpdatedData Variable Content
		let updatedData = JSON.stringify(mainData);
		console.log(updatedData);
	}
};

xhr.send();
