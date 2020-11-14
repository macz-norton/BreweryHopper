//DECLARE DOM ELEMENTS
var cityEl = $(".indoorOutdoor")
    console.log(indoorOutdoorEl)
var zipCodeEl = $(".classZip")
    console.log(zipCodeEl)


    //GET breweryStuff 
function getPlants() {

    var callType="plantings"
    // var apiKeyMNorton = "GBqEm499B1LqBOuWTqrc3Uu4SSONPL2c5C9UU_fm_VY"
    var queryURL="https://growstuff.org/api/v1/"+callType
        console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // .then(function(response) {
    //     console.log(response)
    // });
}
getPlants();