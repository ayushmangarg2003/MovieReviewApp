const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb1d188726a4abb567a7e567b8d07197&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=eb1d188726a4abb567a7e567b8d07197&query=";

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.classList.add('card');

            const image = document.createElement('img');
            image.classList.add('thumbnail');
            image.setAttribute('id' , 'image');

            const title = document.createElement('h3');

            title.innerHTML = `${element.title}`;
            image.src = IMGPATH + element.poster_path 
            
            div_card.appendChild(image);
            div_card.appendChild(title);
            main.appendChild(div_card)
        });
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;

    if(searchItem){
        returnMovies(SEARCHAPI + searchItem) ;
        // search.value = '';
    }
})