const GetApiData = (url) => {
  const result = fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      return data;
    })
    .catch((e) => console.log("e", e));

  return result;
};

let CreateCurrenciesTable = (url) => {
  const apiData = GetApiData(url);
  apiData.then((data) => console.table(data));
};
let GetSwapiPlanetName = (url, item) => {
  const apiData = GetApiData(url);
  apiData
    .then((data) => {
      data.results.forEach((planet) => {
        if (planet.url == item) {
          console.log(planet.name);
          return planet.name;
        }
      });
    })
    .catch((e) => console.log("Error:", e));
};
let CreateSwapiTable = (url) => {
  const apiData = GetApiData(url);

  apiData.then((data) =>
    data.results.forEach((item) =>
      console.log(
        `Name: ${item.name}\nHeight: ${item.height}\nMass: ${
          item.mass
        }\nHair: ${item.hair_color}\nSkin: ${item.skin_color}\nEye color: ${
          item.eye_color
        }\nBirth year: ${item.birth_year}\nGender: ${
          item.gender
        }\nHomeworld: ${GetSwapiPlanetName(
          "https://swapi.dev/api/planets/",
          item.homeworld
        )}`
      )
    )
  );
};

const URL1 = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
CreateCurrenciesTable(URL1);
const URL2 = "https://swapi.dev/api/people";
CreateSwapiTable(URL2);
