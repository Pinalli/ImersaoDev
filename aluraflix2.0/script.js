function addFilm() {
    var favoriteFilm = document.getElementById("filme").value
    if (favoriteFilm.endsWith(".jpg")) {
        filmListScreen(favoriteFilm)
    } else {
        console.error("Endereço de filme inválido!")
    }
    document.getElementById("filme").value = ""
}

function filmListScreen(film) {
    var elemFavoriteFilm = "<img src=" + film + ">"
    var filmList = document.getElementById("listaFilmes")
    filmList.innerHTML = filmList.innerHTML + elemFavoriteFilm

}