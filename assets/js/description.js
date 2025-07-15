const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGU3NTBjYzViMjQ5YzNhNWVlODE3MTU5YTdjZDVlOCIsIm5iZiI6MTc1MTk2MDYyNy43MzcsInN1YiI6IjY4NmNjYzMzOGRlNDdlOGE3ZTcwMzQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlANK5iLE1h71h226KV4dtTEUT4uLk8wOZSD5-SE-IE'
    }
};

const parsedUrl = new URL(window.location.href);  // On crée une url pour les films
let filmSearch = parsedUrl.searchParams.get("filmSearch") // On fais récupérer cette url à filSearch
let id = parsedUrl.searchParams.get("id") // On fais récupérer cette url à id


// Condition pour dire que si la recherche n'est pas nulle et est de type object, on va appeler notre fonction submitFilm, sinon on va appeler notre fonction showDataFilm pour montrer la description des films
if (filmSearch !== null || typeof filmSearch !== "object") {
    submitFilm()
} else {
    showDataFilm()
}


// Fonction de recherche de films
function submitFilm() {
    console.log(filmSearch)
    fetch(`https://api.themoviedb.org/3/search/movie?query=${filmSearch}&include_adult=false&language=fr-FR&page=1`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            // Condition pour afficher un message si nom du film pas existant
            if (data.results.length <= 0) {
                document.getElementById("container-card").innerHTML = "<b>Il n'y a pas de films de ce nom, veuillez recommencer et entrer un nom de film existant</b>"
            } else {

                for (let i = 0; i <= data.results.length; i++) {
                    // on stocke les id des films ici pour les mettre dans notre url
                    let idFilms = data.results[i]

                    document.getElementById("container-card").innerHTML +=
                        `
                    <a href="description.html?id=${idFilms.id}" class="text-decoration-none">
                        <div class="card"
                            <div class="card" style="width: 18rem;">
                        <div>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.results[i].poster_path}" style="width:18rem"  alt="affiche du film
                        </div>
        
                                <div class="card-body">
                                    <h5 class="card-title m-2"><b>${data.results[i].title}</b></h5>
                                    <p class="card-text m-2">Date de sortie : ${data.results[i].release_date}</p>
                                    <p class="card-text m-2">Note moyenne : ${data.results[i].vote_average}/10</p>
                                </div>
                            </div>
                        </div>
                    </a>
                `
                }
            }
        })
}


// Fonction pour la description des films
function showDataFilm() {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, options)
        .then(response => response.json())
        .then(insideFilm => {
            console.log(insideFilm)

            // Description du film avec image et synopsis
            document.getElementById("divcards").innerHTML += `
        <div><img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${insideFilm.poster_path}" alt="affiche du film" style="width:20rem" class="mt-4 mx-5"></div>
            <div class="px-4 my-4">
            <a class="lien-retour nav-link fs-5 active fw-bold" aria-current="page" href="index.html">Retour</a>
                <h1><b>${insideFilm.title}</b></h1>
                <div><span>Date de sortie : ${insideFilm.release_date}</span> • <span>Genre : ${insideFilm.genres[0].name}</span> • <span>Durée : ${insideFilm.runtime} min</span></div>
                <div>Note : ${insideFilm.vote_average}/10</div>
                <h4 class="my-3">Synopsis :</h4>
                <div>${insideFilm.overview}</div>
            </div>
        `
        })
        .catch(err => console.error(err));


    // MODIFIE : Photo anonyme pour ceux qui n'ont pas de photos
    //  Cards des acteurs du film
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=fr-fr`, options)
        .then(response => response.json())
        .then(actors => {
            console.log(actors)

            console.log(actors.cast[0].character)

            for (let i = 0; i < actors.cast.length; i++) {

                if (actors.cast[i].profile_path == null) {
                    document.getElementById("actors").innerHTML += `
                    <div class="card m-2" style="width: 10rem;">
               <img src="assets/img/anonphoto.png" class="card-img-top" alt="actors profile picture">
            
                <div class="card-body">
                    <h5 class="card-title"><b>${actors.cast[i].name}</b></h5>
                    <p class="card-text">${actors.cast[i].character}</p >
                </div >
            </div >`

                } else {
                    document.getElementById("actors").innerHTML += `
                    <div class="card m-2" style="width: 10rem;">
               <img src="https://image.tmdb.org/t/p/w500${actors.cast[i].profile_path}" class="card-img-top" alt="actors profile picture">
            
                <div class="card-body">
                    <h5 class="card-title"><b>${actors.cast[i].name}</b></h5>
                    <p class="card-text">${actors.cast[i].character}</p >
                </div >
            </div >`
                }
            }
        })
        .catch(err => console.error(err));
}
