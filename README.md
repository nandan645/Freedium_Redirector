# Medium to Freedium Redirector

A Chrome extension that automatically redirects Medium articles to their Freedium versions, allowing you to read Medium articles without hitting the paywall. Works with both medium.com and its subdomains.

## Features

- Automatically redirects Medium articles to Freedium
- Works with medium.com domain and all subdomains
- No configuration needed - works right out of the box
- Lightweight and fast
- No data collection or tracking

## Installation

### Manual Installation from Release

1. Download the latest release (.zip file) from the [Releases page](../../releases)
2. Extract the downloaded zip file to a folder on your computer
3. Open Google Chrome
4. Go to `chrome://extensions/` in your browser
   - Alternatively, click the menu → Extensions
5. Enable "Developer mode" by clicking the toggle switch in the top right corner
6. Click the "Load unpacked" button that appears
7. Navigate to and select the folder where you extracted the extension files
8. The extension should now appear in your extensions list and be ready to use

## Usage

Once installed, the extension works automatically:

1. Simply browse to any Medium article
2. The extension will automatically redirect you to the Freedium version
3. You can now read the article without any paywall restrictions

Examples of URLs that will be redirected:
- [https://medium.com/article-path](https://medium.com/@kenslearningcurve/c-is-dead-6acfd6e4d7d6)
- [https://username.medium.com/article-path](https://kalana-dananjaya.medium.com/how-i-got-selected-to-do-gsoc-cern-my-gsoc-proposals-5f2df47072eb)
- Any other Medium subdomain

## Troubleshooting

If the extension isn't working:

1. Make sure it's enabled in your extensions list
2. Check that you're visiting a Medium URL
3. Try refreshing the page
4. If problems persist, try uninstalling and reinstalling the extension

## Development

If you want to modify the extension:

1. Clone this repository
2. Make your changes to the code
3. Load the unpacked extension in Chrome using the steps in the Installation section
4. Test your changes

## Privacy

This extension:
- Does not collect any user data
- Does not track browsing history
- Only activates on Medium domains
- Only performs URL redirects

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## Disclaimer

This extension is not affiliated with Medium or Freedium. Use at your own discretion.

