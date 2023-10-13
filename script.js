// Get the button and the facts container
const showFactsBtn = document.getElementById('showFactsBtn');
const factsContainer = document.getElementById('factsContainer');

// Add a click event listener to the button
showFactsBtn.addEventListener('click', function() {
    // Toggle the display of the facts container
    if (factsContainer.style.display === "none") {
        factsContainer.style.display = "block";
        showFactsBtn.textContent = "Hide Fun Facts";
    } else {
        factsContainer.style.display = "none";
        showFactsBtn.textContent = "Show Fun Facts About Atoms!";
    }
});
