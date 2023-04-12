var savevalue = 0;

// Make API call to OpenAI

async function askGPT35Turbo(question, pageContent) {
  const openAI_API_KEY = "YOUR API KEY";
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${openAI_API_KEY}`,
  };

  const maxWords = 3000;
  const pageContentChunks = [];
  const pageContentWords = pageContent.split(" ");

  // Split the content into smaller chunks
  for (let i = 0; i < pageContentWords.length; i += maxWords) {
    pageContentChunks.push(pageContentWords.slice(i, i + maxWords).join(" "));
  }

  const answers = [];

  for (const chunk of pageContentChunks) {
    const prompt = `I have the following text:\n\n${chunk}\n\nMy question is: ${question}\n\nPlease provide an answer in less than 50 words. Response should be '--' if there is no definite answer.`;

    console.log(prompt);
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      const result = await response.json();
      answers.push(result.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching answer from OpenAI API:", error);
      answers.push("");
    }
  }

  // Combine the answers
  return answers.join(" ");
}

document.getElementById("clear-text").addEventListener("click", async () => {
  console.log("Question cleared!");
  // Reset the question
  document.getElementById("questions").value = "";
  document.getElementById("answers").innerHTML = "";
});

// Create an empty array to store questions and answers
const questionAnswerData = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "textContent") {
    const question = document.getElementById("questions").value;
    // console.log(message.content);
    // console.log("Message received from content script");
    // console.log(question);

    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";

    if (savevalue == 1) {
      console.log("Sending API request...");
      // Send the API request
      answersList.innerHTML = "Thinking...";
      askGPT35Turbo(question, message.content).then((answer) => {
        console.log("Answer:", answer);
        answersList.innerHTML = answer;

        // Save the question and answer to the array
        questionAnswerData.push({
          question: question,
          answer: answer,
        });
      });
    }
  }
});

document
  .getElementById("saveResponsesToggle")
  .addEventListener("change", (event) => {
    const saveResponses = event.target.checked;
    if (saveResponses) {
      console.log("Checked!");
      savevalue = 1;
    } else {
      console.log("Unchecked!");
      savevalue = 0;

      // Download the JSON file containing all questions and answers
      const jsonString = JSON.stringify(questionAnswerData);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Create a download link for the JSON file
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "questions_answers.json";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  });

document.getElementById("questions").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  }
});
