const root = document.querySelector("#root");



const displayData = (regionsData) => {
  const regions = `<ul class='card-container'>
  ${regionsData
    .map(
      (region) =>
        `<li class='card'><img class='img-card'src=assets/img/${region.code}.jpg><div class='text-card-container'><p>${region.nom}</p><a href='/regions/page/${region.nom}.html' class='see-more'>Voir plus</a></div></li>`
    )
    .join("")}
  </ul>`;
  root.innerHTML = regions;
};

const fetchApi = async (api) => {
  try {
    let response = await fetch(api);
    let data = await response.json();
     displayData(data,root); 
  } catch (error) {
    console.log(error);
  }

};

fetchApi("https://geo.api.gouv.fr/regions?limit=8");

// fetch("https://geo.api.gouv.fr/regions?limit=8")
//   .then((response) => response.json())
//   .then((data) => displayData(data))
//   .catch((error) => console.log(error));
