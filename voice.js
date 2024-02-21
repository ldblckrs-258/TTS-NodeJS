// Code to list voices supported by the Google Cloud Text-to-Speech API for the vi-VN language code
const textToSpeech = require("@google-cloud/text-to-speech");
require("dotenv").config();
const client = new textToSpeech.TextToSpeechClient();
const config = require("./config.js");

async function listVoices() {
  const [result] = await client.listVoices({});
  const voices = result.voices;

  console.log("Voices:");
  voices.forEach((voice) => {
    if (voice.languageCodes.includes(config.voice.languageCode)) {
      console.log(`Name: ${voice.name}`);
      console.log(`  SSML Voice Gender: ${voice.ssmlGender}`);
      // console.log(
      //   `  Natural Sample Rate Hertz: ${voice.naturalSampleRateHertz}`
      // );
    }
  });
}

listVoices();
