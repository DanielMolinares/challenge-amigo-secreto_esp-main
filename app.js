let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert('Debes ingresar un nombre');
        return;
    }
    //if extra para verifica si el amigo ya está en la lista
    if (amigo.includes(nombreAmigo)) {
        alert('El amigo ya está en la lista');
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigo.length; i++){
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert('No hay amigos en la lista');
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSorteado} es el amigo secreto`;

    amigo = []; //limpiando lista de amigos para poder ingresar nuevos amigos sin refrescar la página
    renderizarAmigos(); // Actualizando la lista de amigos
}
