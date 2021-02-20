const fetch = require("node-fetch");

const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context) => {
  let resp;
  try {
    resp = await fetch(API_ENDPOINT, {
      headers: { Accept: "application/json" },
    }).then((response) => response.json());
  } catch (e) {
    return { statusCode: 422, body: String(error) };
  }

  console.log({ resp });

  //   const static = ["hello", "goodbye"];

  return {
    statusCode: 200,
    body: "Hello there",
  };
};
