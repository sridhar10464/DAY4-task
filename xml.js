

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();


xhr.responseType = "json"; //data format

xhr.onload = function displayResult() {
    const countries = xhr.response;
    console.log(countries);
    console.log("No. of countries: ", countries.length);
    
    for (let index in countries ) {
        // console.log(countries[index].name.common)
        console.log(+index + 1, countries[index].name .common);
    }

    
       
};
