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

		// create data div
		const data = document.createElement("div");
		data.id = "data";

		// add articles  to data div
		for (const obj of mainData) {
			// create article div
			const article = document.createElement("div");
			// create articles info
			const author = document.createElement("h2");
			author.textContent = obj.author;
			const title = document.createElement("p");
			title.textContent = obj.title;
			const category = document.createElement("p");
			category.textContent = obj.category;
			const content = document.createElement("p");
			content.textContent = obj.content;
			//  add articles info to article div
			article.append(author);
			article.append(title);
			article.append(category);
			article.append(content);

			// add article to data div
			data.append(article);
		}

		// add data div to html
		document.body.append(data);

	}

};

xhr.send();
