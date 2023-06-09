
function mostrar() {

    let mostrar = document.querySelector('.content');

    mostrar.classList.toggle('mostrar_div');

    let lista_categorias = document.querySelector('.list-categories');

    mostrar.addEventListener('click', (e) => {

        if (e.target != lista_categorias) {
            mostrar.classList.toggle('mostrar_div');
        }
    })

}

document.querySelector('.close').addEventListener('click', () => {

    document.querySelector('.content').classList.remove('mostrar_div');

})