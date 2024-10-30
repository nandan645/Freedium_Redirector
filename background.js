chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    const url = details.url;
    
    // Check if the URL is from Medium (including subdomains)
    if (url.match(/^https:\/\/([^.]+\.)?medium\.com\/.*/)) {
      // Create the Freedium URL
      const freediumUrl = `https://freedium.cfd/${url}`;
      
      // Redirect to Freedium
      chrome.tabs.update(details.tabId, {
        url: freediumUrl
      });
    }
  },
  {
    url: [
      {
        // Match medium.com and all subdomains
        hostContains: "medium.com"
      }
    ]
  }
);