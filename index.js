🔷 Number 1:
var scroll = setInterval(function(){ window.scrollBy(0, 1000)}, 1000);

🔷 Number 2:
window.clearInterval(scroll);
console.clear();

let urls = $$('a'); 
urls.forEach(function(v, i, a) {
    if (v.id === "thumbnail" && v.href) {
        let url = v.href;
        let badgeElement = v.querySelector('.badge-shape-wiz__text'); 
        let badgeText = badgeElement ? badgeElement.innerText : 'No badge found'; 
        console.log(
            '\t' + new Date().toLocaleDateString() + 
            '\t' + url + 
            '\t' + badgeText // Add the badge text to the output
        );
    }
});

// Grab title 
let urls = $$('a'); 
urls.forEach(function(v, i, a) {
    if (v.id === "video-title-link" && v.href) {
        let url = v.href;
        // Find the title element within "details"
        let titleElement = v.querySelector('#video-title'); 
        let titleText = titleElement ? titleElement.innerText : 'No title found'; 
        // Output the result
        console.log(
            '\t' + new Date().toLocaleDateString() + 
            '\t' + titleText
        );
    }
});

