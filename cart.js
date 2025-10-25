const snacks =['Piattos', 'Lumpia','Fries','Chicharon','Clover']
let counter = 0;

const btn = document.querySelector('#btn');
const container = document.querySelector('#container');
const ul = document.createElement('ul');
//console.log(btn);

btn.addEventListener('click', ()=>{
    
    const li = document.createElement('li');
    li.innerText = snacks[counter];
    ul.append(li);
    container.append(ul); 
    counter++;
        
});