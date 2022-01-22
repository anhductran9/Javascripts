// load the sample weather JSON data
// build a grid of temps over the next 24 hours
// blue background in hours where percipitation possibility is higher than 70%

let uri = './darksky.json'; // Call JSON file
let req = new Request(uri, {method:'GET'}); // Request for that file
let container, df;

document.addEventListener('DOMContentLoaded', init); //Waiting for the DOMContentLoaded event for the browser to read the HTML
// Call the init method
function init(){ 
    container = document.getElementById('container'); // Find the things with ID container to create the grid
    df = new DocumentFragment(); // Use df to hold all of div (grid) before place things in them
    
    fetch(req) //Make a fetch request for the local Json file
    .then((response)=>{
        if(response.ok){ // Make sure it's ok
            return response.json(); // Extract the json file from the response
        }else{
            throw new Error('BAD HTTP');
        }
    }) // Pass on to the next step
    .then((json)=>{ // Set up the JSON Object
        //create the weather grid
        json.hourly.data.forEach((hour)=>{ // Loop through each object in json file
            //to show the temp
            let div = document.createElement('div'); // Create the div (or the grid in this situation) 
            div.classList.add('hour'); // Add hour to the div
            let timestamp = hour.time; // Take the time properties out of the hour object
            div.id = 'ts_' + timestamp.toString(); // Give ID to the time (can not give the ID by number so we need 'ts_' in it and 
                                                   // convert timestamp to String)
            let temp = parseInt(hour.temperature); // Extract integer temperature from the data
            div.textContent = temp.toString().concat('\u00B0'); // Print the temperature to the div
            div.title = hour.summary; //Mouseover the div to get the summary of the time
            
            //to show the time
            let span = document.createElement('span'); // Create a placeholder text
            let timmy = new Date(timestamp * 1000); // get the actually timestamp from the JSON data (multiply by 1000 because
                                                    // the time inside the JSON file are in milisecond)
            span.textContent = timmy.getHours().toString().concat(":00"); // Print the time into the div
            
            div.appendChild(span); //Span inside the div
            df.appendChild(div); //Div inside the df
        });
        container.appendChild(df); // Append the document fragments to the container
        
        //highlight the times when it will be raining
        json.hourly.data.filter((hour)=>{ // extract just the hour where precip > 0.5 from the json (so we use filter to avoid 
                                          // looping all of object like forEach)
            if(hour.precipProbability > 0.5){ 
                return true; // Just take the object with precip > 0.5
            }
            return false;
        }).map((hour)=>{ // Extract just the timestamp from those selected hour array that we've done above
            return hour.time;
        }).forEach((timestamp)=>{ // Use the forEach loop because the above thing is an array 
            let id = 'ts_'.concat(timestamp);
            document.getElementById(id).classList.add('precip'); // add precip to each one of timestamp above
        });
        
        //highest temp
        let highObj = json.hourly.data.reduce((accumulator, hour)=>{ // reduce entire array down to one thing (could be an array or even an object)
            if(hour.temperature > accumulator.temp){ // compare temperature that we loop through
                return {temp: hour.temperature, time: hour.time}; // Return new object
            }else{
                return accumulator; // Return original object
            }
        }, {temp:-100, time:1000}) 
        let id = 'ts_' + highObj.time; // Get the ID of the highest temp time
        document.getElementById(id).classList.add('hot'); // Add the CSS hot to the highest temp ID
    })
    .catch((err)=>{
        console.log( err.message );
    })
}