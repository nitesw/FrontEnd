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

let CreateSwapiTable = (data) => {
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

  let thName = document.createElement("th");
  thName.setAttribute("class", "th-swapi");
  thName.innerText = "Name";
  let thHeight = document.createElement("th");
  thHeight.setAttribute("class", "th-swapi");
  thHeight.innerText = "Height";
  let thMass = document.createElement("th");
  thMass.setAttribute("class", "th-swapi");
  thMass.innerText = "Mass";
  let thHair = document.createElement("th");
  thHair.setAttribute("class", "th-swapi");
  thHair.innerText = "Hair";
  let thSkin = document.createElement("th");
  thSkin.setAttribute("class", "th-swapi");
  thSkin.innerText = "Skin";
  let thEyeColor = document.createElement("th");
  thEyeColor.setAttribute("class", "th-swapi");
  thEyeColor.innerText = "Eye color";
  let thBirthYear = document.createElement("th");
  thBirthYear.setAttribute("class", "th-swapi");
  thBirthYear.innerText = "Birth year";
  let thGender = document.createElement("th");
  thGender.setAttribute("class", "th-swapi");
  thGender.innerText = "Gender";
  let thImg = document.createElement("th");
  thImg.setAttribute("class", "th-swapi");
  thImg.innerText = "Image";

  root.appendChild(divContainer);
  divContainer.appendChild(divRow);
  divRow.appendChild(tableSwapi);

  tableSwapi.appendChild(trForSwapiHeaders);

  trForSwapiHeaders.appendChild(thName);
  trForSwapiHeaders.appendChild(thHeight);
  trForSwapiHeaders.appendChild(thMass);
  trForSwapiHeaders.appendChild(thHair);
  trForSwapiHeaders.appendChild(thSkin);
  trForSwapiHeaders.appendChild(thEyeColor);
  trForSwapiHeaders.appendChild(thBirthYear);
  trForSwapiHeaders.appendChild(thGender);
  trForSwapiHeaders.appendChild(thImg);

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
};
let ShowPeople = (people) => {
  root.innerHTML = "";

  let divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container");

  let divRow = document.createElement("div");
  divRow.setAttribute("class", "row");

  let tableSwapi = document.createElement("table");
  tableSwapi.setAttribute("class", "table");
  tableSwapi.setAttribute("class", "swapi");

  let trForSwapiHeaders = document.createElement("tr");

  let thName = document.createElement("th");
  thName.setAttribute("class", "th-swapi");
  thName.innerText = "Name";
  let thHeight = document.createElement("th");
  thHeight.setAttribute("class", "th-swapi");
  thHeight.innerText = "Height";
  let thMass = document.createElement("th");
  thMass.setAttribute("class", "th-swapi");
  thMass.innerText = "Mass";
  let thHair = document.createElement("th");
  thHair.setAttribute("class", "th-swapi");
  thHair.innerText = "Hair";
  let thSkin = document.createElement("th");
  thSkin.setAttribute("class", "th-swapi");
  thSkin.innerText = "Skin";
  let thEyeColor = document.createElement("th");
  thEyeColor.setAttribute("class", "th-swapi");
  thEyeColor.innerText = "Eye color";
  let thBirthYear = document.createElement("th");
  thBirthYear.setAttribute("class", "th-swapi");
  thBirthYear.innerText = "Birth year";
  let thGender = document.createElement("th");
  thGender.setAttribute("class", "th-swapi");
  thGender.innerText = "Gender";
  let thImg = document.createElement("th");
  thImg.setAttribute("class", "th-swapi");
  thImg.innerText = "Image";

  root.appendChild(divContainer);
  divContainer.appendChild(divRow);
  divRow.appendChild(tableSwapi);

  tableSwapi.appendChild(trForSwapiHeaders);

  trForSwapiHeaders.appendChild(thName);
  trForSwapiHeaders.appendChild(thHeight);
  trForSwapiHeaders.appendChild(thMass);
  trForSwapiHeaders.appendChild(thHair);
  trForSwapiHeaders.appendChild(thSkin);
  trForSwapiHeaders.appendChild(thEyeColor);
  trForSwapiHeaders.appendChild(thBirthYear);
  trForSwapiHeaders.appendChild(thGender);
  trForSwapiHeaders.appendChild(thImg);

  people.forEach((person) => {
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

    // Extract character ID from URL
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
const searchAllPages = () => {
  let people = [];
  ShowSpinner();
  fetchAllPages(SwapiURL)
    .then((allData) => {
      const searchBar = document.querySelector(".searchbar");

      if (searchBar.value) {
        allData.forEach((person) => {
          let name = person.name;
          if (name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            people.push(person);
          }
        });
        ShowPeople(people);
        HideSpinner();
        searchBar.value = "";
      } else {
        GetApiData(SwapiURL, CreateSwapiTable);
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

const SwapiURL = "https://swapi.dev/api/people";
const SwapiURL_END = "https://swapi.dev/api/people/?page=9";
let nextSwapiURL = SwapiURL;
let previousSwapiURL = null;
let pageIndex = 1;

GetApiData(SwapiURL, CreateSwapiTable);

const btnNext = document.querySelector(".next");
btnNext.addEventListener("click", () => {
  if (nextSwapiURL) {
    GetApiData(nextSwapiURL, CreateSwapiTable);
    pageIndex += 10;
  } else if (nextSwapiURL == null) {
    nextSwapiURL = SwapiURL;
    GetApiData(nextSwapiURL, CreateSwapiTable);
    pageIndex -= 80;
  }
});

const btnPrevious = document.querySelector(".previous");
btnPrevious.addEventListener("click", () => {
  if (previousSwapiURL) {
    GetApiData(previousSwapiURL, CreateSwapiTable);
    pageIndex -= 10;
  } else if (previousSwapiURL === null) {
    GetApiData(SwapiURL_END, CreateSwapiTable);
    pageIndex += 80;
  }
});

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", () => {
  searchAllPages();
});
