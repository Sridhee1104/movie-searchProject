const mainDiv = document.getElementById('results');
const input = document.getElementById('inp');
const button = document.getElementById('btn')
input.addEventListener('input',fetchData)
function fetchData(){
    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=c5b1cbfc`)
     .then(function(res){
        console.log(res);
    })
     .then(function(data){
        displayData(data.search)
    })
    .catch(function(err){console.log(err)})
};
function displayData(data){
    mainDiv.textContent="";
    data.forEach(function(m){
        const movie = document.createElement('div');
        movie.classList.add("movie");
        const image = document.createElement('img');
        image.src = m.Poster;
        image.alt = m.Title;
        const title = document.createElement('h2')
        title.textContent = m.Title;
        movie.append(image,title)
        mainDiv.appendChild(movie)

    })
}
// API-kye=  946666b4 https://omdbapi.com/?s=${input.value}&apikey=cd7cc151,d0c39f6
