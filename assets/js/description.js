const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGU3NTBjYzViMjQ5YzNhNWVlODE3MTU5YTdjZDVlOCIsIm5iZiI6MTc1MTk2MDYyNy43MzcsInN1YiI6IjY4NmNjYzMzOGRlNDdlOGE3ZTcwMzQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlANK5iLE1h71h226KV4dtTEUT4uLk8wOZSD5-SE-IE'
    }
};


// const parsedUrl = new URL(window.location.href);

// let id = parsedUrl.searchParams.get("id")

let id = 1374534


fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR`, options)
    .then(response => response.json())
    .then(insideFilm => {
        console.log(insideFilm)

        console.log(insideFilm.genres[0].name)

        // actuellement on est dans data.result[1] dans l'arbo du film directement


        // for (i = 0; i < insideFilm.genres.length; i++) {
        //     console.log(insideFilm.genres[i].name)
        //     let d = insideFilm.genres[i].name
        //     console.log(d)
        // }



        // Affiche du film
        document.getElementById("divcards").innerHTML += `
        <div><img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${insideFilm.poster_path}" alt="affiche du film" style="width:20rem" class="my-4 mx-5"></div>
            <div class="px-4 my-4">
                <h1><b>${insideFilm.title}</b></h1>
                <div><span>Date de sortie : ${insideFilm.release_date}</span> • <span>Genre : ${insideFilm.genres[0].name}</span> • <span>Durée : ${insideFilm.runtime} min</span></div>
                <div>Note : ${insideFilm.vote_average}/10</div>
                <h4 class="my-3">Synopsis :</h4>
                <div>${insideFilm.overview}</div>
            </div>
        `
    })
    .catch(err => console.error(err));



//  Cards des acteurs

fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=fr-fr`, options)
    .then(response => response.json())
    .then(actors => {
        console.log(actors)

        console.log(actors.cast[0].character)


        for (let i = 0; i < actors.cast.length; i++) {

            document.getElementById("actors").innerHTML +=
                `
                <div class="card m-2" style="width: 10rem;">
                <img src="https://image.tmdb.org/t/p/w500${actors.cast[i].profile_path}" class="card-img-top" alt="actors profile picture">
                
                <div class="card-body">
                    <h5 class="card-title"><b>${actors.cast[i].name}</b></h5>
                    <p class="card-text">${actors.cast[i].character}</p >
                </div >
            </div >
                `

        }
    })
    .catch(err => console.error(err));