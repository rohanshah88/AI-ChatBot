const fetch = require("node-fetch");

exports.handler = async function (event) {
  try {
    const API_KEY = process.env.GEMINI_API_KEY;
    const body = JSON.parse(event.body);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    // Safety check before accessing Gemini response
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

    if (!reply) {
      throw new Error("Invalid response from Gemini API");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };

  } catch (error) {
    console.error("Gemini Function Error:", error.message);

    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Server error", message: error.message }),
    };
  }
};
