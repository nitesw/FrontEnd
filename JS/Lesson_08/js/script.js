const GetApiData = (url, callback) => {
  ShowSpinner();
  const result = fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      HideSpinner();
      callback(data);
    })
    .catch((e) => console.log("e", e));

  return result;
};

let root = document.getElementById("root");

const headers = {
  people: [
    "Name",
    "Height",
    "Mass",
    "Hair",
    "Skin",
    "Eye color",
    "Birth year",
    "Gender",
    "Image",
  ],
  species: [
    "Name",
    "Classification",
    "Desigantion",
    "Avg Height",
    "Avg Lifespan",
    "Language",
    "Image",
  ],
  starships: [
    "Name",
    "Model",
    "Manufacturer",
    "Cost",
    "Max Speed",
    "Crew",
    "Class",
  ],
  vehicles: [
    "Name",
    "Model",
    "Manufacturer",
    "Cost",
    "Max Speed",
    "Crew",
    "Class",
  ],
  planets: ["Name", "Diameter", "Climate", "Gravity", "Terrain", "Population"],
};
let CreateSwapiTable = (data, type) => {
  root.innerHTML = "";
  previousSwapiURL = data.previous;
  nextSwapiURL = data.next;

  let divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container");

  let divRow = document.createElement("div");
  divRow.setAttribute("class", "row");

  let tableSwapi = document.createElement("table");
  tableSwapi.setAttribute("class", "table");
  tableSwapi.setAttribute("class", "swapi");

  let trForSwapiHeaders = document.createElement("tr");

  headers[type].forEach((header) => {
    let th = document.createElement("th");
    th.setAttribute("class", "th-swapi");
    th.innerText = header;
    trForSwapiHeaders.appendChild(th);
  });

  root.appendChild(divContainer);
  divContainer.appendChild(divRow);
  divRow.appendChild(tableSwapi);
  tableSwapi.appendChild(trForSwapiHeaders);

  if (type === "people") {
    data.results.forEach((person, index) => {
      let trPerson = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = person.name;

      let rowTdHeight = document.createElement("td");
      rowTdHeight.setAttribute("class", "td-swapi");
      rowTdHeight.innerText = person.height;

      let rowTdMass = document.createElement("td");
      rowTdMass.setAttribute("class", "td-swapi");
      rowTdMass.innerText = person.mass;

      let rowTdHair = document.createElement("td");
      rowTdHair.setAttribute("class", "td-swapi");
      rowTdHair.innerText = person.hair_color;

      let rowTdSkin = document.createElement("td");
      rowTdSkin.setAttribute("class", "td-swapi");
      rowTdSkin.innerText = person.skin_color;

      let rowTdEyeColor = document.createElement("td");
      rowTdEyeColor.setAttribute("class", "td-swapi");
      rowTdEyeColor.innerText = person.eye_color;

      let rowTdBirthYear = document.createElement("td");
      rowTdBirthYear.setAttribute("class", "td-swapi");
      rowTdBirthYear.innerText = person.birth_year;

      let rowTdGender = document.createElement("td");
      rowTdGender.setAttribute("class", "td-swapi");
      rowTdGender.innerText = person.gender;

      let rowTdImage = document.createElement("td");
      rowTdImage.setAttribute("class", "td-swapi");
      let characterImg = document.createElement("img");
      characterImg.setAttribute("class", "td-swapi-img");

      let imgIndex = index + pageIndex;
      if (imgIndex >= 17) imgIndex += 1;

      characterImg.src = `https://starwars-visualguide.com/assets/img/characters/${imgIndex}.jpg`;
      rowTdImage.appendChild(characterImg);

      trPerson.appendChild(rowTdName);
      trPerson.appendChild(rowTdHeight);
      trPerson.appendChild(rowTdMass);
      trPerson.appendChild(rowTdHair);
      trPerson.appendChild(rowTdSkin);
      trPerson.appendChild(rowTdEyeColor);
      trPerson.appendChild(rowTdBirthYear);
      trPerson.appendChild(rowTdGender);
      trPerson.appendChild(rowTdImage);

      tableSwapi.appendChild(trPerson);
    });
  }
  if (type === "species") {
    data.results.forEach((species, index) => {
      let trSpecies = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = species.name;

      let rowTdClass = document.createElement("td");
      rowTdClass.setAttribute("class", "td-swapi");
      rowTdClass.innerText = species.classification;

      let rowTdDesignation = document.createElement("td");
      rowTdDesignation.setAttribute("class", "td-swapi");
      rowTdDesignation.innerText = species.designation;

      let rowTdAvgHeight = document.createElement("td");
      rowTdAvgHeight.setAttribute("class", "td-swapi");
      rowTdAvgHeight.innerText = species.average_height;

      let rowTdAvgLifeSpan = document.createElement("td");
      rowTdAvgLifeSpan.setAttribute("class", "td-swapi");
      rowTdAvgLifeSpan.innerText = species.average_lifespan;

      let rowTdLanguage = document.createElement("td");
      rowTdLanguage.setAttribute("class", "td-swapi");
      rowTdLanguage.innerText = species.language;

      let rowTdImage = document.createElement("td");
      rowTdImage.setAttribute("class", "td-swapi");
      let speciesImg = document.createElement("img");
      speciesImg.setAttribute("class", "td-swapi-img");

      let imgIndex = index + pageIndex;

      speciesImg.src = `https://starwars-visualguide.com/assets/img/species/${imgIndex}.jpg`;
      rowTdImage.appendChild(speciesImg);

      trSpecies.appendChild(rowTdName);
      trSpecies.appendChild(rowTdClass);
      trSpecies.appendChild(rowTdDesignation);
      trSpecies.appendChild(rowTdAvgHeight);
      trSpecies.appendChild(rowTdAvgLifeSpan);
      trSpecies.appendChild(rowTdLanguage);
      trSpecies.appendChild(rowTdImage);

      tableSwapi.appendChild(trSpecies);
    });
  }
  if (type === "starships") {
    data.results.forEach((starship) => {
      let trStarship = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = starship.name;

      let rowTdModel = document.createElement("td");
      rowTdModel.setAttribute("class", "td-swapi");
      rowTdModel.innerText = starship.model;

      let rowTdManufacturer = document.createElement("td");
      rowTdManufacturer.setAttribute("class", "td-swapi");
      rowTdManufacturer.innerText = starship.manufacturer;

      let rowTdCost = document.createElement("td");
      rowTdCost.setAttribute("class", "td-swapi");
      rowTdCost.innerText = starship.cost_in_credits;

      let rowTdMaxSpeed = document.createElement("td");
      rowTdMaxSpeed.setAttribute("class", "td-swapi");
      rowTdMaxSpeed.innerText = starship.max_atmosphering_speed;

      let rowTdCrew = document.createElement("td");
      rowTdCrew.setAttribute("class", "td-swapi");
      rowTdCrew.innerText = starship.crew;

      let rowTdClass = document.createElement("td");
      rowTdClass.setAttribute("class", "td-swapi");
      rowTdClass.innerText = starship.starship_class;

      trStarship.appendChild(rowTdName);
      trStarship.appendChild(rowTdModel);
      trStarship.appendChild(rowTdManufacturer);
      trStarship.appendChild(rowTdCost);
      trStarship.appendChild(rowTdMaxSpeed);
      trStarship.appendChild(rowTdCrew);
      trStarship.appendChild(rowTdClass);

      tableSwapi.appendChild(trStarship);
    });
  }
  if (type === "vehicles") {
    data.results.forEach((vehicle) => {
      let trVehicle = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = vehicle.name;

      let rowTdModel = document.createElement("td");
      rowTdModel.setAttribute("class", "td-swapi");
      rowTdModel.innerText = vehicle.model;

      let rowTdManufacturer = document.createElement("td");
      rowTdManufacturer.setAttribute("class", "td-swapi");
      rowTdManufacturer.innerText = vehicle.manufacturer;

      let rowTdCost = document.createElement("td");
      rowTdCost.setAttribute("class", "td-swapi");
      rowTdCost.innerText = vehicle.cost_in_credits;

      let rowTdMaxSpeed = document.createElement("td");
      rowTdMaxSpeed.setAttribute("class", "td-swapi");
      rowTdMaxSpeed.innerText = vehicle.max_atmosphering_speed;

      let rowTdCrew = document.createElement("td");
      rowTdCrew.setAttribute("class", "td-swapi");
      rowTdCrew.innerText = vehicle.crew;

      let rowTdClass = document.createElement("td");
      rowTdClass.setAttribute("class", "td-swapi");
      rowTdClass.innerText = vehicle.vehicle_class;

      trVehicle.appendChild(rowTdName);
      trVehicle.appendChild(rowTdModel);
      trVehicle.appendChild(rowTdManufacturer);
      trVehicle.appendChild(rowTdCost);
      trVehicle.appendChild(rowTdMaxSpeed);
      trVehicle.appendChild(rowTdCrew);
      trVehicle.appendChild(rowTdClass);

      tableSwapi.appendChild(trVehicle);
    });
  }
  if (type === "planets") {
    data.results.forEach((planet) => {
      let trPlanet = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = planet.name;

      let rowTdDiameter = document.createElement("td");
      rowTdDiameter.setAttribute("class", "td-swapi");
      rowTdDiameter.innerText = planet.diameter;

      let rowTdClimate = document.createElement("td");
      rowTdClimate.setAttribute("class", "td-swapi");
      rowTdClimate.innerText = planet.climate;

      let rowTdGravity = document.createElement("td");
      rowTdGravity.setAttribute("class", "td-swapi");
      rowTdGravity.innerText = planet.gravity;

      let rowTdTerrain = document.createElement("td");
      rowTdTerrain.setAttribute("class", "td-swapi");
      rowTdTerrain.innerText = planet.terrain;

      let rowTdPopulation = document.createElement("td");
      rowTdPopulation.setAttribute("class", "td-swapi");
      rowTdPopulation.innerText = planet.population;

      trPlanet.appendChild(rowTdName);
      trPlanet.appendChild(rowTdDiameter);
      trPlanet.appendChild(rowTdClimate);
      trPlanet.appendChild(rowTdGravity);
      trPlanet.appendChild(rowTdTerrain);
      trPlanet.appendChild(rowTdPopulation);

      tableSwapi.appendChild(trPlanet);
    });
  }
};
let ShowItems = (items, type) => {
  root.innerHTML = "";

  let divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container");

  let divRow = document.createElement("div");
  divRow.setAttribute("class", "row");

  let tableSwapi = document.createElement("table");
  tableSwapi.setAttribute("class", "table");
  tableSwapi.setAttribute("class", "swapi");

  let trForSwapiHeaders = document.createElement("tr");

  headers[type].forEach((header) => {
    let th = document.createElement("th");
    th.setAttribute("class", "th-swapi");
    th.innerText = header;
    trForSwapiHeaders.appendChild(th);
  });

  root.appendChild(divContainer);
  divContainer.appendChild(divRow);
  divRow.appendChild(tableSwapi);
  tableSwapi.appendChild(trForSwapiHeaders);

  if (type === "people") {
    items.forEach((person) => {
      let trPerson = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = person.name;

      let rowTdHeight = document.createElement("td");
      rowTdHeight.setAttribute("class", "td-swapi");
      rowTdHeight.innerText = person.height;

      let rowTdMass = document.createElement("td");
      rowTdMass.setAttribute("class", "td-swapi");
      rowTdMass.innerText = person.mass;

      let rowTdHair = document.createElement("td");
      rowTdHair.setAttribute("class", "td-swapi");
      rowTdHair.innerText = person.hair_color;

      let rowTdSkin = document.createElement("td");
      rowTdSkin.setAttribute("class", "td-swapi");
      rowTdSkin.innerText = person.skin_color;

      let rowTdEyeColor = document.createElement("td");
      rowTdEyeColor.setAttribute("class", "td-swapi");
      rowTdEyeColor.innerText = person.eye_color;

      let rowTdBirthYear = document.createElement("td");
      rowTdBirthYear.setAttribute("class", "td-swapi");
      rowTdBirthYear.innerText = person.birth_year;

      let rowTdGender = document.createElement("td");
      rowTdGender.setAttribute("class", "td-swapi");
      rowTdGender.innerText = person.gender;

      let rowTdImage = document.createElement("td");
      rowTdImage.setAttribute("class", "td-swapi");
      let characterImg = document.createElement("img");
      characterImg.setAttribute("class", "td-swapi-img");

      const id = person.url.split("/").filter(Boolean).pop();
      characterImg.src = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
      rowTdImage.appendChild(characterImg);

      trPerson.appendChild(rowTdName);
      trPerson.appendChild(rowTdHeight);
      trPerson.appendChild(rowTdMass);
      trPerson.appendChild(rowTdHair);
      trPerson.appendChild(rowTdSkin);
      trPerson.appendChild(rowTdEyeColor);
      trPerson.appendChild(rowTdBirthYear);
      trPerson.appendChild(rowTdGender);
      trPerson.appendChild(rowTdImage);

      tableSwapi.appendChild(trPerson);
    });
  }
  if (type === "species") {
    items.forEach((species) => {
      let trSpecies = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = species.name;

      let rowTdClass = document.createElement("td");
      rowTdClass.setAttribute("class", "td-swapi");
      rowTdClass.innerText = species.classification;

      let rowTdDesignation = document.createElement("td");
      rowTdDesignation.setAttribute("class", "td-swapi");
      rowTdDesignation.innerText = species.designation;

      let rowTdAvgHeight = document.createElement("td");
      rowTdAvgHeight.setAttribute("class", "td-swapi");
      rowTdAvgHeight.innerText = species.average_height;

      let rowTdAvgLifeSpan = document.createElement("td");
      rowTdAvgLifeSpan.setAttribute("class", "td-swapi");
      rowTdAvgLifeSpan.innerText = species.average_lifespan;

      let rowTdLanguage = document.createElement("td");
      rowTdLanguage.setAttribute("class", "td-swapi");
      rowTdLanguage.innerText = species.language;

      let rowTdImage = document.createElement("td");
      rowTdImage.setAttribute("class", "td-swapi");
      let speciesImg = document.createElement("img");
      speciesImg.setAttribute("class", "td-swapi-img");

      const id = species.url.split("/").filter(Boolean).pop();
      speciesImg.src = `https://starwars-visualguide.com/assets/img/species/${id}.jpg`;
      rowTdImage.appendChild(speciesImg);

      trSpecies.appendChild(rowTdName);
      trSpecies.appendChild(rowTdClass);
      trSpecies.appendChild(rowTdDesignation);
      trSpecies.appendChild(rowTdAvgHeight);
      trSpecies.appendChild(rowTdAvgLifeSpan);
      trSpecies.appendChild(rowTdLanguage);
      trSpecies.appendChild(rowTdImage);

      tableSwapi.appendChild(trSpecies);
    });
  }
  if (type === "starships") {
    items.forEach((starship) => {
      let trStarship = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = starship.name;

      let rowTdModel = document.createElement("td");
      rowTdModel.setAttribute("class", "td-swapi");
      rowTdModel.innerText = starship.model;

      let rowTdManufacturer = document.createElement("td");
      rowTdManufacturer.setAttribute("class", "td-swapi");
      rowTdManufacturer.innerText = starship.manufacturer;

      let rowTdCost = document.createElement("td");
      rowTdCost.setAttribute("class", "td-swapi");
      rowTdCost.innerText = starship.cost_in_credits;

      let rowTdMaxSpeed = document.createElement("td");
      rowTdMaxSpeed.setAttribute("class", "td-swapi");
      rowTdMaxSpeed.innerText = starship.max_atmosphering_speed;

      let rowTdCrew = document.createElement("td");
      rowTdCrew.setAttribute("class", "td-swapi");
      rowTdCrew.innerText = starship.crew;

      let rowTdClass = document.createElement("td");
      rowTdClass.setAttribute("class", "td-swapi");
      rowTdClass.innerText = starship.starship_class;

      trStarship.appendChild(rowTdName);
      trStarship.appendChild(rowTdModel);
      trStarship.appendChild(rowTdManufacturer);
      trStarship.appendChild(rowTdCost);
      trStarship.appendChild(rowTdMaxSpeed);
      trStarship.appendChild(rowTdCrew);
      trStarship.appendChild(rowTdClass);

      tableSwapi.appendChild(trStarship);
    });
  }
  if (type === "vehicles") {
    items.forEach((vehicle) => {
      let trVehicle = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = vehicle.name;

      let rowTdModel = document.createElement("td");
      rowTdModel.setAttribute("class", "td-swapi");
      rowTdModel.innerText = vehicle.model;

      let rowTdManufacturer = document.createElement("td");
      rowTdManufacturer.setAttribute("class", "td-swapi");
      rowTdManufacturer.innerText = vehicle.manufacturer;

      let rowTdCost = document.createElement("td");
      rowTdCost.setAttribute("class", "td-swapi");
      rowTdCost.innerText = vehicle.cost_in_credits;

      let rowTdMaxSpeed = document.createElement("td");
      rowTdMaxSpeed.setAttribute("class", "td-swapi");
      rowTdMaxSpeed.innerText = vehicle.max_atmosphering_speed;

      let rowTdCrew = document.createElement("td");
      rowTdCrew.setAttribute("class", "td-swapi");
      rowTdCrew.innerText = vehicle.crew;

      let rowTdClass = document.createElement("td");
      rowTdClass.setAttribute("class", "td-swapi");
      rowTdClass.innerText = vehicle.vehicle_class;

      trVehicle.appendChild(rowTdName);
      trVehicle.appendChild(rowTdModel);
      trVehicle.appendChild(rowTdManufacturer);
      trVehicle.appendChild(rowTdCost);
      trVehicle.appendChild(rowTdMaxSpeed);
      trVehicle.appendChild(rowTdCrew);
      trVehicle.appendChild(rowTdClass);

      tableSwapi.appendChild(trVehicle);
    });
  }
  if (type === "planets") {
    items.forEach((planet) => {
      let trPlanet = document.createElement("tr");

      let rowTdName = document.createElement("td");
      rowTdName.setAttribute("class", "td-swapi-name");
      rowTdName.innerText = planet.name;

      let rowTdDiameter = document.createElement("td");
      rowTdDiameter.setAttribute("class", "td-swapi");
      rowTdDiameter.innerText = planet.diameter;

      let rowTdClimate = document.createElement("td");
      rowTdClimate.setAttribute("class", "td-swapi");
      rowTdClimate.innerText = planet.climate;

      let rowTdGravity = document.createElement("td");
      rowTdGravity.setAttribute("class", "td-swapi");
      rowTdGravity.innerText = planet.gravity;

      let rowTdTerrain = document.createElement("td");
      rowTdTerrain.setAttribute("class", "td-swapi");
      rowTdTerrain.innerText = planet.terrain;

      let rowTdPopulation = document.createElement("td");
      rowTdPopulation.setAttribute("class", "td-swapi");
      rowTdPopulation.innerText = planet.population;

      trPlanet.appendChild(rowTdName);
      trPlanet.appendChild(rowTdDiameter);
      trPlanet.appendChild(rowTdClimate);
      trPlanet.appendChild(rowTdGravity);
      trPlanet.appendChild(rowTdTerrain);
      trPlanet.appendChild(rowTdPopulation);

      tableSwapi.appendChild(trPlanet);
    });
  }
};

