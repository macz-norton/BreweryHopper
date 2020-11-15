//DECLARE DOM ELEMENTS

// var cityInputEl = "Seattle" //change this after you have an input to grab from!
var cityInputEl = $("#cityName")
    console.log(cityInputEl)

//Elements of the main card
var mainCardEl = $(".mainCard")
    // console.log(mainCardEl)
var mainCardNameEl = $(".mainCardName")
    // console.log(mainCardNameEl)
var mainCardTypeEl = $(".mainCardType")
    // console.log(mainCardTypeEl)
var mainCardAddressEl = $(".mainCardAddress")
    // console.log(mainCardAddressEl)
var mainCardPhoneEl = $(".mainCardPhone")
    // console.log(mainCardPhoneEl) 
var mainCardWebsiteEl = $(".mainCardWebsite")

var searchButtonEl = $(".searchButton")
    console.log(searchButtonEl)
// var breweryCollectionEl = $(".collection")
//     console.log(breweryCollectionEl)  
var breweryCollectionEl = $("#resultsList")
    console.log(breweryCollectionEl)

//DECLARE global variables
var breweriesArray=[]
var breweryObj;
var currentBrewery=""



//GET breweryStuff 
function getBreweries(boop) {
    $(breweryCollectionEl).empty();
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
    $(breweryCollectionEl).empty();
//RENDER the `breweriesArray` to the `breweryCollectionEl` element
    for (let i = 0; i < breweriesArray.length; i++) {
        var brewery = breweriesArray[i].breweryName;
            // console.log(breweriesArray)
    $(breweryCollectionEl).append($("<p>").text(brewery).addClass("collection-item"));
    }


});
}

// getBreweries();
// console.log(breweriesArray)

//CLICK FUNCTIONALITY
searchButtonEl.on("click", function(event) {
        console.log(breweryCollectionEl)
    breweryCollectionEl.empty();
        console.log(breweryCollectionEl)
    event.preventDefault();
        console.log(this);
    
        console.log(breweryCollectionEl);
    
    var cityCapitalized = cityInputEl.val().trim();
        console.log(cityCapitalized)

getBreweries(cityCapitalized)
    // return
});
//RENDER main card
function renderMainCard(boop){
//EMPTY the mainCardEl of any previously generated elements
    $(mainCardEl).empty();

//APPEND the name to the `mainCardEl`
    mainCardEl.append(($("<p>")).text("Name: " + boop.breweryName).addClass("mainCardName"))

//APPEND the type to the `mainCardEl`
    mainCardEl.append(($("<p>")).text("Type: " + boop.breweryType).addClass("mainCardType"))    

//APPEND the address to the `mainCardEl`
    mainCardEl.append(($("<p>")).text("Address: " + boop.breweryStreet+ ", " + boop.breweryCity).addClass("mainCardAddress"))

//APPEND the phone to the `mainCardEl`
    mainCardEl.append(($("<p>")).text("Phone: " + boop.breweryPhone).addClass("mainCardPhone"))

//APPEND the website to the `mainCardEl`  
    mainCardEl.append(($("<a>")).text("Website: " + boop.breweryWebsite).addClass("mainCardWebsite"))


    // var APIkey = "AIzaSyCNMT79cyhTQf0GVQoNdOpOKcYsTL2jqdQ";
    // var latitude = boop.breweryLat;
    // var longitude = boop.breweryLon;

    // getMap(APIkey, latitude, longitude);

//     function getMap(APIkeyVar, latVar, lonVar) {
//         // var queryURL="https://www.google.com/maps/embed/v1/view?key=AIzaSyCNMT79cyhTQf0GVQoNdOpOKcYsTL2jqdQ&center=47.669159,-122.299126&zoom=18&maptype=satellite";
//         var queryURL="https://www.google.com/maps/embed/v1/view?key=" + APIkeyVar + "&center=" + latVar + "," + lonVar + "&zoom=18&maptype=satellite";
//             console.log(queryURL);

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .then(function(response) {
//             console.log(response);
//             $("iframe").attr("src", queryURL);

//         })
//     }

//     breweryLogo(boop.breweryWebsite);

//     function breweryLogo(url) {
//         console.log(url);
//         var queryURL="https://logo.clearbit.com/" + url;
//             console.log(queryURL);

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//         .then(function(response) {
//             console.log(response);
//             $("image").attr("src", queryURL);
//             $("image").attr("alt", "Brewery logo");

//         })

// }

}

// renderMainCard()


breweryCollectionEl.on("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    var breweryToBeRenderedName = $(event.target).text()
        console.log(breweryToBeRenderedName)
    var renderedBreweryObj;
        console.log(renderedBreweryObj)
        

    for (let i = 0; i < breweriesArray.length; i++) {
        var element = breweriesArray[i].breweryName;
            // console.log(element)
            // console.log(breweriesArray)
            // console.log(breweriesArray[i].breweryName)
            if(element==breweryToBeRenderedName){
                // console.log(element)
                // console.log("THIS WORKS")
                    
                renderedBreweryObj =  breweriesArray[i] 
                    // console.log(renderedBreweryObj)
                renderMainCard(renderedBreweryObj)
            
    }
    
}
});

