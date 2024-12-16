🔷 Number 1:
var scroll = setInterval(function(){ window.scrollBy(0, 1000)}, 1000);

🔷 Number 2:
window.clearInterval(scroll);
console.clear();

// Grab all 'a' elements and iterate through them
let urls = $$('a'); // Use 'let' to declare the variable
urls.forEach(function(v, i, a) {
    
    if (v.id === "thumbnail" && v.href) {
        let url = v.href;
        
        // Find the badge element within the thumbnail
        let badgeElement = v.querySelector('.badge-shape-wiz__text'); // Select the badge element
        
        // Grab the badge text
        let badgeText = badgeElement ? badgeElement.innerText : 'No badge found'; // Use innerText

        // Output the result
        console.log(
            '\t' + new Date().toLocaleDateString() + 
            '\t' + url + 
            '\t' + badgeText // Add the badge text to the output
        );
    }
});



Grab title 
let urls = $$('a'); // Select all anchor elements
urls.forEach(function(v, i, a) {
    if (v.id === "details" && v.href) { // Check for id="details" and valid href
        let url = v.href;

        // Find the title element within "details"
        let titleElement = v.querySelector('#video-title-link'); // Select the title element
        
        // Grab the title text
        let titleText = titleElement ? titleElement.innerText : 'No title found'; // Use innerText

        // Find the badge element within "details"
        let badgeElement = v.querySelector('.badge-shape-wiz__text'); // Select the badge element
        
        // Grab the badge text
        let badgeText = badgeElement ? badgeElement.innerText : 'No badge found'; // Use innerText

        // Output the result
        console.log(
            '\t' + new Date().toLocaleDateString() + 
            '\t' + url + 
            '\t' + titleText + // Add the title text to the output
            '\t' + badgeText // Add the badge text to the output
        );
    }
});

