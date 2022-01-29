// Page Elements
const inputField = document.getElementById('city');
const submitBtn = document.getElementById('button');

// Foursquare API Info
// const clientId = '3L12FCDQ0FUV31RKKHQMXSZNI4MEL4G3QWKHDKHU04S0X3FX';
// const clientSecret = '1ER0LOHHRHHEJJLM5NWIUR02HKI3RVDRT5DRB4ZN43TXURYD';

const clientId = '1FYL3UDSA4FEATQF0GZJJON1TCPWVYCK1QISOZPOYZG1IBG5';
const clientSecret = '4HULZXBJV0H1P3RKYBRH5IPFQRP44FKGDWUILLYTML4QXA4A';


const url = "https://api.foursquare.com/v2/venues/explore?near="
// const url = "https://api.foursquare.com/v3/places/search"


// // WEATHER API Info
const weatherUrl = 'http://api.weatherstack.com/current?access_key='
const apiKey = "17b54315d6659d0f952b4960b9d11400"


// Add AJAX functions here:

// const getVenues = async () => {

//     const city = inputField.value
//     const urlToFetch = url+"istanbul"+"&limit=8&client_id="+clientId+"&client_secret="+clientSecret+"&v=20201203"

//     try {
//         const response = await fetch(urlToFetch)
//         console.log(response)
//         if (response.ok) {
//             const json = await response.json()
//             console.log(json)
//         }


//     } catch (error) {
//         console.log(error)
//     }


//     // const options = {
//     //     method: 'GET',
//     //     headers: {
//     //         Accept: 'application/json',
//     //         Authorization: '3L12FCDQ0FUV31RKKHQMXSZNI4MEL4G3QWKHDKHU04S0X3FX'
//     //     }
//     // };

//     // fetch('https://api.foursquare.com/v3/places/search', options)
//     //     .then(response => response.json())
//     //     .then(response => console.log(response))
//     //     .catch(err => console.error(err));

// }

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getVenues = async () => {
    const city = inputField.value;
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20201203`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            countryCode = jsonResponse.response.geocode.cc;
            const venues = jsonResponse.response.groups[0].items;
            console.log(venues);
            return venues;
        } else {
            throw new Error('Request failed with Foursquare!');
        }
    } catch (error) {
        console.log(error.message);
    }
}



    


const getForecast = async () => {
    const city = inputField.value;
    const urlToFetch = weatherUrl+apiKey+"&query="+"ankara"

    try {

        const response = await fetch(urlToFetch)
        if (response.ok) {
            const json = await response.json()
            console.log(json)
            createWeatherHTML(json)
        }
    } catch (error) {
        console.log(error)
        
    }


}
getForecast()




// submitBtn.addEventListener("click", async function name() {
//     await getForecast()
//     await getVenues()

// })



// Execute function