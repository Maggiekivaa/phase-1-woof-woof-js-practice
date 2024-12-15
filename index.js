document.addEventListener('DOMContentLoaded', () => {
    // The URL of your local server endpoint
    const url = 'http://localhost:3000/pups';  // Replace with the actual URL to fetch pup data from
  
    // Fetch pup data from the server
    fetch(url)
      .then(response => response.json())  // Parse the response to JSON
      .then(data => {
        // Get the dog-bar div from the page
        const dogBar = document.getElementById('dog-bar');
        
        // Loop through each pup in the fetched data
        data.forEach(pup => {
          // Create a new span element
          const span = document.createElement('span');
          
          // Set the text content of the span to the pup's name
          span.textContent = pup.name;
          
          // Append the span to the dog-bar div
          dogBar.appendChild(span);
        });
      })
      .catch(error => {
        console.error('Error fetching pup data:', error);
      });
  });
  