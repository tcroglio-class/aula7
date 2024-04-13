function darkMode() {

    /* dark mode all */
    document.documentElement.style.setProperty('--background-primary-color', 'rgb(65, 63, 63)');
    document.documentElement.style.setProperty('--font-primary-color', 'white');
    document.documentElement.style.setProperty('--font-secundary-color', 'gold');

    /* dark mode header and footer */
    document.documentElement.style.setProperty('--background-both-primary-color', '#232222' /* cinza escuro quase um preto */);
    document.documentElement.style.setProperty('--background-both-secundary-color', 'rgb(50, 50, 50)');
    document.documentElement.style.setProperty('--font-both-primary-color', 'white');
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