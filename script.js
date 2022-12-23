var search = document.getElementById("Btn");
var userInput = document.getElementById("Search");
var responseText = document.getElementById("response-text");
var apiKey = "5710f62c49671333aeca54b513c90fc6";
console.log(search);
search.addEventListener("click", function () {
  var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${userInput.value}&appid=${apiKey}`;
  getApi(requestUrl);
});



function getApi(requestUrl) {
  fetch(requestUrl).then(function (response) {
    
    return response.json();
  }).then(function(data){
    console.log(data)
    var secondRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=${apiKey}`;
    fetch(secondRequestUrl).then(function (response) {
    
        return response.json();
      }).then(function(data){
        console.log(data)})
});
}
