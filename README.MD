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

4. **Lấy TTS API Credential từ Google Cloud**

- Signup and Active [Google Cloud Console](https://console.cloud.google.com/)
- Active [Cloud Text-to-Speech API](https://console.cloud.google.com/marketplace/product/google/texttospeech.googleapis.com)
- Navigation Menu > APIs & Services > Credentials
- CREATE CREDENTIALS/ Service Account
- Nhập Name, Role(Basic/Owner) và tạo
- Vào Service Accounts vừa tạo
- KEYS > ADD KEYS > Create a new key
- Save as `ttsapp.json`
- Copy to `ttsapp.json` Project directory

5. **Cài đặt giọng nói**

Chạy `/run/config.bat` hoặc terminal ở thư mục dự án

```bash
npm run setting
```

> Các từ khóa tùy chỉnh giọng nói tham khảo ở [đây](https://cloud.google.com/text-to-speech/docs/).

6. **Nhập văn bản cần chuyển đổi vào file `/run/input.txt`**

7. **Chạy chương trình**

Chạy `/run/run.bat` hoặc terminal ở thư mục dự án

```bash
npm run start
```

8.  **File audio sẽ được lưu tại folder `/output`**
