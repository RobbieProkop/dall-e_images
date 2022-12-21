const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  try {
    const res = await openai.createImage({
      prompt: "Russian civilians slugging away in a cold blizzard",
      n: 1,
      size: "512x512",
    });

    const imageUrl = res.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {}
};

module.exports = { generateImage };
