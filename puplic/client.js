const weatherForm = document.querySelector("form");
const btn = document.querySelector("button");
const input = document.querySelector("input");
let successMessage = document.querySelector("#one");
const failureMessage = document.querySelector("#two");

const getResponse = async (deno) => {
  try {
    successMessage = "loading....";
    successMessage = "";
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${deno}&apikey=OyC7xoR6eLJMb9bKu4lwPt6uYZUvpmMD`;
    const res = await axios.get(url);
    successMessage.textContent = JSON.stringify(res?.data);
  } catch (error) {
    console.log(error);
  }
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;
  getResponse(location);
});
