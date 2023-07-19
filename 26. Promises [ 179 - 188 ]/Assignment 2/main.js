async function fetchJSON(url) {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error:", error.message);
		// Handle the error or provide fallback data
		// For example, you can return an empty array as fallback data
		return [];
	}
}


// Make the fetch request
try {

	const data = await fetchJSON("./articles.json");
	console.log("JSON data:", data);

	// Limit the number of articles to 5
	const limitedData = data.slice(0, 5);

	// Create the data div
	const dataDiv = document.createElement("div");
	dataDiv.id = "data";

	// Add articles to the data div
	for (const { title, description } of limitedData) {
		// Create the article div
		const article = document.createElement("div");

		// Create the article info elements
		const titleElem = document.createElement("h2");
		titleElem.textContent = title;

		const descriptionElem = document.createElement("p");
		descriptionElem.textContent = description;

		// Append the article info elements to the article div
		article.append(titleElem, descriptionElem);

		// Append the article div to the data div
		dataDiv.append(article);
	}

	// Add the data div to the HTML body
	document.body.append(dataDiv);

} catch (error) {
	console.error("Error fetching JSON:", error);
	// Display an error message to the user or handle the error in an appropriate way
	// For example, you can show an error message on the page
	const errorDiv = document.createElement("div");
	errorDiv.textContent = "Error fetching data. Please try again later.";
	document.body.append(errorDiv);
}
