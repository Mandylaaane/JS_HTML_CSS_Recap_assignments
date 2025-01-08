// Base URL
const apiUrl = "https://api.example.com/data";

// Function to make a GET request using
function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) { // TODO: 1. find the error and fix it 
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    //2. finish the function
    .catch((error) => {
        console.error("There was a problem with the fetch operation;", error);
    });
}

fetchData(apiUrl);

// Function to make a POST request
function postData(url, data) {
    // TODO: Implement the function
    fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:',error));
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);