//select all product
//log all product

const main = document.querySelector('#main');
//console.log(main);

const section = main.firstElementChild;


const products = section.lastElementChild.children;

console.log(products);

//Get cart step 3
const cart = main
    .firstElementChild
    .nextElementSibling
    .lastElementChild;

console.log(cart);


//convert html to array step 2
const productArray = Array.from(products);

productArray.forEach((p) =>{
    p.addEventListener('click', () =>{

        //step4
        const h5 = document.createElement('h5');
        h5.innerText = p.firstElementChild.innerText;

        //step 5
        cart.appendChild(p);
    })
});
