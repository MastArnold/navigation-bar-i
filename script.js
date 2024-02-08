const a_nodes = document.querySelectorAll('ul li a'); //liste des balises a
const li_nodes = document.querySelectorAll('ul li'); //liste des balises li
const boxActive = document.querySelector('.box-active'); //l'icon overlay

a_nodes.forEach((a, key) => {
    //on ajoute un évènement de focus à chaque balise a
    a.addEventListener('focus', () => {
        li_nodes.forEach(li => li.classList.remove('active')); //ici on retire la classe active à la balise qui l'a. j'essaie de retirer la classe active à toutes les balises li mais ce n'est pas grave (source=www.tkt.com)
        li_nodes[key].classList.add('active'); //on donne la class active à la balise qui a le focus
        const deff = (li_nodes[key].clientWidth -  boxActive.clientWidth) / 2; //on fait la différence entre la largeur de la balise li dont l'enfant a à le focus et la largeur de l'icon overlay puis on le divise par deux. ça permet de trouver le position idéal pour que l'overlay soit pile au milieu des icones peut importe leur taille
        boxActive.style.transform = `translate(${+li_nodes[key].offsetLeft + deff}px, 0)`; //on modifie la propriété tranform de l'overlay
    });
});

//on ajouter un event resize pour modifier la position de l'overlay si la fenêtre change de taille
//on fait la même chose que dans l'évènement focus
window.addEventListener('resize', () => {
    li_nodes.forEach((li, key) => {
        if(li.classList.contains('active')) {
            const deff = (li_nodes[0].clientWidth -  boxActive.clientWidth) / 2;
            boxActive.style.transform = `translate(${+li_nodes[key].offsetLeft + deff}px, 0)`;
        }
    });
});

//initialisation de la position de l'overlay au chargement
const deff = (li_nodes[0].clientWidth -  boxActive.clientWidth) / 2;
boxActive.style.transform = `translate(${+li_nodes[0].offsetLeft + deff}px, 0)`;