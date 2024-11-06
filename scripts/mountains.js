"use strict";

const mountainSelect = document.getElementById("mountainSelect");
mountainsArray.filter((mountain, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = mountain.name;
  mountainSelect.appendChild(option);
});

function displayMountainInfo() {
  const selectedMountain = mountainsArray[parseInt(mountainSelect.value)];
  document.getElementById("mountainImage").src = "images/" + selectedMountain.img;
  document.getElementById("mountainName").textContent = selectedMountain.name;
  document.getElementById("effort").textContent = "Eeffort: "  + selectedMountain.effort;
  document.getElementById("description").textContent = selectedMountain.desc;
  document.getElementById("elevation").textContent =  "Elevation: "  + selectedMountain.elevation;
}






