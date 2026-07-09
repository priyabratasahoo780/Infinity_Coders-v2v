<p align="center">
  <img src="https://img.shields.io/badge/🛡️_SAFESPHERE_AI-8B5CF6?style=for-the-badge&labelColor=0A0A0F" alt="SafeSphere AI" />
</p>

<h1 align="center">SafeSphere AI</h1>
<h3 align="center"><code>Predict. Protect. Prevent.</code></h3>

<p align="center">
  <b>A Zero-Trust, Predictive Safety Ecosystem</b><br/>
  <sub>Next-generation intelligent safety platform leveraging Edge AI and zero-touch triggers.</sub>
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-000020?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_2.0-8E75FF?style=for-the-badge&logo=google&logoColor=white" />
</p>

---

## 🌑 The Dark Reality (The Problem)

Imagine walking alone on an unfamiliar, dimly lit street at 11 PM. You hear footsteps behind you. Panic sets in. Your heart races. In that terrifying, high-adrenaline moment, the **last thing you are capable of doing** is pulling out your phone, unlocking the screen, navigating to a safety app, and holding down an SOS button.

By the time you manage to do that, it is often too late. 

Current women's safety applications are fundamentally flawed because they are **purely reactive**. They assume the victim has the time, composure, and physical freedom to interact with their device during a physical threat or harassment. They act as digital pagers rather than active shields, failing when they are needed the absolute most.

---

## 💡 The Paradigm Shift (Our Solution)

**SafeSphere AI** removes the burden of action from the victim. It shifts the paradigm from *reactive panic* to **predictive intelligence and autonomous response**.

We built a platform that acts as a digital bodyguard. It analyzes your environment before a threat materializes, and if an attack occurs, it triggers **zero-touch interventions**. You don't need to touch your screen. SafeSphere knows when you are in danger and acts for you.

---

## ✨ Core Capabilities

### 1. Predictive Risk Engine
Instead of waiting for an emergency, the system calculates a real-time **Safety Score (0-100)** using high-frequency telemetry data:
- **Spatial:** Live GPS against crowd-sourced crime heatmaps.
- **Environmental:** Ambient light sensor data and time-of-day.
- **Behavioral:** Accelerometer motion patterns and travel speed anomalies.

### 2. Multi-Modal Zero-Touch SOS
When physical interaction with a device is compromised, SafeSphere provides alternative, invisible triggers:
- **Voice Recognition:** Always-listening local ML model detecting distress keywords (`"Help"`, `"Stop"`).
- **Inertial Triggers:** High-G accelerometer shake detection.
- **Hardware Gestures:** Volume button sequence mapping.

### 3. Autonomous Legal Evidence Collection
Upon emergency activation, the system bypasses user interaction to secure verifiable, tamper-proof evidence:
- Simultaneous front/back camera photo capture.
- Continuous audio/video recording.
- **Instant Cloud Sync:** AES-256 encrypted payloads uploaded immediately to prevent data loss if the device is destroyed.

### 4. Guardian Telemetry Dashboard
Authorized contacts receive real-time access to a low-latency dashboard featuring:
- High-precision GPS tracking.
- Device health (Battery %, Network strength).
- Live Safety Score and activity status.

---

## 🏗️ System Architecture

The platform operates on a **4-tier architecture** spanning the mobile client, Firebase serverless backend, AI processing layer, and Google Maps cluster. Every component is purpose-built for high-throughput safety analytics at scale:

```mermaid
flowchart TD
    subgraph Client ["🌐 Client Tier — React Native Expo"]
        direction TB
        React["⚛️ React Components<br>(Pages + Layouts + NativeWind)"]
        
        Zustand["🧠 Zustand Stores<br>(authStore, safetyStore, sosStore)"]
        Router["🗺️ Expo Router v4<br>(PrivateRoute + Layout guards)"]
        
        React --> Zustand
        React --> Router
        
        Services["🚀 Business Services<br>(Offline SMS + SOS Engine)"]
        Zustand --> Services
    end

    Client -- "HTTPS / WSS (Real-time)" --> Backend

    subgraph Backend ["☁️ Backend Tier — Firebase Cloud"]
        direction TB
        Auth["🔐 Firebase Auth<br>(OAuth 2.0 + JWT)"]
        
        Firestore["🗄️ Firestore Database<br>(Real-time NoSQL + Offline Sync)"]
        
        Storage["📁 Cloud Storage<br>(AES-256 Encrypted Evidence)"]
        
        FCM["🔔 Cloud Messaging<br>(Emergency Push Notifications)"]

        Auth --> Firestore
        Firestore --> Storage
    end

    Backend -- "Serverless / RPC" --> AI

    subgraph AI ["🤖 AI Engine Tier"]
        direction TB
        Gemini["🧠 Gemini 2.0 Flash<br>(Risk Analysis + Chatbot)"]
        TFLite["📊 TensorFlow Lite<br>(On-device Pattern Detection)"]
        
        Gemini ~~~ TFLite
    end

    Backend -- "REST API" --> Maps

    subgraph Maps ["📍 Location & Maps Tier"]
        direction TB
        SDK["🗺️ Maps SDK<br>(Live Heatmaps)"]
        Places["🏥 Places API<br>(Nearby Safe Zones)"]
        
        SDK ~~~ Places
    end

    %% Node Styling (Matching the provided screenshots)
    style React fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Zustand fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Router fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Services fill:#1E3A8A,color:#fff,stroke:#3B82F6

    style Auth fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style Firestore fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style Storage fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style FCM fill:#4C1D95,color:#fff,stroke:#8B5CF6

    style Gemini fill:#065F46,color:#fff,stroke:#10B981
    style TFLite fill:#065F46,color:#fff,stroke:#10B981

    style SDK fill:#9F1239,color:#fff,stroke:#F43F5E
    style Places fill:#9F1239,color:#fff,stroke:#F43F5E

    %% Subgraph Styling (Grey background, no borders)
    style Client fill:#424242,stroke:none,color:#fff
    style Backend fill:#424242,stroke:none,color:#fff
    style AI fill:#424242,stroke:none,color:#fff
    style Maps fill:#424242,stroke:none,color:#fff
```

