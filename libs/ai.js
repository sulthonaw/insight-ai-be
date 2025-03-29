require("dotenv").config();
const { Groq } = require("groq-sdk");
const fs = require("fs");
const cheerio = require("cheerio");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const summarizeNewsWithGroq = async (data) => {
  const ask = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Berikan ringkasan dari teks berita yang saya ambil dari suatu berikut dalam bentuk poin-poin yang jelas dan ringkas. Fokus pada informasi utama, seperti peristiwa penting, tokoh yang terlibat, lokasi, waktu, dan dampak yang ditimbulkan. Jika ada data atau angka penting, sertakan dalam ringkasan. Pastikan hasilnya tetap mudah dipahami.",
      },
      // Set a user message for the assistant to respond to.
      {
        role: "user",
        content: data,
      },
    ],

    // The language model which will generate the completion.
    model: "deepseek-r1-distill-llama-70b",

    //
    // Optional parameters
    //

    // Controls randomness: lowering results in less random completions.
    // As the temperature approaches zero, the model will become deterministic
    // and repetitive.
    temperature: 0.5,

    // The maximum number of tokens to generate. Requests can use up to
    // 2048 tokens shared between prompt and completion.
    max_completion_tokens: 1024,

    // Controls diversity via nucleus sampling: 0.5 means half of all
    // likelihood-weighted options are considered.
    top_p: 1,

    // A stop sequence is a predefined or user-specified text string that
    // signals an AI to stop generating content, ensuring its responses
    // remain focused and concise. Examples include punctuation marks and
    // markers like "[end]".
    stop: null,

    // If set, partial message deltas will be sent.
    stream: false,
  });

  const result = ask.choices[0]?.message?.content || "";
  const $ = cheerio.load(result);

  $("think").remove();

  return $("body").text();
};

module.exports = { summarizeNewsWithGroq };
