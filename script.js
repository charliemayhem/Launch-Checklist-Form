// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      

      /*if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.setAttribute("style", "color: red");      
      }

      if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Invalid entry in field!");
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.setAttribute("style", "color: red");
      }

      document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotName.value + " is ready";
      document.getElementById("copilotStatus").innerHTML = "Copilot " + copilotName.value + " is ready";*/

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.setAttribute("style", "color: red");      
      }

      if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Invalid entry in field!");
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.setAttribute("style", "color: red");
      }

      document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotName.value + " is ready";
      document.getElementById("copilotStatus").innerHTML = "Copilot " + copilotName.value + " is ready";

      if (pilotName.value !== "" && isNaN(pilotName.value) && copilotName.value !=="" && isNaN(copilotName.value)) {
         
         if (fuelLevel.value >= 10000 && fuelLevel.value !== ""){
            faultyItems.setAttribute("style", "visibility: visible");
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.setAttribute("style", "color: green");
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         }

         if(cargoMass.value <= 10000 && cargoMass.value !== ""){
            faultyItems.setAttribute("style", "visibility: visible");
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.setAttribute("style", "color: green");
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }
      } 

      if (fuelLevel.value < 10000){
         faultyItems.setAttribute("style", "visibility: visible");
         fuelStatus.innerHTML = "Not enough fuel for the journey!";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.setAttribute("style", "color: red");
      }

      if (cargoMass.value > 10000){
         faultyItems.setAttribute("style", "visibility: visible");
         cargoStatus.innerHTML = "There is too much mass for take-off!";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.setAttribute("style", "color: red");
      }

      



   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               response.json().then( function(json) {
                  const div = document.getElementById("missionTarget");
                  let dest = json[Math.floor(Math.random() * json.length)];
                  // Add HTML that includes the JSON data
                  div.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${dest.name}</li>
                     <li>Diameter: ${dest.diameter}</li>
                     <li>Star: ${dest.star}</li>
                     <li>Distance from Earth: ${dest.distance}</li>
                     <li>Number of Moons: ${dest.moons}</li>
                  </ol>
                  <img src="${dest.image}">
                  `;
               });
            });

});
