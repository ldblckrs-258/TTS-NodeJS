const textToSpeech = require("@google-cloud/text-to-speech");
require("dotenv").config();
const fs = require("fs");
const util = require("util");
const client = new textToSpeech.TextToSpeechClient();
const config = require("./config.js");

function importTextFromFile(filePath) {
  try {
    const text = fs.readFileSync(filePath, "utf-8");
    return text;
  } catch (error) {
    console.error("An error occurred while importing text from file:", error);
    return null;
  }
}

const filePath = "./run/input.txt";
const importedText = importTextFromFile(filePath);

async function splitTextAndConvertToMp3() {
  const maxTextLength = 3700; // Maximum text length per request
  const text = importedText;
  const numChunks = Math.ceil(text.length / maxTextLength);
  const chunkSize = Math.ceil(text.length / numChunks);
  const chunks = [];

  console.log("Text is splitting to ", numChunks, " paragraph...");
  for (let i = 0; i < numChunks; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const chunk = text.substring(start, end);
    chunks.push(chunk);
  }

  const mp3Chunks = [];
  for (let i = 0; i < chunks.length; i++) {
    console.clear();
    console.log("Working on ", i + 1, "/", chunks.length);
    const chunk = chunks[i];
    const request = {
      input: { text: chunk },
      voice: config.voice,
      audioConfig: config.audioConfig,
    };

    const [response] = await client.synthesizeSpeech(request);
    mp3Chunks.push(response.audioContent);
  }

  const writeFile = util.promisify(fs.writeFile);
  const timestamp = Date.now(); // Get the current timestamp
  const outputFileName = `./output/${timestamp}.mp3`; // Generate a unique file name in the "run" folder

  await writeFile(outputFileName, Buffer.concat(mp3Chunks), "binary");
  console.clear();
  console.log("Finished converting to mp3!");
}

splitTextAndConvertToMp3().catch((err) => {
  console.error("An error occurred:", err);
});