---

## 🔒 Security Architecture

The platform implements a **Zero-Trust, Defense-in-Depth** security model across both client and server tiers:

```mermaid
flowchart LR
    subgraph APISide ["⚙️ API-Side Security"]
        direction TB
        Rules["🛡️ Firestore Rules<br>(RBAC + UID matching)"]
        CORS["🌐 CORS Whitelist<br>(Only allowed origins)"]
        Rate["⏱️ Rate Limiting<br>Auth: 15 req/15min<br>Data: 100 req/15min"]
        StorageSec["📁 Storage Security<br>(Auth-only Evidence Upload)"]
        NoSQL["🧹 Payload Sanitizer<br>(Strip malicious keys)"]
        JWT["🔐 JWT Verify<br>(RS256 signature check)"]
        
        Rules --> CORS --> Rate --> StorageSec --> NoSQL --> JWT
    end

    subgraph ClientSide ["🌐 Client-Side Security"]
        direction LR
        Zod["✅ Zod Schema Validation<br>(Client-side form guards)"]
        Route["🛡️ Route Guards<br>(Expo Router auth middleware)"]
        Store["🔑 Encrypted MMKV Store<br>(AES-256 for local state)"]
        Logout["🚪 Auto Logout<br>(401 response -> clear token + redirect)"]
        Backoff["⏳ Exponential Backoff<br>(5xx retry: 1s -> 2s -> fail)"]

        Zod --> Route --> Store
        Store --> Logout
        Store --> Backoff
    end

    ClientSide -- "HTTPS / WSS" --> APISide

    %% Node Styling
    style Rules fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style CORS fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style Rate fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style StorageSec fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style NoSQL fill:#4C1D95,color:#fff,stroke:#8B5CF6
    style JWT fill:#4C1D95,color:#fff,stroke:#8B5CF6

    style Zod fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Route fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Store fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Logout fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Backoff fill:#1E3A8A,color:#fff,stroke:#3B82F6

    %% Subgraph Styling
    style APISide fill:#424242,stroke:none,color:#fff
    style ClientSide fill:#424242,stroke:none,color:#fff
```

---

## 🗄️ Database Tier — Firestore NoSQL

```mermaid
flowchart TD
    subgraph Database ["🗄️ Database Tier — Cloud Firestore"]
        direction LR
        Users["👤 users collection"]
        Events["🚨 sos_events collection<br>(Real-time emergency tracking)"]
        Guardians["👨‍👩‍👧 guardians collection"]
        Evidence["📸 evidence collection"]

        Events --> Pipelines["⚡ Real-time Listeners<br>(onSnapshot -> UI)"]
        Pipelines --> Indexes["🔑 Compound Indexes<br>({userId: 1, timestamp: -1})"]
    end

    style Users fill:#0F766E,color:#fff,stroke:#14B8A6
    style Events fill:#0F766E,color:#fff,stroke:#14B8A6
    style Guardians fill:#0F766E,color:#fff,stroke:#14B8A6
    style Evidence fill:#0F766E,color:#fff,stroke:#14B8A6
    style Pipelines fill:#1E3A8A,color:#fff,stroke:#3B82F6
    style Indexes fill:#1E3A8A,color:#fff,stroke:#3B82F6

    style Database fill:#424242,stroke:none,color:#fff
```

---

## 💻 Tech Stack Highlights

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Core Framework** | React Native + Expo | Cross-platform mobile architecture |
| **State Management** | Zustand + React Query | Predictable local and server state sync |
| **Styling Engine** | NativeWind (Tailwind CSS) | Utility-first, performant glassmorphism |
| **Cloud Backend** | Firebase (Firestore/Auth/Storage) | Real-time NoSQL and scalable auth |
| **AI Processing** | Gemini 2.0 Flash + TF Lite | Millisecond-latency risk analysis |
| **Geolocation** | Google Maps Platform | Routing, Heatmaps, and Safe Zones |

---

## 🚀 Setup & Local Development

### Prerequisites
- Node.js `v18+`
- Expo CLI
- Firebase Project with Firestore & Storage enabled

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/Infinity_Coders-v2v.git
   cd Infinity_Coders-v2v
   npm install
   ```

2. **Configure Environment:**
   ```bash
   cp .env.example .env
   # Add your API keys to .env
   ```

3. **Start Development Server:**
   ```bash
   npx expo start
   ```

---

<p align="center">
  <sub>Designed and engineered for maximum reliability. Built by <b>Infinity Coders</b>.</sub>
</p>
