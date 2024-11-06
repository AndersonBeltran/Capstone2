const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];

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
