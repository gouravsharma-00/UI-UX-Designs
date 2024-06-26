// JavaScript

let outText = document.getElementById('api');

// URL API
url = "https://api.agify.io?name=jhon";

const API = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
};

