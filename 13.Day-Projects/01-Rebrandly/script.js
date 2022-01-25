// Information to reach API
const apiKey = '20fc11dda0454eea8df57b7efe987802';
const url = 'https://api.rebrandly.com/v1/links';

// page elements
const inputField = document.getElementById("input")
const shortenButton = document.getElementById("shorten")

const shortenUrl = () => {

    const urlToShorten = inputField.value;

    const data = JSON.stringify({destination: urlToShorten});

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    }

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data)
}

shortenButton.addEventListener("click", displayShortUrl)