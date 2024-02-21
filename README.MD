# Text-to-speech NodeJs

## Giới thiệu

Đây là ứng dụng chuyển đổi văn bản thành giọng nói sử dụng Google Cloud Text-to-Speech API.

## Hướng dẫn sử dụng

1. **Clone repository**

2. **Cài đặt Node.js và npm**

3. **Chạy npm install**

Trong thư mục dự án vừa tải về, chạy lệnh sau trên để cài đặt các dependencies:

```bash
npm install
```

4. **Active và lấy Credential từ Google Cloud**

- Signup and Active [Google Cloud Console](https://console.cloud.google.com/)
- Active [Cloud Text-to-Speech API](https://console.cloud.google.com/marketplace/product/google/texttospeech.googleapis.com)
- Navigation Menu > APIs & Services > Credentials
- CREATE CREDENTIALS > Service Account
- Nhập Name, Role (Basic/Owner) > Done
- Vào Service Accounts vừa tạo
- KEYS > ADD KEYS > Create a new key
- Save as `ttsapp.json`
- Copy to `ttsapp.json` Project directory

5. **Nhập văn bản cần chuyển đổi vào file `/run/input.txt`**

6. **Chạy chương trình**

Chạy `/run/run.bat` hoặc terminal ở thư mục dự án

```bash
npm run start
```

7.  **File audio sẽ được lưu tại folder `/output`**

## Cài đặt mở rộng

1. **Cài đặt giọng nói**

Chạy `/run/config.bat` hoặc terminal ở thư mục dự án

```bash
npm run setting
```

> Các từ khóa tùy chỉnh giọng nói tham khảo ở [đây](https://cloud.google.com/text-to-speech/docs/).

2. **Xem các giọng nói hỗ trợ ngôn ngữ hiện tại**

Chạy `/run/voice.bat` hoặc terminal ở thư mục dự án

```bash
npm run voice
```

3. **Mở file audio vừa tạo gần nhất**
   Chạy `/run/play.bat`

**NOTE:**

`Config.js` lưu cài đặt giọng nói, có thể thay đổi trực tiếp tại đây:

```
module.exports = {
  "voice": {
    "languageCode": "vi-VN",
    "voiceName": "vi-VN-Wavenet-A"
  },
  "audioConfig": {
    "audioEncoding": "MP3",
    "speakingRate": 1.5,
    "pitch": -1.5,
    "volumeGainDb": 0,
    "sampleRateHertz": 24000,
    "effectsProfileId": [
      "handset-class-device"
    ]
  }
}
```
