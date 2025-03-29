const axios = require("axios");
const cheerio = require("cheerio");

async function fetchBodyWithoutIframe(url) {
  try {
    // Ambil halaman HTML dari URL
    const { data } = await axios.get(url);

    // Load HTML ke dalam Cheerio
    const $ = cheerio.load(data);

    $("iframe").remove();
    $("a").remove();
    $("script").remove();
    $("svg").remove();
    $("style").remove();
    $("img").remove();
    $("noscript").remove();
    $("*")
      .contents()
      .each((index, node) => {
        if (node.type === "comment") {
          $(node).remove();
        }
      });

    $("*")
      .contents()
      .each((index, node) => {
        if (node.type === "text" && !node.data.trim()) {
          $(node).remove();
        }
      });

    const cleanContent = $("body").text().trim().replace(/\s+/g, " ");

    return cleanContent;
  } catch (error) {
    return error;
  }
}

module.exports = { fetchBodyWithoutIframe };
