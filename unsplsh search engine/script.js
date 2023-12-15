// Get the elements from the HTML document
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const container = document.getElementById("image-container");

// Define the Unsplash API endpoint and your API key
const apiEndpoint = "https://api.unsplash.com/search/photos";
const apiKey = "API_KEY";

// Define a function to fetch and display images from the Unsplash API
function fetchImages(query) {
    // Clear the previous images from the container
    container.innerHTML = "";
    // Build the API URL with the query and the API key as parameters
    const url = `${apiEndpoint}?query=${query}&client_id=${apiKey}`;
    // Use the fetch method to send a GET request to the API
    fetch(url)
        .then(response => response.json()) // Use the json method to parse the response
        .then(data => {
            // Use the forEach method to loop through the results
            data.results.forEach(result => {
                // Create an img element for each result
                const img = document.createElement("img");
                // Set the src attribute to the result's urls.regular property
                img.setAttribute("src", result.urls.regular);
                // Append the img element to the container
                container.appendChild(img);
            });
        })
        .catch(error => console.error(error)); // Catch and log any errors
}

// Use the addEventListener method to listen for the submit event on the form
form.addEventListener("submit", event => {
    // Use the preventDefault method to prevent the default behavior of reloading the page
    event.preventDefault();
    // Get the value of the input element
    const query = input.value;
    // Call the fetchImages function with the query as an argument
    fetchImages(query);
});
