function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    verificarEnderecoImagem(filmeFavorito)
    campoFilmeFavorito.value = ""
  }
  
  function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }
  
  function verificarEnderecoImagem(endereco){
    if(endereco.endsWith('.jpg')){
      listarFilmesNaTela(endereco)  
    } else {
      alert("Imagem inválida")
    }
  }