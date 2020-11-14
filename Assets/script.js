//DECLARE DOM ELEMENTS
// var cityEl = $(".indoorOutdoor")
//     console.log(indoorOutdoorEl)
// var zipCodeEl = $(".classZip")
//     console.log(zipCodeEl)

    
var cityInput = "Seattle" //change this after you have an input to grab from!

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
    });
}
getBreweries();