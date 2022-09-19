let horadia = document.getElementById('conteudo1')
horadia = new Date().getHours()
document.getElementById('conteudo1').innerHTML = `São ${horadia} horas, está de noite!`


if (horadia <= 12) {
   document.getElementById('fotos').src = "/dia.jpg"
    
} else if (horadia <= 18) {
    document.getElementById('fotos').src = "/tarde.jpg"
} else if (horadia <= 23) {
    document.getElementById('fotos').src = "/noite.jpg"
}