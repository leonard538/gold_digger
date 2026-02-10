# GoldDigger 💰

A prototype web application for gold investing. This project simulates a real-time gold price tracker where users can invest in gold and track their transactions.  
[deployed app is not available yet]

## Overview

GoldDigger is a simple yet functional prototype that demonstrates how a gold investment platform might work. The application features:

- **Live Gold Price Simulation** - Prices update every 2 seconds to simulate real market conditions
- **Investment Form** - Users can enter an amount to invest and purchase gold
- **Transaction Tracking** - All investments are saved and can be retrieved
- **Input Sanitization** - Protects against malicious input using sanitize-html

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Native HTTP Module** - No Express dependency, using Node's built-in `http` module
- **ES Modules** - Modern JavaScript module system (`type: "module"`)

### Frontend
- **HTML5** - Semantic markup with accessibility features (ARIA labels)
- **CSS3** - Custom styling with Google Fonts (Poppins, Roboto, Saira Stencil One)
- **Vanilla JavaScript** - No frameworks, pure JS with ES modules

### Development
- **Nodemon** - Auto-restart during development

### Security
- **sanitize-html** - Input sanitization to prevent XSS attacks

## Project Structure

```
gold_digger/
├── server.js              # Main server entry point
├── package.json           # Project dependencies and scripts
├── data/
│   ├── transaction.json   # Stored transactions
│   └── transaction.txt    # Transaction logs
├── handlers/
│   └── routeHandlers.js   # API route handlers (GET/POST)
├── utils/
│   ├── addNewTransaction.js
│   ├── getContentType.js
│   ├── getTransaction.js
│   ├── goldPriceGenerator.js  # Simulates live gold prices
│   ├── parseJSONBody.js
│   ├── sanitizedInput.js
│   ├── sendResponse.js
│   └── serveStatic.js
└── public/
    ├── index.html         # Main application page
    ├── index.css          # Styles
    ├── index.js           # Frontend logic
    ├── save_amount.js     # Investment handling
    └── 404.html           # Error page
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Or run in production mode:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:8000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api`   | Get current gold price and transactions |
| POST   | `/api`   | Submit a new investment |

## Features in Detail

### Gold Price Generator
The application uses a custom price generator that simulates realistic gold price fluctuations. Prices update every 2 seconds, creating a dynamic investment experience.

### Transaction Storage
All investments are stored in JSON format, allowing for easy retrieval and analysis of investment history.

---

## Learn More

Want to level up your coding skills? Check out **Scrimba** - an interactive learning platform for developers!

👉 [https://scrimba.com/?via=u42c5f8e](https://scrimba.com/?via=u42c5f8e)
