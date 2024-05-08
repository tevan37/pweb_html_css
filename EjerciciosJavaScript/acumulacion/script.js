function agregarElemento() {
    const input = document.getElementById("input").value;
    const lista = document.getElementById("lista");
    
    const elementoLista = document.createElement("li"); //primer paso: creo el elemento
    elementoLista.textContent = input; //segundo paso: agregar el valor
    lista.appendChild(elementoLista);//tercer paso: agregar los elememtos a la lista
    
    const button = document.createElement("button");
    button.textContent = "Borrar";
    elementoLista.appendChild(button);

    button.onclick = function(){
        lista.removeChild(elementoLista)
    }
}