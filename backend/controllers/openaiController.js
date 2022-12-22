const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  // can also get the number of images. currently hard coded to 1
  const { prompt, size } = req.body;

  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";
  try {
    const response = await openai.createImage({
      prompt,
      // number of images
      // n: Number(n),
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });

    if (error.response) {
      console.log("error.response.status :>> ", error.response.status);
      console.log("error.respons.data :>> ", error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = { generateImage };
