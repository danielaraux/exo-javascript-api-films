let apiKey = 'bde750cc5b249c3a5ee817159a7cd5e8'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGU3NTBjYzViMjQ5YzNhNWVlODE3MTU5YTdjZDVlOCIsIm5iZiI6MTc1MTk2MDYyNy43MzcsInN1YiI6IjY4NmNjYzMzOGRlNDdlOGE3ZTcwMzQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlANK5iLE1h71h226KV4dtTEUT4uLk8wOZSD5-SE-IE'
    }
};

// 

fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // Test de récupération du titre du film ok
        console.log(data.results[1].title)



        // Boucle for pour créer les cards
        for (let i = 0; i <= 19; i++) {
            document.getElementById("container-card").innerHTML +=
                `
           <a href="description.html" class="text-decoration-none">
           <div class="card"
                <div class="card" style="width: auto;">
                        <div>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.results[i].poster_path}" class="card-img-top" alt="affiche du film
                        </div>
        
                    <div class="card-body">
                        <h5 class="card-title"><b>${data.results[i].title}</b></h5>
                        <p class="card-text"><div>Date de sortie : ${data.results[i].release_date}</p>
                        <p class="card-text">Note moyenne : ${data.results[i].vote_average}</p>
                    </div>
                </div>
            </div></a>
            `
        }
    })




// Solution possible pour la description du film :
// Créer un autre fichier.js, ajouter la variable parse qu'on a mise en haut de notre fichier actuel
// const parsedUrl = new URL(window.location.href);
// console.log(parsedUrl.searchParams.get("id")); // "123"

// Mettre l'id dans l'url du fetch de l'autre fichier

// let id = parsedUrl.searchParams.get("id")





// onclick pour le apiKey, le i qui changera le film








// .catch(err => console.error(err))


// function showDetails(data) {
//     console.log(data)

// }



// poster de ballerina : "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg"
// id du film ballerina : 541671
