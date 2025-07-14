const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGU3NTBjYzViMjQ5YzNhNWVlODE3MTU5YTdjZDVlOCIsIm5iZiI6MTc1MTk2MDYyNy43MzcsInN1YiI6IjY4NmNjYzMzOGRlNDdlOGE3ZTcwMzQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlANK5iLE1h71h226KV4dtTEUT4uLk8wOZSD5-SE-IE'
    }
};


// fetch pour les cards de l'accueil
fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // Test de récupération du titre du film ok
        console.log(data.results[1].title)



        // Boucle for pour créer les cards et stocker les id des films
        for (let i = 0; i <= 19; i++) {

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
                     <p class="card-text m-2">Note moyenne : ${data.results[i].vote_average}</p>
                 </div>
             </div>
         </div></a>
         `
        }
    })
