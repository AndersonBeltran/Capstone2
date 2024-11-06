const locationsArray = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "DC",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const parksLocationDropdown = document.querySelector("#parksLocationDropdown");

for (const park of locationsArray) {
  let option = document.createElement("option");
  option.value = park;
  option.innerText = park;

  parksLocationDropdown.appendChild(option);
}

function filterParksLocation() {
  let selectedpark = parksLocationDropdown.value;
  let locationsArray = nationalParksArray.filter((park) => park.State == selectedpark);
  parksTBody.innerHTML = "";

  for (const Parks of locationsArray) {
    let tr = document.createElement("tr");
    parksTBody.appendChild(tr);

    let td1 = document.createElement("td");
    td1.innerText = Parks.LocationName ? Parks.LocationName : "N/A";
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = Parks.Address ? Parks.Address : "N/A";
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = Parks.City ? Parks.City : "N/A";
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = Parks.State ? Parks.State : "N/A";
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerText = Parks.Phone ? Parks.Phone : "N/A";
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.innerText = Parks.ZipCode ? Parks.ZipCode : "N/A";
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    td7.innerText = Parks.Visit ? Parks.Visit : "N/A";
    tr.appendChild(td7);
  }
}

const parksDropdown = document.querySelector("#parksDropdown");

for (const park of parkTypesArray) {
  let option = document.createElement("option");
  option.value = park;
  option.innerText = park;

  parksDropdown.appendChild(option);
}

function filterParksType() {
  let selectedPark = parksDropdown.value;
  console.log(selectedPark);
  parksTBody.innerHTML = "";

  for (const Parks of nationalParksArray) {
    if (Parks.LocationName.includes(selectedPark)) {
      let tr = document.createElement("tr");
      parksTBody.appendChild(tr);

      let td1 = document.createElement("td");
      td1.innerText = Parks.LocationName ? Parks.LocationName : "N/A";
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      td2.innerText = Parks.Address ? Parks.Address : "N/A";
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      td3.innerText = Parks.City ? Parks.City : "N/A";
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      td4.innerText = Parks.State ? Parks.State : "N/A";
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      td5.innerText = Parks.Phone ? Parks.Phone : "N/A";
      tr.appendChild(td5);

      let td6 = document.createElement("td");
      td6.innerText = Parks.ZipCode ? Parks.ZipCode : "N/A";
      tr.appendChild(td6);

      let td7 = document.createElement("td");
      td7.innerText = Parks.Visit ? Parks.Visit : "N/A";
      tr.appendChild(td7);
    }
  }
}

// const parksLocationDropdown = document.querySelector("#parksLocationDropdown");
// const parksDropdown = document.querySelector("#parksDropdown");

const locationContainer = document.querySelector("#locationContainer");
const parkTypeContainer = document.querySelector("#parkTypeContainer");

function searchTypeChanged() {
  if (parksLocationDropdown.checked) {
    locationContainer.style.display = "block";
  } else {
    locationContainer.style.display = "none";
  }
  if (parksDropdown.checked) {
    parkTypeContainer.style.display = "block";
  } else {
    parkTypeContainer.style.display = "none";
  }
}

parksLocationDropdown.onchange = searchTypeChanged;
parksDropdown.onchange = searchTypeChanged;
searchTypeChanged();
