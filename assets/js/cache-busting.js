document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch the version number from version.json
    async function getVersion() {
      try {
        const response = await fetch('./src/version.json');
        const data = await response.json();
        return data.version || '';
      } catch (error) {
        console.log('Failed to fetch version:', error);
        return ''; // Fallback to an empty string if fetching fails
      }
    }
  
    // Function to update asset URLs with the version number
    function updateAssetLinks(version) {
      const links = document.querySelectorAll('link[rel="stylesheet"], script[src]');
      
      links.forEach(link => {
        let src = link.getAttribute('href') || link.getAttribute('src');
        if (src) {
          if (src.includes('?v=')) {
            src = src.split('?v=')[0]; // Remove existing version if present
          }
          const newUrl = src + (version ? `?v=${version}` : '');
          if (link.tagName === 'LINK') {
            link.setAttribute('href', newUrl);
          } else if (link.tagName === 'SCRIPT') {
            link.setAttribute('src', newUrl);
          }
        }
      });
    }
  
    // Fetch the version and update asset URLs
    getVersion().then(version => {
      if (version) {
        updateAssetLinks(version);
      }
    });
  });
  