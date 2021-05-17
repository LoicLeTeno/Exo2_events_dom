// ### 1
let h1 = document.querySelector('h1');

function h1_color() {
    h1.style.backgroundColor = "red";
    h1.style.color = "white"
};

h1.addEventListener('dblclick', () => {
    h1_color();
});


// ### 2
let h3 = document.querySelector('h3');

function h3_taille() {
    h3.innerText = h3.innerText.slice(0, -1);
}

h3.addEventListener('mouseover', () => {
    h3_taille()
});


// ### 3
let p = document.querySelector('p');

function p_color() {
    p.style.backgroundColor = "blue";
    p.style.color = "gold";
};

function p_remove() {
    p.style.backgroundColor = "white";
    p.style.color = "black";
}

p.addEventListener('click', () => {
    if (p.style.color == "gold") {
        p_remove();

    } else {
        p_color();
    }
});