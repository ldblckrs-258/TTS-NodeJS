const config = require("./config.js");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function updateConfig() {
  let choice = 0;
  do {
    console.clear();
    console.log("EDIT AUDIO CONFIGURATION");
    console.log("1. languageCode: ", config.voice.languageCode);
    console.log("2. voiceName: ", config.voice.voiceName);
    console.log("3. audioEncoding: ", config.audioConfig.audioEncoding);
    console.log("4. speakingRate: ", config.audioConfig.speakingRate);
    console.log("5. pitch: ", config.audioConfig.pitch);
    console.log("6. volumeGainDb: ", config.audioConfig.volumeGainDb);
    console.log("7. sampleRateHertz: ", config.audioConfig.sampleRateHertz);
    console.log("8. effectsProfileId: ", config.audioConfig.effectsProfileId);
    console.log("0. Save and exit");

    choice = await askQuestion("\n> Enter your choice: ");

    switch (choice) {
      case "1":
        config.voice.languageCode = await askQuestion("Enter language code: ");
        break;
      case "2":
        config.voice.voiceName = await askQuestion("Enter voice name: ");
        break;
      case "3":
        config.audioConfig.audioEncoding = await askQuestion(
          "Enter audio encoding: "
        );
        break;
      case "4":
        config.audioConfig.speakingRate = parseFloat(
          await askQuestion("Enter speaking rate (0.25 to 4.0): ")
        );
        break;
      case "5":
        config.audioConfig.pitch = parseFloat(
          await askQuestion("Enter pitch (-20.0 to 20.0): ")
        );
        break;
      case "6":
        config.audioConfig.volumeGainDb = parseFloat(
          await askQuestion("Enter volume gain db (-96.0 to 16.0): ")
        );
        break;
      case "7":
        config.audioConfig.sampleRateHertz = parseFloat(
          await askQuestion("Enter sample rate hertz (8000 to 48000): ")
        );
        break;
      case "8":
        config.audioConfig.effectsProfileId = [
          await askQuestion("Enter effects profile id: "),
        ];
        break;
      case "0":
        break;
      default:
        console.log("Invalid choice");
        break;
    }
  } while (choice !== "0");

  const configString = "module.exports = " + JSON.stringify(config, null, 2);

  fs.writeFile("./config.js", configString, (err) => {
    if (err) throw err;
    console.log("Config file has been updated");
  });
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

updateConfig().catch((err) => {
  console.error("An error occurred while updating config file:", err);
});
