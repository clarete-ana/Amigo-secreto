let lista = [];
let listaAmigos = document.getElementById("lista-amigos");

function adicionar(){

  let amigo = document.getElementById("nome-amigo").value;
  if(amigo == ""){
    alert("Não foi digitado nome para sorteio")
  }else{
    if(lista.includes(amigo)){
      alert("Esse amigo já foi adicionado para o sorteio")
      return;
    }
    lista.push(amigo);
    listaAmigos.innerHTML +=  amigo + " ,";
  }
}

function sortear(){
  if(lista.length < 4){
    alert("Adicione pelo menos 4 pessoas para realizar o sorteio")
    return;
  }
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
  sorteio.innerHTML = "";
  let amigo = document.getElementById("nome-amigo");
  amigo.value = "";
  listaAmigos.innerHTML = "";

}