const fetchAllPages = (url, allData = []) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      allData = allData.concat(data.results);
      if (data.next) {
        return fetchAllPages(data.next, allData);
      } else {
        return allData;
      }
    })
    .catch((e) => {
      console.log("e", e);
      return allData;
    });
};
const searchAllPages = (type) => {
  let items = [];
  ShowSpinner();
  fetchAllPages(SwapiURL)
    .then((allData) => {
      const searchBar = document.querySelector(".searchbar");

      if (searchBar.value) {
        allData.forEach((item) => {
          let name = item.name;
          if (name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            items.push(item);
          }
        });
        ShowItems(items, type);
        HideSpinner();
        searchBar.value = "";
      } else {
        GetApiData(SwapiURL, CreateSwapiPeopleTable);
        HideSpinner();
      }
    })
    .catch((e) => console.log("Error during search:", e));
};

let ShowSpinner = () => {
  const spinner = document.querySelector(".load");
  const btns = document.querySelector(".nav-btn");
  if (spinner) {
    root.innerHTML = "";
    spinner.classList.remove("spinner-hide");
    spinner.classList.add("spinner-show");

    btns.classList.remove("nav-btn-show");
    btns.classList.add("nav-btn-hide");
  }
};
let HideSpinner = () => {
  const spinner = document.querySelector(".load");
  const btns = document.querySelector(".nav-btn");
  if (spinner) {
    spinner.classList.remove("spinner-show");
    spinner.classList.add("spinner-hide");

    btns.classList.remove("nav-btn-hide");
    btns.classList.add("nav-btn-show");
  }
};

