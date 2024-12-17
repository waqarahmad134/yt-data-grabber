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


new latest with file download
// Function to clean URLs: remove base URL, stop after the year, clean dashes, and handle the year formatting
function grabAndCleanAnchorValues() {
  // Define the base part of the URL to remove
  const baseToRemove = 'https://www.watch-movies.com.pk/';
  // Regex to capture up to the year (4-digit year) and ignore everything after
  const cleanPattern = /^(.*?)\d{4}/;

  // Store cleaned URLs to create a text file
  let cleanedUrls = [];

  // Find the element with ID 'sitemap'
  const sitemapElement = document.getElementById('sitemap');
  
  if (sitemapElement) {
    // Find all <a> tags within the sitemap element
    const anchorTags = sitemapElement.querySelectorAll('a');

    if (anchorTags.length > 0) {
      // Iterate over each <a> tag and clean the href
      anchorTags.forEach((anchor, index) => {
        // Only process links that contain '2024'
        if (anchor.href.includes('2024')) {
          // Remove the base part of the URL
          let cleanedHref = anchor.href.replace(baseToRemove, '');

          // Apply regex to clean anything after the year
          const match = cleanedHref.match(cleanPattern);
          if (match) {
            cleanedHref = match[0].trim(); // Cleaned part up to the year
          }

          // Replace dash before the year with a space (fix for cleaning)
          cleanedHref = cleanedHref.replace(/-(?=\d{4}$)/, ' ');

          // Remove consecutive dashes and trailing dashes
          cleanedHref = cleanedHref.replace(/-+/g, '-'); // Replace multiple dashes with a single dash
          cleanedHref = cleanedHref.replace(/-$/g, '');  // Remove trailing dashes

          // Ensure that dashes are replaced by a single dash
          cleanedHref = cleanedHref.replace(/\s+/g, '-');  // Replace spaces with hyphens
          cleanedHref = cleanedHref.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

          // Log the cleaned URL
          console.log(`Link ${index + 1}:`, cleanedHref);

          // Add the cleaned URL to the array for the text file
          cleanedUrls.push(cleanedHref);
        }
      });

      // After processing all URLs, create and download the text file
      downloadTextFile(cleanedUrls);
    } else {
      console.log('No <a> tags found inside the element with ID "sitemap".');
    }
  } else {
    console.log('Element with ID "sitemap" not found.');
  }
}

// Function to download the cleaned URLs as a text file
function downloadTextFile(urls) {
  // Create a Blob with the cleaned URLs
  const blob = new Blob([urls.join('\n')], { type: 'text/plain' });

  // Create a link element
  const link = document.createElement('a');
  
  // Set the download attribute with a filename
  link.download = 'cleaned_urls.txt';

  // Create a URL for the Blob and set it as the href
  link.href = URL.createObjectURL(blob);

  // Trigger a click event to download the file
  link.click();
}

// Call the function to execute
grabAndCleanAnchorValues();

