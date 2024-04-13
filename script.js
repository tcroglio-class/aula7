function darkMode() {

    /* dark mode all */
    document.documentElement.style.setProperty('--background-primary-color', 'rgb(65, 63, 63)');  /* cinza escuro background */
    document.documentElement.style.setProperty('--font-primary-color', 'white'); /* branco do texto */
    document.documentElement.style.setProperty('--font-secundary-color', 'gold'); /* dourado dos títulos */

    /* dark mode header and footer */
    document.documentElement.style.setProperty('--background-both-primary-color', '#232222'); /* cinza escuro do header e do footer de baixo */
    document.documentElement.style.setProperty('--background-both-secundary-color', 'rgb(50, 50, 50)'); /* cinza mais claro do footer de cima */
    document.documentElement.style.setProperty('--font-both-primary-color', 'white'); /* branco do texto */
}

    
function lightMode() {

    /* white mode all */
    document.documentElement.style.setProperty('--background-primary-color', 'white');
    document.documentElement.style.setProperty('--font-primary-color', 'black');
    document.documentElement.style.setProperty('--font-secundary-color', 'black');

    /* white mode all */
    document.documentElement.style.setProperty('--background-both-primary-color', 'grey');
    document.documentElement.style.setProperty('--background-both-secundary-color', 'lightgrey');
    document.documentElement.style.setProperty('--font-both-primary-color', 'black');
}