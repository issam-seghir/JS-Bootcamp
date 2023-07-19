// Fetch JSON data from an API
const fetchJSON = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// Usage
fetchJSON("./articles.json")
	.then((data) => {
		console.log("JSON data:", data);
    	data.length = 5;

		// create data div
		const dataDiv = document.createElement("div");
		dataDiv.id = "data";

		// add articles  to data div
		for (const obj of data) {
			// create article div
			const article = document.createElement("div");
			// create articles info
			const title = document.createElement("h2");
			title.textContent = obj.title;
			const description = document.createElement("p");
			description.textContent = obj.description;
			//  add articles info to article div
			article.append(title);
			article.append(description);

			// add article to data div
			dataDiv.append(article);
		}

		// add data div to html
		document.body.append(dataDiv);
	})
	.catch((error) => {
		console.error("Error fetching JSON:", error);
	});
