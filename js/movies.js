


//glitch url
const G_Url = 'https://vivid-flawless-almandine.glitch.me/movies';

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };
fetch(G_Url)
    .then((response) => response.json())
    .then((json) => console.log(json));

//
// fetch("")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.error(error))





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
getRandomInt(400);



const addedMovie = {

    name: 'Halloween',
    rating: 4,
    comments: "best slasher movie"
};
const url = 'https://codeup-json-server.glitch.me/movies/';//user object selection they want to delete

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
};
fetch(url)
    // .then( response => console.log(response) ) /* review was created successfully */
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch( error => console.error(error) ); /* handle errors */

// need userinput whenever they want to add a movies
// user needs a ratting and a title
//only display objects that have a title and a ratting
//need an event listener when the user submits the form
//needs to be a asyncronus operation, and not reload the entire page




//when user deletes their object by selecting id
// const url = ' https://codeup-json-server.glitch.me/movies';//user object selection they want to delete

// fetch(url,{
//     method: 'DELETE'
// }).then(res => res.json()).then(data => console.log(data))
//


// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.error(error))


fetch(url,{
    method: 'DELETE'
}).then(res => res.json()).then(data => console.log(data))



fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(error => console.error(error))


fetch(url,{
    method: 'DELETE'
}).then(res => res.json()).then(data => console.log(data))




// const url = ' https://codeup-json-server.glitch.me/movies';
// const options = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };
// fetch(url, options)
//
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.error(error))
//
//

//
// fetch(url).then(res => res.json()).then(function(res){
//     myDiv.innerHTML = `<div>
//         <h2>${res[0]}</h2>
//
//     </div>`
// })


