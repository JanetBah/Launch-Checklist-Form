// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
 
      if (pilotNameInput.value ==="" || copilotNameInput.value ==="" || fuelLevel.value=== ""||cargoMass.value=== "") {
         
 
         alert("All fields are required!");
         
         
      } else{
         
 
          if(!isNaN(pilotNameInput.value)){
             
              alert("Enter pilot's name");
         }else{
            let pilotStatusID = document.getElementById('pilotStatus');
            pilotStatusID.innerHTML = `
              ${pilotNameInput.value} is ready to Launch.
            `;
            
         }
         
         if(!isNaN(copilotNameInput.value)){
            alert("Enter copilot's name");
          }else{
            let copilotStatusID = document.getElementById('copilotStatus');
            copilotStatusID.innerHTML =`
                ${copilotNameInput.value} is ready to Launch
               
            `;
          }
          if(isNaN(fuelLevel.value)){
             alert("Enter a number for Fuel Level");
          }else{ 
            document.getElementById('faultyItems').style.visibility = 'visible';
            if(fuelLevel.value < 10000){
                            
               let fuelLevelID = document.getElementById('fuelStatus');
                  fuelLevelID.innerHTML = `
                   Fuel level too low for launch
                  `;
              
                  
            }else{
               let fuelLevelID = document.getElementById('fuelStatus');
               fuelLevelID.innerHTML = `
                Fuel level is enough for launch
               `;
            
            }
          }
          if(isNaN(cargoMass.value)){
             alert("Enter a number for Cargo Mass");
          }else{
            document.getElementById('faultyItems').style.visibility = 'visible';
            if(cargoMass.value > 10000){
               
               let cargoMassID = document.getElementById('cargoStatus')
                  cargoMassID.innerHTML = `
                   Cargo mass too heavy for launch
   
                  `;
               
            }else{
               
               let cargoMassID = document.getElementById('cargoStatus')
               cargoMassID.innerHTML = `
                Cargo mass is good for launch

               `;
            }
          }
         
          if(fuelLevel.value < 10000 || cargoMass.value > 10000){            
            document.getElementById('launchStatus').style.color = 'red';
            let launchStatusDiv = document.getElementById('launchStatus');
                  launchStatusDiv.innerHTML = `
                  <h2> Shuttle is ready not for launch </h2>
                  
               `;
         }else if(fuelLevel.value >=10000 || cargoMass <= 10000){            
            document.getElementById('launchStatus').style.color = 'green';
            let launchStatusDiv = document.getElementById('launchStatus');
                  launchStatusDiv.innerHTML = `
                  <h2> Shuttle is ready  for launch </h2>
               `;                 
         }
      }

          
   }); 
         
     let url = 'https://handlers.education.launchcode.org/static/planets.json'
      fetch(url).then(function(response){
         response.json().then(function(data){
            let i = 5;
             let missionTargetDiv = document.getElementById('missionTarget');
                missionTargetDiv.innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${data[i].name}</li>
                   <li>Diameter: ${data[i].diameter}</li>
                   <li>Star: ${data[i].star}</li>
                   <li>Distance from Earth: ${data[i].distance}</li>
                   <li>Number of Moons: ${data[i].moons}</li>
                </ol>
                <img src="${data[i].image}">
                `;
         })
      });    
         
         
      

});






