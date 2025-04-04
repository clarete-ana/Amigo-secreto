let lista = [];
let listaAmigos = document.getElementById("lista-amigos");

function adicionar(){

  let amigo = document.getElementById("nome-amigo").value;
  lista.push(amigo);
  listaAmigos.innerHTML +=  amigo + " ,";

}

function sortear(){
  embaralhar(lista);
  let sorteio = document.getElementById("lista-sorteio");

  for(let indice = 0; indice < lista.length ; indice ++){
    if(indice == lista.length - 1){
      sorteio.innerHTML += lista[indice] + " ---> " + lista[0] + "<br>"
    }else{
      sorteio.innerHTML += lista[indice] + " ---> " + lista[indice + 1] + "<br>"
    }
  }
}

function embaralhar(lista){

  for(let indice = lista.length; indice; indice --){

    const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] =
    [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function reiniciar(){
  lista = [];
  let sorteio = document.getElementById("lista-sorteio");
  sorteio.value = "";
  let amigo = document.getElementById("nome-amigo");
  amigo.value = "";
  listaAmigos.innerHTML = "";

}