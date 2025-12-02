 ## MindDecode  - HackThrone project
**Bridging Academic Intelligence and Emotional Resilience through AI**

**Live Demo:**  
🎯 https://prep-nova-minddecode.replit.app/

---

## 🧩 Project Overview  
**PrepNOVA – MindDecode** is an AI-powered academic wellness and mock test platform that empowers students to achieve balance between academic performance and mental well-being.

Developed for a hackathon, it fuses **AI**, **Machine Learning (ML)**, and **EdTech innovation** to deliver:

- Personalized study recommendations  
- Cognitive wellness insights  
- Adaptive mock testing  
- Emotion-aware learning analytics  

---

## 🌟 Key Features

### 🤖 AI Chat Guidance  
GPT-integrated chatbot for academic and emotional support, providing tailored study help and motivational nudges.

---

### 📈 ML-Based Performance Predictor  
A custom ML model built with **scikit-learn** to analyze:

- Past test scores  
- Difficulty levels of subjects  
- Cognitive load and stress trends  

It then predicts **focus areas for improvement**.

---

### 🧠 Dynamic Mock Test Platform  
- AI-curated mock tests  
- Instant feedback  
- Adaptive question difficulty  
- Progress tracking  

---

### 📊 Performance Dashboard  
Interactive visual dashboard that displays:

- Topic-wise accuracy and performance  
- Progress over time  
- Personalized improvement suggestions  

---

## 🔐 Secure Authentication  
Powered by **Clerk**, ensuring:

- Encrypted sign-in / sign-up  
- JWT-based user sessions  
- Data privacy and protection  

---

## ☁️ Cloud & Replit Deployment  
Deployed entirely on **Replit**, ensuring seamless accessibility and zero-setup execution.

---


## 🧠 Tech Stack  

| Layer | Technology |
|-------|------------|
| **Frontend** | React + TypeScript (Vite) |
| **Backend** | Node.js + Express + TypeScript |
| **AI/ML** | OpenAI GPT API + Custom ML Predictor (Python) |
| **Database** | PostgreSQL / SQLite |
| **Authentication** | Clerk |
| **Deployment** | Replit Cloud |

---


## 🏗️ Project Structure  
```
PrepNOVA/
├── server/
│   ├── index.ts
│   ├── routes/
│   ├── ml/
│   └── middleware/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.tsx
├── data/
│   └── db.sqlite
├── .env
└── README.md
```
---

## 🔒 Security Implementation  

- 🔑 Clerk Authentication for secure user access  
- 🌐 HTTPS & Secure CORS policies  
- 🧩 Encrypted environment variables for API keys  
- 🧼 Database sanitization to prevent injection attacks  

---

## ⚙️ Workflow  

1. 🧍 User logs in securely via Replit Authentication  
2. 🧭 Chooses between **Mock Test** or **MindDecode (Predictor)** mode  
3. 🧮 Backend processes test or prediction requests  
4. 🧠 ML module generates insights and improvement focus areas  
5. 📊 Dashboard visualizes performance metrics and recommendations  

---

## 🧪 Machine Learning Model  

The MindDecode Predictor model evaluates:

- 🧾 Past academic scores and metrics  
- 🧠 Difficulty correlation between topics  
- 💭 Cognitive load and stress patterns  

Built With:

- Python  
- scikit-learn  
- pandas / numpy  
- Flask (REST API integration)  

---


---

## 🔒 Security Implementation  

- 🔑 Clerk Authentication for secure user access  
- 🌐 HTTPS & Secure CORS policies  
- 🧩 Encrypted environment variables for API keys  
- 🧼 Database sanitization to prevent injection attacks  

---

## ⚙️ Workflow  

1. 🧍 User logs in securely via Replit Authentication  
2. 🧭 Chooses between **Mock Test** or **MindDecode (Predictor)** mode  
3. 🧮 Backend processes test or prediction requests  
4. 🧠 ML module generates insights and improvement focus areas  
5. 📊 Dashboard visualizes performance metrics and recommendations  

---

## 🧪 Machine Learning Model  

The MindDecode Predictor model evaluates:

- 🧾 Past academic scores and metrics  
- 🧠 Difficulty correlation between topics  
- 💭 Cognitive load and stress patterns  

Built With:

- Python  
- scikit-learn  
- pandas / numpy  
- Flask (REST API integration)  

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/aishwarya-mol-2046/mind_decode.git
cd mind_decode
```

## 📦 Installation & Setup

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file and add:

```env
MODEL=auto
OPENAI_API_KEY=your_openai_key_here
GEMINI_API_KEY=optional_google_api_key
DATABASE_URL=postgresql://postgres:password@localhost:5432/prepnova
```

### 4️⃣ Run the App

```bash
npm run dev
```

---
# Screenshots of the output 

## Home page
<img width="3038" height="1638" alt="image" src="https://github.com/user-attachments/assets/11b413b1-73d4-48f0-b9a6-17acd2696dce" />

## dashboard page
<img width="3060" height="1616" alt="image" src="https://github.com/user-attachments/assets/2d024de9-8e8d-4244-a5d9-4eed4b99d0bf" />

## AI questions predictor page
  1. Upload the files for the needed subject
  <img width="3012" height="1596" alt="image" src="https://github.com/user-attachments/assets/c3d2358e-36e6-4ea0-b95c-6cc53a136d5f" />
  2. Predict the question paper for the given subject
     <img width="3058" height="1619" alt="image" src="https://github.com/user-attachments/assets/80c706eb-8114-46c7-907a-7c2853c61890" />
     <img width="3071" height="1560" alt="image" src="https://github.com/user-attachments/assets/e18da77d-2eea-42a7-9af6-f9aaef7e79e3" />

## Promodoro Timer 
   1. Start the timer
   <img width="3056" height="1615" alt="image" src="https://github.com/user-attachments/assets/53600971-254c-4c1f-8112-a622cb4348f6" />
   2. Stop when you feel out of focus and give your feedback
      <img width="3021" height="1484" alt="image" src="https://github.com/user-attachments/assets/a69c54ca-f370-483a-986e-f798e397ef75" />
   3. Click submit and continue to get your mood analysis
      <img width="3035" height="1207" alt="image" src="https://github.com/user-attachments/assets/a1a06968-55dd-4791-8577-74e5b31e1ef0" />

## Mock up test
  1. Attend the questions  
  <img width="3052" height="1614" alt="image" src="https://github.com/user-attachments/assets/5dcbbf06-be5c-479d-94b2-21618354f129" />
  2. View result analysis, also have an option for retest
     <img width="2669" height="1170" alt="image" src="https://github.com/user-attachments/assets/49af5980-05a3-4234-9c50-374a99b75f4b" />

---

## 📜 Author 
**Niveditha Venkatesh**

----

## 📜 License 
MIT License
Copyright (c) 2025 Niveditha Venkatesh

---
