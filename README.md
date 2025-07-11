# Interview Preparation AI App

Ace your next interview with **Interview Preparation AI** – an AI-powered platform that generates tailored interview questions, model answers, and deep explanations for any tech role. Organize your sessions, pin important questions, add notes, and master concepts with ease.

---

## ✨ Features

- **AI-Generated Q&A:** Get role-specific interview questions and answers powered by Google Gemini AI.
- **Concept Explanations:** Instantly generate detailed explanations for any question.
- **Personal Dashboard:** Save, organize, and revisit your interview sessions.
- **Pin & Note:** Pin favorite questions and add personal notes for future review.
- **Profile Management:** Upload a profile photo and manage your account.
- **Responsive UI:** Beautiful, modern design with smooth animations and mobile support.

---

## 🖥️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Icons, React Markdown
- **Backend:** Node.js, Express, MongoDB, Mongoose, Google Gemini AI SDK
- **Authentication:** JWT-based secure login/signup
- **File Uploads:** Multer for profile images
- **Styling:** Tailwind CSS, custom utility classes

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/interview-prep-ai.git
cd interview-prep-ai
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

- Create a `.env` file in `/backend` with the following:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  GEMINI_API_KEY=your_google_gemini_api_key
  PORT=8000
  ```

- Start the backend server:
  ```bash
  npm run dev
  ```

### 3. Setup the Frontend

```bash
cd ../frontend/interview-prep-ai
npm install
```

- Start the frontend dev server:
  ```bash
  npm run dev
  ```

- The app will be available at [http://localhost:5173](http://localhost:5173)

---



## 🛠️ Folder Structure

```
/backend
  controllers/
  models/
  routes/
  utils/
  server.js
  .env

/frontend/interview-prep-ai
  src/
    components/
    pages/
    utils/
    context/
    App.jsx
    main.jsx
  public/
  index.html
  package.json
```

---

## 🧑‍💻 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [Google Gemini AI](https://ai.google.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [MongoDB](https://www.mongodb.com/)

---

> Made with ❤️ by Sumit