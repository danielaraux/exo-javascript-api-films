let apiKey = 'bde750cc5b249c3a5ee817159a7cd5e8'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGU3NTBjYzViMjQ5YzNhNWVlODE3MTU5YTdjZDVlOCIsIm5iZiI6MTc1MTk2MDYyNy43MzcsInN1YiI6IjY4NmNjYzMzOGRlNDdlOGE3ZTcwMzQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlANK5iLE1h71h226KV4dtTEUT4uLk8wOZSD5-SE-IE'
    }
};


fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // Test de récupération du titre du film ok
        console.log(data.results[1].title)

        // Test de récupération du chemin du poster ok
        console.log(data.results[1].poster_path)

        // Ajout du titre : ok ça fonctionne
        document.getElementById('filmTitle').innerHTML = `<div>${data.results[1].title}</div>`

    })

// .catch(err => console.error(err))


// function showDetails(data) {
//     console.log(data)

// }



// poster de ballerina : "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg"
// id du film ballerina : 541671
