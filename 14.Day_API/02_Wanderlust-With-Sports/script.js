// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = $("#venues");
const $sportsDiv = $("#sports");
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


//----------------------------------------------


// Foursquare API Info
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';


//----------------------------------------------


// // WEATHER API Info
const forecastUrl = 'http://api.weatherstack.com/current?access_key=';
const apiKey = "17b54315d6659d0f952b4960b9d11400"

//----------------------------------------------


// // SPORTS API Info
const sportsUrl = 'http://api.mediastack.com/v1/news?access_key=';
const apiKeySports = 'd46c4df5b4f0bef2bf857a2a3666a191';
let countryCode = "";


//----------------------------------------------


// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20201203`;

    console.log(urlToFetch)

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            countryCode = jsonResponse.response.geocode.cc;
            const venues = jsonResponse.response.groups[0].items;
            console.log(venues);
            createVenuesHTML(venues)
        } else {
            throw new Error('Request failed with Foursquare!');
        }
    } catch (error) {
        console.log(error.message);
    }
}

//----------------------------------------------

const getForecast = async () => {
    const city = $input.val();
    const urlToFetch = `${forecastUrl}${apiKey}&query=${city}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            createWeatherHTML(jsonResponse)

        } else {
            throw new Error('Request failed with Weather!');
        }
    } catch (error) {
        console.log(error.message);
    }
}

//----------------------------------------------

const getSports = async () => {

    const urlToFetch = `${sportsUrl}${apiKeySports}&limit=3&categories=sports&countries=${countryCode}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            createSportsHTML(jsonResponse)

        } else {
            throw new Error('Request failed with Sports News!');
        }
    } catch (error) {
        console.log(error.message);
    }
}

//---------------------------------------

$submit.click(() => {
    $venueDivs.empty();
    $weatherDiv.empty();
    $destination.empty();
    $sportsDiv.empty();
    $container.css("visibility", "visible");
    getForecast()
    getSports()
    getVenues()
    return false;
})