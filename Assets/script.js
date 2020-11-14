//DECLARE DOM ELEMENTS
// var cityEl = $(".indoorOutdoor")
//     console.log(indoorOutdoorEl)
// var zipCodeEl = $(".classZip")
//     console.log(zipCodeEl)

    
var cityInput = "Seattle" //change this after you have an input to grab from!

//DECLARE global variables
var breweriesArray=[]
var breweryIndex = 0;

//GET breweryStuff 
function getBreweries() {
    var queryURL="https://api.openbrewerydb.org/breweries?by_city="+cityInput
        console.log(queryURL)
    //AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
        console.log(response[breweryIndex].name);
    });



    //LOOP through the results to store each brewery as an object in our `breweriesArray`
    // for (let i = 0; i < 20; i++) {
    //     var element = response[i];
        
    // }


    // name
    // street
    // phone
    // website

}

getBreweries();