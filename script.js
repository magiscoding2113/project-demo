 var requestUrl = "http://www.omdbapi.com/?t=superbad&apikey=a3c68b61"
fetch(requestUrl)
.then(function (response) {
return response.json();
})
.then(function (data) {
 console.log(data);
 //console.log(data.Poster)
 //let imgElem = document.createElement('img')
 //console.log(imgElem)
 //imgElem.setAttribute('src', data.Poster)
 //document.getElementById('poster').append(imgElem)
})

//getApi();
















 


//**superbad fetch works ok**function getApi() {
 //var requestUrl = (" http://www.omdbapi.com/?t=super+bad&apikey=a3c68b61")
//fetch(requestUrl)
//.then(function (response) {
//return response.json();
//})
//.then(function (data) {
 //console.log(data);
 //console.log(data.Poster)
 //let imgElem = document.createElement('img')
 //console.log(imgElem)
 //imgElem.setAttribute('src', data.Poster)
 //document.getElementById('poster').append(imgElem)
//})
//}
//getApi();







//**this code worked to display eurovision **image****** */
//function getApi() {
 //var requestUrl = ("http://www.omdbapi.com/?t=eurovision&apikey=a3c68b61")
//fetch(requestUrl)
//.then(function (response) {
//return response.json();
//})
//.then(function (data) {
 //console.log(data);
 //console.log(data.Poster)
 //let imgElem = document.createElement('img')
 //console.log(imgElem)
 //imgElem.setAttribute('src', data.Poster)
 //document.getElementById('poster').append(imgElem)
//})
//}
//getApi();

///**this code worked to display img */





































