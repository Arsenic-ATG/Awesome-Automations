const list = document.getElementById("list");

fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(data => data.map(country => {
    const option = document.createElement("option");
    option.textContent = country.name;
    option.value = country.alpha2Code;
    list.appendChild(option);
})).catch(err => console.log(err))