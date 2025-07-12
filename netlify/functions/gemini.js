const fetch = require("node-fetch");

exports.handler = async function (event) {
  try {
    const API_KEY = process.env.GEMINI_API_KEY; // 🔐 Secret key from Netlify env
    const body = JSON.parse(event.body);        // Get message from frontend

    // Send request to Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error("Gemini function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
