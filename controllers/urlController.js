const Url = require("../models/Url");
const crypto = require("crypto");
module.exports = {
  getHome: async (req, res) => {
    const longUrl = null;
    const shortUrl = null;
    res.render("index", { longUrl, shortUrl });
  },

  createUrl: async (req, res) => {
    try {
      const longUrl = req.body.url;
      const randomNr = crypto.randomUUID();
      const shortenedUrl = randomNr.slice(0, 4);

      await Url.create({
        url: longUrl,
        shortUrl: shortenedUrl,
      });
      res.render("index", { longUrl, shortUrl: shortenedUrl });
    } catch (error) {
      console.log(error);
    }
  },

  getShortUrl: async (req, res) => {
    try {
      const shortUrl = req.query.shortUrl;
      const findLong = await Url.findOne({ shortUrl: shortUrl });
      if (findLong) {
        const longUrl = findLong.url;
        res.render("index", { shortUrl: null, longUrl: longUrl });
      } else {
        res.render("index", { longUrl: "No url found", shortUrl: null });
      }
    } catch (error) {
      console.log(error);
      res.render("index", { longUrl: null, shortUrl: null });
    }
  },
};
