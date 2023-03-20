const { default: axios } = require("axios");
const Axios = require("axios");

const getData = async (Query) => {
  const location = encodeURIComponent(Query);
  const url = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=OyC7xoR6eLJMb9bKu4lwPt6uYZUvpmMD`;
  const resp = await axios.get(url);
  console.log(resp);
  return resp;
};

module.exports.call = getData;

