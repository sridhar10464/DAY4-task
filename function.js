// How to compare the two JSON have the same properties without order?

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

if (obj1String.split(" ").sort().join(" ") === obj2String.split(" ").sort().join(" ")) {
    console.log("Both JSON objects are equal");
} else {
    console.log("JSON objects are not equal");
}


// Use the rest countries API URL https://restcountries.com/v3.1/all
// and display all the country in the console

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            console.log(`${country.name.common}: ${country.flags[0]}`);
        });
    })
    .catch(error => console.log("Error:", error));
    
// Use the same restcountries and print all countries names, regions,
// sub-region and populations

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const name = country.name.common;
            const region = country.region;
            const subRegion = country.subregion;
            const population = country.population;
            console.log(`${name} - ${region} - ${subRegion} - ${population}`);
        });
    })
    .catch(error => console.error(error));