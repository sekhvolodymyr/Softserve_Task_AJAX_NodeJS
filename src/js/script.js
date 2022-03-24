'use strict';

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    async function getResponse() {
        let response = await fetch('http://localhost:8080/')
        let content = await response.json();
        let list = document.querySelector('.wrapper');
        let key;
    
        for(key in content) {
            list.innerHTML += `
                <h1>User id: ${content[key].id}</h1>
                <p>Name: ${content[key].first_name}</p>
                <p>Lastname: ${content[key].last_name}</p>
                <p>Email: ${content[key].email}</p>
                <img src="${content[key].photo}" width="300">
            `
        }
    }
    getResponse();
})