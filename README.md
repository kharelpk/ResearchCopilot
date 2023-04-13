# ResearchCopilot
Research Assistant Chrome Extension
Research Assistant is a Chrome extension powered by OpenAI's GPT-3.5 Turbo that helps you find answers to your questions while browsing Google pages. As you explore the web, it records the answers and lets you download them later, boosting your productivity during research.

## Features
* Instantly find answers to your questions
* Record the answers for later reference
* Download the answers as a file
* Powered by OpenAI's GPT-3.5 Turbo

## Prerequisites
To use this extension, you need to have an OpenAI API key. Please visit https://openai.com/product. Sign up for an account on the OpenAI website to get access to the API key.


## Installation

### Loading the extension in Chrome

1. Download the extension files as a ZIP archive and extract it to a local folder.
2. Open the Chrome browser and navigate to chrome://extensions/.
3. Enable "Developer mode" in the top-right corner.
4. Click on "Load unpacked" and select the folder where you extracted the extension files.
5. The Research Assistant extension should now appear in your Chrome extensions list.

## Adding your OpenAI API key
1. Open the popup.js file in the extracted folder.
2. Replace YOUR API KEY with your OpenAI API key.
`const OPENAI_API_KEY = "YOUR API KEY";`
3. Save the changes and close the file.
4. Reload the extension in the chrome://extensions/ page by clicking the circular arrow icon in the extension box.

## Usage
1. Browse the web as you normally do
2. Click the Research Copilot extension. 
3. Right click on the extension and click 'inspect' to monitor the console output. 
4. Minimize this window and go back to your browser window.
5. Type in a set of questions to the input bar. 
6. Click 'Save' button so that the program starts making API calls and recording the answers.
7. Note that each API call costs you money so make sure to monitor this or set a hard limit on spending cap using OpenAI's API portal.
8. You can download the answers by clicking the "Save" button.


## Contributing
We welcome contributions to improve the extension. Please feel free to open issues or submit pull requests on the GitHub repository.

## License
This project is licensed under the MIT License.
Copyright 2023 Prashanta Kharel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Disclaimer
This extension uses OpenAI's GPT-3.5 Turbo, which may incur costs depending on your usage. Please be aware of the pricing associated with the API. The extension's developers are not responsible for any costs incurred while using the extension.
