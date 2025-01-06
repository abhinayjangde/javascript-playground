

const url = 'https://api.freeapi.app/api/v1/public/randomusers';
const options = { method: 'GET', headers: { accept: 'application/json' } };


// (async () => {
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         console.log(data.data);
//     } catch (error) {
//         console.error(error);
//     }
// })();

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });