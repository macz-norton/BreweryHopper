//DECLARE DOM ELEMENTS

// var cityInputEl = "Seattle" //change this after you have an input to grab from!
var cityInputEl = $("#cityName")
    console.log(cityInputEl)

var searchButtonEl = $(".searchButton")
    console.log(searchButtonEl)
var breweryCollectionEl = $(".collection")
    console.log(breweryCollectionEl)  



//DECLARE global variables
var breweriesArray=[]
var breweryObj;
var currentBrewery = " ";


//GET breweryStuff 
function getBreweries(boop) {
    var queryURL="https://api.openbrewerydb.org/breweries?by_city="+boop
        console.log(queryURL)
    //AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)

    // LOOP through the results to store each brewery as an object in our `breweriesArray`
    for (let i = 0; i < 10; i++) {
        breweryObj={
            breweryName: response[i].name,
            breweryStreet: response[i].street,
            breweryPhone:response[i].phone,
            breweryWebsite:response[i].website_url,
            breweryType:response[i].brewery_type,
            breweryLat:response[i].latitude,
            breweryLon:response[i].longitude,
            breweryCity:response[i].city,   
        }
        breweriesArray.push(breweryObj)
    };

            for (let i = 0; i < breweriesArray.length; i++) {
                var brewery = breweriesArray[i].breweryName;
                    console.log(breweriesArray)
                $(breweryCollectionEl).append($("<p>").text(brewery).addClass("collection-item"));
            
            }



            

});
}
getBreweries();
console.log(breweriesArray)

//CLICK FUNCTIONALITY
searchButtonEl.on("click", function(event) {
    event.preventDefault();
    console.log(this);
    
    var cityCapitalized = cityInputEl.val().trim();
        console.log(cityCapitalized)

getBreweries(cityCapitalized)
    // return
});


<<<<<<< HEAD
=======

>>>>>>> 2b9549e37dd1e1c4b9a4232cd117460afa3709b3
var APIkey = "AIzaSyCNMT79cyhTQf0GVQoNdOpOKcYsTL2jqdQ";

// Remove lat and long when pulled in from other ajax function
var latitude = 47.669087;
var longitude = -122.299383;

function getMap(APIkey, latitude, longitude) {
    // var queryURL="https://www.google.com/maps/embed/v1/view?key=AIzaSyCNMT79cyhTQf0GVQoNdOpOKcYsTL2jqdQ&center=47.669087,-122.299383&zoom=18&maptype=satellite";
    var queryURL="https://www.google.com/maps/embed/v1/place?key=" + APIkey + "&center=" + latitude + "," + longitude + "&zoom=18&maptype=satellite";
        console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("iframe").attr("src", queryURL);

    })
}

function breweryLogo(website_url) {
    var queryURL="https://logo.clearbit.com/" + website_url;
        console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("image").attr("src", queryURL);
        $("image").attr("alt", "Brewery logo");

    })

}
