//DECLARE DOM ELEMENTS

var cityInputEl = $("#cityName")
    console.log(cityInputEl);
var breweryInfoHeaderEl = $("#breweryInfo");
    console.log(breweryInfoHeaderEl);

//Elements of the main card
var mainCardEl = $(".mainCard");
    // console.log(mainCardEl);
var mainCardNameEl = $(".mainCardName");
    // console.log(mainCardNameEl);
var mainCardTypeEl = $(".mainCardType");
    // console.log(mainCardTypeEl);
var mainCardAddressEl = $(".mainCardAddress");
    // console.log(mainCardAddressEl);
var mainCardPhoneEl = $(".mainCardPhone");
    // console.log(mainCardPhoneEl);
var mainCardWebsiteEl = $(".mainCardWebsite")

var searchButtonEl = $(".searchButton");
    console.log(searchButtonEl);
// var breweryCollectionEl = $(".collection");
//     console.log(breweryCollectionEl)  ;
var breweryCollectionEl = $("#resultsList");
    console.log(breweryCollectionEl);

//DECLARE global variables
var breweriesArray=[];
var breweryObj;
var currentBrewery="";
var currentSearch=[]



//GET breweryStuff 
function getBreweries(boop) {
    //Clear the currentSearch of the previous search
    currentSearch=[]
        console.log(currentSearch)
    console.log(breweryCollectionEl)
    
    var queryURL="https://api.openbrewerydb.org/breweries?by_city="+boop
        console.log(queryURL)
    //AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
        // how many results are returned?
        console.log(response.length)
        // console.log($(response).children())
// LOOP through the results to store each brewery as an object in our `breweriesArray`
    for (let i = 0; i < response.length; i++) {
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
        currentSearch.push(response[i].name)
    };
    console.log(currentSearch)
    $(breweryCollectionEl).empty();
    
//PICK OPTION 1 OR OPTION 2 BELOW
//OPTION 1 RENDER the `breweriesArray` to the `breweryCollectionEl` element
    // for (let i = 0; i < breweriesArray.length; i++) {
    //     var brewery = breweriesArray[i].breweryName;
    //         // console.log(breweriesArray)
    // $(breweryCollectionEl).append($("<p>").text(brewery).addClass("collection-item"));
    // }

//OPTION 2 RENDER the `currentSearch` to the `breweryCollectionEl` element
    for (let i = 0; i < currentSearch.length; i++) {
        var brewery = currentSearch[i];
            // console.log(breweriesArray)
    $(breweryCollectionEl).append($("<p>").text(brewery).addClass("collection-item"));
    }

    });
}

//SAVE the last search to local


//CLICK FUNCTIONALITY
searchButtonEl.on("click", function(event) {
    event.preventDefault();
        console.log(this);
        console.log(breweryCollectionEl);
    
    var cityCapitalized = cityInputEl.val().trim();
        console.log(cityCapitalized)

getBreweries(cityCapitalized)
    
});

//DECLARE the function to RENDER the main card
function renderMainCard(boop){
//EMPTY the mainCardEl of any previously generated elements
    $(mainCardEl).empty();
    $(breweryInfoHeaderEl).removeData();
//APPEND the name to the `mainCardEl`

    // mainCardEl.append(($("<p>")).text("Name: " + boop.breweryName).addClass("mainCardName"))

    $(breweryInfoHeaderEl).text(boop.breweryName)

//APPEND the type to the `mainCardEl`
    mainCardEl.append(($("<p>")).text("Brewery Type: " + boop.breweryType).addClass("mainCardType"))    

//APPEND the address to the `mainCardEl` IF there is an address available
if(boop.breweryStreet == ""){
    mainCardEl.append(($("<p>")).text("Address: Unavailable").addClass("mainCardAddress"))
}else{
    mainCardEl.append(($("<p>")).text("Address: " + boop.breweryStreet+ ", " + boop.breweryCity).addClass("mainCardAddress"))
}
//APPEND the phone to the `mainCardEl` IF there is a phone available
if(boop.breweryPhone == ""){
    mainCardEl.append(($("<p>")).text("Phone: Unavailable").addClass("mainCardPhone"))
}else{
    mainCardEl.append(($("<p>")).text("Phone: " + boop.breweryPhone).addClass("mainCardPhone"))
}

//APPEND the website to the `mainCardEl` IF there is a website available 
    if(boop.breweryWebsite == ""){
        mainCardEl.append(($("<a>")).text("Website: Unavailable").addClass("mainCardWebsite")) 
    }else{
        mainCardEl.append(($("<a>")).text("Website: " + boop.breweryWebsite).addClass("mainCardWebsite m5"))    
    }



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

