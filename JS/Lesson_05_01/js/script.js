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

let root = document.getElementById("root");
root.setAttribute("class", "container");

let CreateCurrencyTable = (url) => {
  const apiData = GetApiData(url);
  apiData.then((data) => console.log(data));

  let divRow = document.createElement("div");
  divRow.setAttribute("class", "row");

  let divCurrency = document.createElement("div");
  divCurrency.setAttribute("class", "currency");

  let tableCurrency = document.createElement("table");
  tableCurrency.setAttribute("class", "table");

  let tableRowForHeaders = document.createElement("tr");
  tableRowForHeaders.setAttribute("class", "tr-currency");

  let tableHeaderCurrency = document.createElement("th");
  tableHeaderCurrency.innerText = "Currency";
  tableHeaderCurrency.setAttribute("class", "th-currency");
  let tableHeaderBuy = document.createElement("th");
  tableHeaderBuy.innerText = "Buy";
  tableHeaderBuy.setAttribute("class", "th-currency");
  let tableHeaderSell = document.createElement("th");
  tableHeaderSell.innerText = "Sell";
  tableHeaderSell.setAttribute("class", "th-currency");

  root.appendChild(divRow);
  divRow.appendChild(tableCurrency);
  tableCurrency.appendChild(tableRowForHeaders);
  tableRowForHeaders.appendChild(tableHeaderCurrency);
  tableRowForHeaders.appendChild(tableHeaderBuy);
  tableRowForHeaders.appendChild(tableHeaderSell);

  apiData.then((data) =>
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
    })
  );
};

const URL1 = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
CreateCurrencyTable(URL1);