let SwapiURL = null;
let SwapiURL_END = null;
let nextSwapiURL = SwapiURL;
let previousSwapiURL = null;
let pageIndex = 1;

if (document.URL.includes("index.html")) {
  SwapiURL = "https://swapi.dev/api/people";
  SwapiURL_END = "https://swapi.dev/api/people/?page=9";

  GetApiData(SwapiURL, (data) => CreateSwapiTable(data, "people"));

  const btnNext = document.querySelector(".next");
  btnNext.addEventListener("click", () => {
    if (nextSwapiURL) {
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "people"));
      pageIndex += 10;
    } else if (nextSwapiURL == null) {
      nextSwapiURL = SwapiURL;
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "people"));
      pageIndex -= 80;
    }
  });

  const btnPrevious = document.querySelector(".previous");
  btnPrevious.addEventListener("click", () => {
    if (previousSwapiURL) {
      GetApiData(previousSwapiURL, (data) => CreateSwapiTable(data, "people"));
      pageIndex -= 10;
    } else if (previousSwapiURL === null) {
      GetApiData(SwapiURL_END, (data) => CreateSwapiTable(data, "people"));
      pageIndex += 80;
    }
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", () => {
    searchAllPages("people");
  });
}
if (document.URL.includes("species.html")) {
  SwapiURL = "https://swapi.dev/api/species/";
  SwapiURL_END = "https://swapi.dev/api/species/?page=4";

  GetApiData(SwapiURL, (data) => CreateSwapiTable(data, "species"));

  const btnNext = document.querySelector(".next");
  btnNext.addEventListener("click", () => {
    if (nextSwapiURL) {
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "species"));
      pageIndex += 10;
    } else if (nextSwapiURL == null) {
      nextSwapiURL = SwapiURL;
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "species"));
      pageIndex -= 30;
    }
  });

  const btnPrevious = document.querySelector(".previous");
  btnPrevious.addEventListener("click", () => {
    if (previousSwapiURL) {
      GetApiData(previousSwapiURL, (data) => CreateSwapiTable(data, "species"));
      pageIndex -= 10;
    } else if (previousSwapiURL === null) {
      GetApiData(SwapiURL_END, (data) => CreateSwapiTable(data, "species"));
      pageIndex += 30;
    }
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", () => {
    searchAllPages("species");
  });
}
if (document.URL.includes("starships.html")) {
  SwapiURL = "https://swapi.dev/api/starships/";
  SwapiURL_END = "https://swapi.dev/api/starships/?page=4";

  GetApiData(SwapiURL, (data) => CreateSwapiTable(data, "starships"));

  const btnNext = document.querySelector(".next");
  btnNext.addEventListener("click", () => {
    if (nextSwapiURL) {
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "starships"));
    } else if (nextSwapiURL == null) {
      nextSwapiURL = SwapiURL;
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "starships"));
    }
  });

  const btnPrevious = document.querySelector(".previous");
  btnPrevious.addEventListener("click", () => {
    if (previousSwapiURL) {
      GetApiData(previousSwapiURL, (data) =>
        CreateSwapiTable(data, "starships")
      );
    } else if (previousSwapiURL === null) {
      GetApiData(SwapiURL_END, (data) => CreateSwapiTable(data, "starships"));
    }
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", () => {
    searchAllPages("starships");
  });
}
if (document.URL.includes("vehicles.html")) {
  SwapiURL = "https://swapi.dev/api/vehicles/";
  SwapiURL_END = "https://swapi.dev/api/vehicles/?page=4";

  GetApiData(SwapiURL, (data) => CreateSwapiTable(data, "vehicles"));

  const btnNext = document.querySelector(".next");
  btnNext.addEventListener("click", () => {
    if (nextSwapiURL) {
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "vehicles"));
    } else if (nextSwapiURL == null) {
      nextSwapiURL = SwapiURL;
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "vehicles"));
    }
  });

  const btnPrevious = document.querySelector(".previous");
  btnPrevious.addEventListener("click", () => {
    if (previousSwapiURL) {
      GetApiData(previousSwapiURL, (data) =>
        CreateSwapiTable(data, "vehicles")
      );
    } else if (previousSwapiURL === null) {
      GetApiData(SwapiURL_END, (data) => CreateSwapiTable(data, "vehicles"));
    }
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", () => {
    searchAllPages("vehicles");
  });
}
if (document.URL.includes("planets.html")) {
  SwapiURL = "https://swapi.dev/api/planets/";
  SwapiURL_END = "https://swapi.dev/api/planets/?page=6";

  GetApiData(SwapiURL, (data) => CreateSwapiTable(data, "planets"));

  const btnNext = document.querySelector(".next");
  btnNext.addEventListener("click", () => {
    if (nextSwapiURL) {
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "planets"));
    } else if (nextSwapiURL == null) {
      nextSwapiURL = SwapiURL;
      GetApiData(nextSwapiURL, (data) => CreateSwapiTable(data, "planets"));
    }
  });

  const btnPrevious = document.querySelector(".previous");
  btnPrevious.addEventListener("click", () => {
    if (previousSwapiURL) {
      GetApiData(previousSwapiURL, (data) => CreateSwapiTable(data, "planets"));
    } else if (previousSwapiURL === null) {
      GetApiData(SwapiURL_END, (data) => CreateSwapiTable(data, "planets"));
    }
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", () => {
    searchAllPages("planets");
  });
}
