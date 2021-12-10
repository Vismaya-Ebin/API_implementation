const catApiUrl = "https://api.thecatapi.com/v1/images/search";
const createImg = document.createElement("img");
async function loadImages() {
  try {
    const fetchApi = await fetch(catApiUrl);
    const apiResponse = await fetchApi.json();

    apiResponse.forEach((data) => {
      createImg.src = data.url;
      createImg.classList.add("img-thumbnail");
      createImg.style.margin="50px";
      document.querySelector(".container").appendChild(createImg);
      console.log(data.url);
    });
  } catch (err) {
    console.log("API Error", err);
  }
}

document.getElementById("kit-btn").addEventListener("click", loadImages);

