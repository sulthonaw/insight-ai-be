require("dotenv").config();
const { getJson } = require("serpapi");
const { fetchBodyWithoutIframe } = require("../libs/scrapper");
const fs = require("fs");
const { summarizeNewsWithGroq } = require("../libs/ai");

const getSummarizeAI = async (req, res) => {
  const { search } = req.query;

  const response = await getJson({
    engine: "google_news",
    q: search,
    gl: "id",
    hl: "id",
    api_key: process.env.SERAPI_API_KEY,
  });

  const news = response.news_results.slice(0, 2);

  let raw = "";

  const link = [];

  for (const article of news) {
    if (article.stories) {
      for (let i = 0; i < 1; i++) {
        const news_results = await fetchBodyWithoutIframe(article.stories[i].link);
        link.push(article.stories[i].link);
        raw += news_results + " ";
      }
    } else {
      const news_results = await fetchBodyWithoutIframe(article.link);
      link.push(article.link);
      raw += news_results + " ";
    }
  }

  const ask = await summarizeNewsWithGroq(raw);

  res.send({
    answer: ask,
    links: link,
  });
};

module.exports = { getSummarizeAI };
