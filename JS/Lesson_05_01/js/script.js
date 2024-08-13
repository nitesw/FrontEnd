const GetApiData = (url, callback) => {
  const result = fetch(url)
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      callback(data);
    })
    .catch((e) => console.log("e", e));

  return result;
};

let root = document.getElementById("root");

let CreateCurrencyTable = (data) => {
  let divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container");

  let divRow = document.createElement("div");
  divRow.setAttribute("class", "row");

  let tableCurrency = document.createElement("table");
  tableCurrency.setAttribute("class", "table");

  let tableRowForHeaders = document.createElement("tr");

  let tableHeaderCurrency = document.createElement("th");
  tableHeaderCurrency.innerText = "Currency";
  tableHeaderCurrency.setAttribute("class", "th-currency");
  let tableHeaderBuy = document.createElement("th");
  tableHeaderBuy.innerText = "Buy";
  tableHeaderBuy.setAttribute("class", "th-currency");
  let tableHeaderSell = document.createElement("th");
  tableHeaderSell.innerText = "Sell";
  tableHeaderSell.setAttribute("class", "th-currency");

  root.appendChild(divContainer);
  divContainer.appendChild(divRow);
  divRow.appendChild(tableCurrency);

  tableCurrency.appendChild(tableRowForHeaders);

  tableRowForHeaders.appendChild(tableHeaderCurrency);
  tableRowForHeaders.appendChild(tableHeaderBuy);
  tableRowForHeaders.appendChild(tableHeaderSell);

  data.forEach((currency) => {
    let tableRowCurrency = document.createElement("tr");

    let rowThCurrency = document.createElement("th");
    rowThCurrency.setAttribute("scope", "row");
    rowThCurrency.setAttribute("class", "th-currency");
    rowThCurrency.innerText = currency.ccy;

    let rowTdBuy = document.createElement("td");
    rowTdBuy.setAttribute("class", "td-currency");
    rowTdBuy.innerText = currency.buy;

    let rowTdSell = document.createElement("td");
    rowTdSell.setAttribute("class", "td-currency");
    rowTdSell.innerText = currency.sale;

    tableRowCurrency.appendChild(rowThCurrency);
    tableRowCurrency.appendChild(rowTdBuy);
    tableRowCurrency.appendChild(rowTdSell);

    tableCurrency.appendChild(tableRowCurrency);
  });
};

let CreateSwapiTable = (data) => {
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

  data.results.forEach((person) => {
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

    trPerson.appendChild(rowTdName);
    trPerson.appendChild(rowTdHeight);
    trPerson.appendChild(rowTdMass);
    trPerson.appendChild(rowTdHair);
    trPerson.appendChild(rowTdSkin);
    trPerson.appendChild(rowTdEyeColor);
    trPerson.appendChild(rowTdBirthYear);
    trPerson.appendChild(rowTdGender);

    tableSwapi.appendChild(trPerson);
  });
};

const URL1 = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
GetApiData(URL1, CreateCurrencyTable);

const URL2 = "https://swapi.dev/api/people";
GetApiData(URL2, CreateSwapiTable);
