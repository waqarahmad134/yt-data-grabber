// Function to clean URLs: remove base URL and stop after the year
function grabAndCleanAnchorValues() {
  // Define the base part of the URL to remove
  const baseToRemove = 'https://www.watch-movies.com.pk/';
  // Regex to capture up to the year (4-digit year) and ignore everything after
  const cleanPattern = /^(.*?)\d{4}/;

  // Find the element with ID 'sitemap'
  const sitemapElement = document.getElementById('sitemap');
  
  if (sitemapElement) {
    // Find all <a> tags within the sitemap element
    const anchorTags = sitemapElement.querySelectorAll('a');

    if (anchorTags.length > 0) {
      // Iterate over each <a> tag and clean the href
      anchorTags.forEach((anchor, index) => {
        // Remove the base part of the URL
        let cleanedHref = anchor.href.replace(baseToRemove, '');

        // Apply regex to clean anything after the year
        const match = cleanedHref.match(cleanPattern);
        if (match) {
          cleanedHref = match[0].trim(); // Cleaned part up to the year
        }

        // Log the cleaned URL
        console.log(`Link ${index + 1}:`, cleanedHref);
      });
    } else {
      console.log('No <a> tags found inside the element with ID "sitemap".');
    }
  } else {
    console.log('Element with ID "sitemap" not found.');
  }
}

// Call the function to execute
grabAndCleanAnchorValues();



//without dash in url 
// Function to clean URLs: remove base URL, stop after the year, clean dashes, and handle the year formatting
function grabAndCleanAnchorValues() {
  // Define the base part of the URL to remove
  const baseToRemove = 'https://www.watch-movies.com.pk/';
  // Regex to capture up to the year (4-digit year) and ignore everything after
  const cleanPattern = /^(.*?)\d{4}/;

  // Find the element with ID 'sitemap'
  const sitemapElement = document.getElementById('sitemap');
  
  if (sitemapElement) {
    // Find all <a> tags within the sitemap element
    const anchorTags = sitemapElement.querySelectorAll('a');

    if (anchorTags.length > 0) {
      // Iterate over each <a> tag and clean the href
      anchorTags.forEach((anchor, index) => {
        // Remove the base part of the URL
        let cleanedHref = anchor.href.replace(baseToRemove, '');

        // Apply regex to clean anything after the year
        const match = cleanedHref.match(cleanPattern);
        if (match) {
          cleanedHref = match[0].trim(); // Cleaned part up to the year
        }

        // Replace dash before the year with a space
        cleanedHref = cleanedHref.replace(/-(?=\d{4}$)/, ' ');

        // Remove consecutive dashes and trailing dashes
        cleanedHref = cleanedHref.replace(/-+/g, '-'); // Replace multiple dashes with a single dash
        cleanedHref = cleanedHref.replace(/-$/g, '');  // Remove trailing dashes

        // Log the cleaned URL
        console.log(`Link ${index + 1}:`, cleanedHref);
      });
    } else {
      console.log('No <a> tags found inside the element with ID "sitemap".');
    }
  } else {
    console.log('Element with ID "sitemap" not found.');
  }
}

// Call the function to execute
grabAndCleanAnchorValues();
